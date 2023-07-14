import React, { useState } from 'react';
import Contact1 from './Contact.css';
function Contact() {
  const[username,setUserName]=useState('')
  const[email,setEmail]=useState('')
  const[contact,setContact]=useState('')
  const[enquiry,setEnquiry]=useState('')
  const handleUserName= (event) =>{
        setUserName(event.target.value);
  }
  const handleEmail= (event) =>{
      setEmail(event.target.value);
  }
  const handleContact= (event) =>{
      setContact(event.target.value);
  }
  const handleEnquiry= (event) =>{
    setEnquiry(event.target.value);
  }
const handleSumbit= (event) =>{
      event.preventDefault();
      setUserName('')
      setEmail('')
      setEnquiry('')
      setContact('')
      
      alert(`form submitted successfully ${username} ${email}`)
  }
return (
  <div className='contact'>
    <form onSubmit={handleSumbit} className='form'>
      <h1>Contact Us</h1>
      <label>
          *Name:
          <br/>
          <input type="text"
          value={username}
          onChange={handleUserName}
          className='input'
         />
      </label>
      <br/>
      <br/>
      <label>
          *Email:
          <br/>
          <input type="text" 
           value={email}
           onChange={handleEmail}
           className='input'
          />
      </label>
      <br />
      <br />
      <label>
          *Contact Number:
          <br/>
          <input type="text"
          value={contact}
          onChange={handleContact}
          className='input'/>
      </label>
      <br />
      <br />
      <label>
          *Enquiry Details:
          <br/>
          <input type="textarea"
          value={enquiry}
          onChange={handleEnquiry}
          className='input'
         />
      </label>
      <br/>
      <br/>
       <button type='submit' className='btn1'>submit</button>
      </form>
  </div>
)
}


export default Contact
