import { Gist, GistFork } from "../types/github";
import OctoKitService from "./octokit";

class GithubGistAPI extends OctoKitService {
    constructor() { 
        super();
    }
   async getGistByUser (user: string) {
       return this.getRequest<Gist[]>(`/users/${user}/gists`)
   }

   async getForksByGistId (gistId: string) {
       return this.getRequest<GistFork[]>(`/gists/${gistId}/forks`)
   } 
}

export default GithubGistAPI;