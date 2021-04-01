import axios from 'axios';

const getMovies = () =>
{
    return axios.get("http://localhost:8000/api/movies")
}

const getMovie = (id) =>
{
    return axios.get("http://localhost:8000/api/movies/" + id)
}

const addMovie = (obj) =>
{
    return axios.post("http://localhost:8000/api/movies/",obj )
}

const deleteMovie = (id) =>
{
    return axios.delete("http://localhost:8000/api/movies/" + id )
}

const updateMovie = (id ,obj) =>
{
    return axios.put("http://localhost:8000/api/movies/" + id, obj )
}

const searchMovies = async(search) =>
{
    let resp = await axios.get("http://localhost:8000/api/movies")
    let respd = resp.data
    let chars = search.toLowerCase()

    let result = [];
    result = respd.filter( x => x.name.toLowerCase().includes(chars) );

    return result

}
// eslint-disable-next-line import/no-anonymous-default-export
export default  {getMovies, getMovie, addMovie, deleteMovie, updateMovie, searchMovies};