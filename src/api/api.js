
const baseUrl = 'http://127.0.0.1:8080';

const send = ({ method, path, data, token }) => {

  const opts = { method, headers: {} };

  if (data) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(data);
  }

  if (token) {
    opts.headers['Authorization'] = `Bearer ${token}`;
  }

  const url = `${baseUrl}/${path}`;
  //console.log('url: ' + url);

  return fetch(url, opts)
    .then(res => res.json());
};

export const get = (path, token) => send({ method: 'GET', path, token });

export const del = (path, token) => send({ method: 'DELETE', path, token });

export const post = (path, data, token) => send({ method: 'POST', path, data, token });

export const put = (path, data, token) => send({ method: 'PUT', path, data, token });
