import React, {useEffect,useState} from 'react';
import { useForm } from "react-hook-form";
import { useDispatch} from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import { editUser} from "../redux/actions";
import axios from "axios";


const Edit = () => {
  const { register, handleSubmit} = useForm();
  const [val,getVal]=useState({
    name:"",
    email:"",
    phone:""

  });
  const [val1,getVal1]=useState([]);
  let dispatch=useDispatch();
  let navigate=useNavigate();
  let {id}=useParams();
  const onSubmit = (data: any) => {
    dispatch(editUser(id,data));
    navigate("/");
  }
  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{getVal(res.data)})
        .catch((err)=>console.log(err.response.data.error));  
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res)=>{getVal1(res.data.address)})
        .catch((err)=>console.log(err.response.data.error));   
  },[])

  return (
    <div id='form_div' className='container card p-0 mt-5'>
    <h1 className='card-header text-start fs-5'>Edit User</h1>
    <div className='p-5'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 mt-3 row">
        <label htmlFor="name" className='form-label col-3'>Name</label>
        <input id='name' placeholder='name' className='form-control col' defaultValue={val.name} {...register("Name")} />
      </div>
      <div className="mb-3 mt-3 row">
        <label htmlFor="email" className='form-label col-3'>Email</label>
        <input id='email' placeholder='email' className='form-control col' defaultValue={val.email} {...register("Email")} />
      </div>
      <div className="mb-3 mt-3 row">
        <label htmlFor="phone" className='form-label col-3'>Contact</label>
        <input id='phone' placeholder='phone' className='form-control col' defaultValue={val.phone} {...register("Contact")} />
      </div>
      <div className="mb-3 mt-3 row">
        <label htmlFor="Address" className='form-label col-3'>Address</label>
        <textarea id='Address' placeholder='Address' className='form-control col' defaultValue={ Object.values(val1).slice(0,-1).toString()} {...register("Address")} />
      </div>
      <div className="text-center mt-4">
        <input className="btn btn-primary text-center" type="submit" />
        <button onClick={()=>navigate("/")} className="ms-3 btn btn-secondary text-center">Cancel</button>
      </div>
    </form>
    </div>
    </div>
  );
}

export default Edit