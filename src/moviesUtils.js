import axios from 'axios';

const getMovies = () =>
{
    return axios.get("http://localhost:8000/api/movies")
}

const getMovie = (id) =>
{
    return axios.get("http://localhost:8000/api/movies/" + id)
}


// eslint-disable-next-line import/no-anonymous-default-export
export default  {getMovies, getMovie};