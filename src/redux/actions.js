import * as types from "./actionType";
import axios from "axios";

const getusers =(users)=>({
    type: types.GET_USERS,
    payload: users,
});

const delUsers =()=>({
    type: types.DEL_USERS,
});

const editUsers =()=>({
    type: types.EDIT_USERS,
});

const newUsers =()=>({
    type: types.NEW_USERS,
});


export const loadUsers = () =>{
    return function (data){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{data(getusers(res.data))})
        .catch((err)=>console.log(err.response.data.error));
    }
}

export const deleteUser = (id) =>{
    return function (data){
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
            data(delUsers());
            data(loadUsers());
        }).catch((err)=>console.log(err.response.data.error));
    }
}

export const newUser = (user) =>{
    return function (data){
        axios.post(`https://jsonplaceholder.typicode.com/users`,user).then((res)=>{
            data(newUsers());
        }).catch((err)=>console.log(err.response.data.error));
    }
}

export const editUser = (id,user) =>{
    return function (data){
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,user).then((res)=>{
            data(editUsers());
            data(loadUsers());
        }).catch((err)=>console.log(err.response.data.error));
    }
}