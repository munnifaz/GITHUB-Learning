import React, { useState } from 'react'
import emailjs from "emailjs-com"

export default function Contact() {
    const [status, setStatus] = useState("");
    const[name,setName]=useState("Full Name")
    const[email,setEmail]=useState("Email Address")
    const[message,setMessage]=useState("Enter your Message Here")
    const[robot,setRobot]=useState(false)
    console.log(status)

    const handlename=(e)=>{
        setName(e.target.value)
    }
    const handleemail=(e)=>{
        setEmail(e.target.value)
    }
    const handlemssg=(e)=>{
        setMessage(e.target.value)
    }
    const handleClick=(e)=>{
        if(e.target.name==="name"){
            setName("");
        }
        else if(e.target.name==="email"){
            setEmail("");
        }
        else if(e.target.name==="message"){
            setMessage("");
        }
    }
    const handlerobo=(e)=>{
       setRobot(e.target.checked)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs
          .send(
            "service_4r3d0ha", // Replace with your EmailJS Service ID
            "template_heuei0i", // Replace with your EmailJS Template ID
            {
                name,              // Passing individual fields
                email,
                message,
              },
            "R_SWFGG_XmrW_H6yx" // Replace with your EmailJS Public User ID
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              setStatus("Email sent successfully!");
            },
            (error) => {
              console.error("FAILED...", error);
              setStatus("Failed to send email. Please try again later.");
            }
          );
          const updatename="Full Name"
          const updateemail="Email Address"
          const updatemessage="Enter your Message"

          setName(updatename)
          setEmail(updateemail)
          setMessage(updatemessage)
          setRobot(false)
        }
  return (
    <div className="page6" id="contactus">
      <h4>CONTACT US</h4>
      <div className="contactimg" >
        <div className="contactform">
            <p>If you have any queries, drop them here</p>
            <span className="inputfield">
            <span className="inputfield1">
            <label htmlFor="name">Name</label>
            <input type="text" value={name} name="name" onChange={handlename} onClick={handleClick} />
            </span>
            <span className="inputfield2">
            <label htmlFor="email">Email</label>
            <input type="text" value={email} name="email" onChange={handleemail} onClick={handleClick}/>
            </span>
            </span>
            <label htmlFor="message">Message</label>
            <input type="text" value={message} name="message" onChange={handlemssg} onClick={handleClick} className="mssg"/>
            <span className="checkbox"><input type="checkbox" name="robot" checked={robot} placeholder="I'm not a robot" onChange ={handlerobo}/>I'm not a robot</span>
            <button className="send" onClick={handleSubmit}>Send</button>

        </div>
        <div className="childimg">
        <img src='./contact.png' alt="frame"/>
        </div>
      </div>
    </div>
  )
}
