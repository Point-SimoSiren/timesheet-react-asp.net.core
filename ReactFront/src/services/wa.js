import axios from 'axios'
const baseUrl = 'https://reacttimesheet.azurewebsites.net/api/workassignments'

const getAll = async () => {
    const req = axios.get(baseUrl)
    return req.then(res => res.data)
}

const create = async newWa => {
    return axios.post(baseUrl, newWa)
}

const update = async (id, changedWa) => {
    const req = axios.put(`${baseUrl}/${id}`, changedWa)
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