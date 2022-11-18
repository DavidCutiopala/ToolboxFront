import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';

const apiURL = "http://127.0.0.1:3000/";

axios.defaults.host = apiURL;
axios.defaults.adapter = httpAdapter;

describe('async files csv', () => {

  it('works with async', async () => {
    const result = await axios.get(`${apiURL}api/routes/secret-files`);

    expect(result.data).toMatchObject({

    });
  });
});