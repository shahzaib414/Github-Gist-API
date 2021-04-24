import { request as OctoKit } from "@octokit/request";

interface OctokitResponse<T> {
    status: number;
    data: T;
    headers: {}
}

class OctokitService {
    async getRequest<T>(requestUrl: string) {
        const { REACT_APP_GITHUB_API_TOKEN } = process.env;
        let result: OctokitResponse<T> = await OctoKit(`GET ${requestUrl}`, {
            headers: {
                authorization: REACT_APP_GITHUB_API_TOKEN,
            },
            org: "octokit",
            type: "private",
        });

        const { status, data } = result
        
        return { status, data }
    }
}

export default OctokitService