import axios from 'axios';

const getMembers = () =>
{
    return axios.get("http://localhost:8000/api/members")
}

const getMember = (id) =>
{
    return axios.get("http://localhost:8000/api/members/" + id)
}

const addMember = (obj) =>
{
    return axios.post("http://localhost:8000/api/members/",obj )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default  {getMembers, getMember, addMember};