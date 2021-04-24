export interface Gist {
    id: string;
    description: string;
    files: {}
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