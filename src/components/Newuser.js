import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { newUser} from "../redux/actions";
const Newuser = () => {
  const { register, handleSubmit} = useForm();
  const onSubmit = data => {
    dispatch(newUser(data));
    navigate("/");
  }
  let dispatch=useDispatch();
  let navigate=useNavigate();
  return (
    <div id='form_div' className='container card p-0 mt-5'>
    <h1 className='card-header text-start fs-5'>New User</h1>
    <div className='p-5'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 mt-3 row">
        <label htmlFor="name" className='form-label col-3'>Name</label>
        <input id="name" placeholder='name' className='form-control col' {...register("Name")} />
      </div>
      <div className="mb-3 mt-3 row">
        <label htmlFor="email" className='form-label col-3'>Email</label>
        <input id="email" placeholder='email' className='form-control col' {...register("Email")} />
      </div>
      <div className="mb-3 mt-3 row">
        <label htmlFor="phone" className='form-label col-3'>Contact</label>
        <input id="phone" placeholder='phone' className='form-control col' {...register("Contact")} />
      </div>
      <div className="mb-3 mt-3 row">
        <label htmlFor="Address" className='form-label col-3'>Address</label>
        <textarea id="Address" placeholder='Address' className='form-control col' {...register("Address")} />
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

export default Newuser