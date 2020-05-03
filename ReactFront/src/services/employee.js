import axios from 'axios'
const baseUrl = 'https://reacttimesheet.azurewebsites.net/api/employee'

const getAll = async () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = async newEmployee => {
    return axios.post(baseUrl, newEmployee)
}

const update = async (id, changedEmployee) => {
    const req = axios.put(`${baseUrl}/${id}`, changedEmployee)
    const res = await req
    return res.data
}

const remove = id => axios.delete(`${baseUrl}/${id}`)

export default {
    getAll,
    create,
    update,
    remove
}