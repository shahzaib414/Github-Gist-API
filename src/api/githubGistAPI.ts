import { Gist, GistFile, GistFork, File } from "types/github";
import OctoKitService from "./octokit";

class GithubGistAPI extends OctoKitService {
    constructor() {
        super();
    }
    async getGistByUser(user: string) {
        return this.getRequest<Gist[]>(`/users/${user}/gists`)
    }

    async getForksByGistId(gistId: string) {
        return this.getRequest<GistFork[]>(`/gists/${gistId}/forks`)
    }

    async getFilesContent(files: GistFile) {
        const filesContent: File[] = []
        await Promise.all(Object.keys(files).map(async f => {
            const fileContent = await (await fetch(files[f].raw_url)).text();
            filesContent.push({ content: fileContent, language: files[f].language })
        }))
        return filesContent;
    }
}

export default GithubGistAPI;