import * as types from "./actionType";
import axios from "axios";
import {useState} from "react";

const getusers =(users:any)=>({
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
    
let loadd:any;
let editt:any;
let deletee:any;
let neww:any;
export const loadUsers = () =>{
    loadd= function(data:any){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{data(getusers(res.data))})
        .catch((err)=>console.log(err.response.data.error));
    }
    return loadd;
}

export const deleteUser = (id:number) =>{
    deletee=function(data:any){
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{
            data(delUsers());
            data(loadUsers());
        }).catch((err)=>console.log(err.response.data.error));
    }
    return deletee;
}

export const newUser = (user:any) =>{
    neww= function(data:any){
        axios.post(`https://jsonplaceholder.typicode.com/users`,user).then((res)=>{
            data(newUsers());
        }).catch((err)=>console.log(err.response.data.error));
    }
    return neww;
}

export const editUser = (id:any,user:any) =>{
    editt= function(data:any){
        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,user).then((res)=>{
            data(editUsers());
            data(loadUsers());
        }).catch((err)=>console.log(err.response.data.error));
    }
    return editt;
}