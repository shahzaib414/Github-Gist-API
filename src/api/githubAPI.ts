import OctoKitService from "./octokit";

class GithubAPI extends OctoKitService {
    constructor() { 
        super();
    }
   async getGistByUser (user: string) {
       return this.getRequest(`/users/${user}/gists`)
   }
}

export default GithubAPI;