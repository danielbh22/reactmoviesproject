import axios from 'axios';

const getSubscriptions = () =>
{
    return axios.get("http://localhost:8000/api/subscriptions")
}

const getSubscription = (id) =>
{
    return axios.get("http://localhost:8000/api/subscriptions/" + id)
}

const addSubscription = (obj) =>
{
    return axios.post("http://localhost:8000/api/subscriptions",obj )
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  {getSubscriptions, getSubscription, addSubscription};