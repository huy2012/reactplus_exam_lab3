import axios from "axios";

export const removeToDo = (id : string) => {
    return axios.delete("https://5d36d86c86300e0014b647c7.mockapi.io/todos/" + id)
}

export const getAllToDo = () => {
    return axios.get("https://5d36d86c86300e0014b647c7.mockapi.io/todos")
}

export const updateToDo = (id : string , name : string , content : string) => {
    return axios.put("https://5d36d86c86300e0014b647c7.mockapi.io/todos/" + id , {
        name,
        content
    })
}

export const addToDo = ( name : string , content : string) => {
    return axios.post("https://5d36d86c86300e0014b647c7.mockapi.io/todos" , {
        name,
        content
    })
}
