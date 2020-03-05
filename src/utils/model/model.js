import axios from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:3001',
});

export const getAllMovies = () => client.get('/movies');
export const getSelectedMovie = (id) => client.get(`/movies/${id}`);
export const deleteMovie = (id) => client.delete(`/movies/${id}`);
export const editMovie = (movie) => client.put(`/movies/${movie.id}`, movie);

export const getAllActors = () => client.get('/actors');
export const getSelectedActor = (id) => client.get(`/actors/${id}`);

export const addNewUser = (user) => client.post('/users', user);
export const getUser = (user) => client({
  method: 'get',
  url: '/users',
  params: {
    name: user.name,
    password: user.password,
  },
});