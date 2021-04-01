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

const deleteMember = (id) =>
{
    return axios.delete("http://localhost:8000/api/members/" + id )
}

const updateMember = (id ,obj) =>
{
    return axios.put("http://localhost:8000/api/members/" + id, obj )
}


// eslint-disable-next-line import/no-anonymous-default-export
export default  {getMembers, getMember, addMember, deleteMember, updateMember};