/**
 * Naming Convention here is same as Github API response 
 */
export interface Gist {
    id: string;
    description: string;
    files: GistFile
    forks_url: string;
    public: boolean;
    url: string;
}
export interface GistFile {
    [name: string]: {
        filename: string
        language: string
        raw_url: string
    }
}

export interface GistFork { 
    id: string;
    owner: GithubUser;

}
export interface GithubUser { 
    login: string;
    avatar_url: string
}