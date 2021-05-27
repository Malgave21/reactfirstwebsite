import React, { useState } from 'react';

const Contact = ()=> {
  const [data, setDate]= useState({
    fullname:"",
    phone:"",
    email:"",
    massage:"",
  });
const InputEvent =(event) =>{
  const {name,value} = event.target;
  setDate((preVal) =>{
    return{
      ...preVal,[name] : value,
    }
  })
}

 const formSubmit = (e) =>{
   e.preventDefault();
   alert(`my name is ${data.fullname} my mobile number is ${data.phone} my email id is ${data.email} my massage is ${data.massage}`);
 }
  return (
    <>
<div className="my-5">
  <h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
  <div className="row">
    <div className="col-md-6 col-10 mx-auto">
      <form onSubmit={formSubmit}>
      <div class="mb-3">
  <label class="form-label">Full Name</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name"/>
</div>
<div class="mb-3">
  <label class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number"/>
</div>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" name="massage" value={data.massage} onChange={InputEvent} rows="3"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
      </form>
    </div>
  </div>
  </div> 
</>
  );
}

export default Contact;
