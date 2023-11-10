const BASE_API_URL = 'https://apidiplom.nomoredomainsrocks.ru';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const registerUser = async ({ name, email, password }) => {
  return fetch(`${BASE_API_URL}/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};

export const authorizeUser = async ({ email, password }) => {
  return fetch(`${BASE_API_URL}/signin`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      email,
      password,
    }),
  }).then((res) => checkResponse(res));
};

export const getUserInfo = async (jwt) => {
  return fetch(`${BASE_API_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => checkResponse(res));
};

export const updateUserInfo = async (data, jwt) => {
  return fetch(`${BASE_API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      ...headers,
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then((res) => checkResponse(res));
};

export const getSavedMovies = async (jwt) => {
  return fetch(`${BASE_API_URL}/movies`, {
    method: 'GET',
    headers: {
      ...headers,
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => checkResponse(res));
};

export const deleteSavedMovie = async (id, jwt) => {
  return fetch(`${BASE_API_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => checkResponse(res));
};

export const saveMovie = async (movie, jwt) => {
  return fetch(`${BASE_API_URL}/movies`, {
    method: 'POST',
    headers: {
      ...headers,
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: 'https://api.nomoreparties.co' + movie.image.url,
      trailerLink: movie.trailerLink,
      thumbnail: 'https://api.nomoreparties.co//uploads/blur_a43fcf463d.jpeg',
      movieId: movie.id,
      nameRU: movie.nameRU || movie.nameEN,
      nameEN: movie.nameEN || movie.nameRU,
    }),
  }).then((res) => checkResponse(res));
};
