import { GithubGistAPI } from "api"

  
test('Should fetch Gist list', async () => {
    const api = new GithubGistAPI();
    const { status } = await api.getGistByUser('Shahzaib414')
    expect(status).toBe(200);
});

test('Should fetch Fork', async () => {
    const api = new GithubGistAPI();
    const { status } = await api.getForksByGistId('9de9c9aa08f2f357d1efc092bb1d1c77')
    expect(status).toBe(200);
});