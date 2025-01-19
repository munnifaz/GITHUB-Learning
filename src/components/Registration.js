import axios from 'axios'
import React, { useState } from 'react'

export default function Registration() {
  const[name,setName]=useState("")
  const[number,setNumber]=useState("")
  const[email,setEmail]=useState("")
  const[address,setAddress]=useState("")
  const[qualification,setQualification]=useState("")
  const[language,setLanguage]=useState("")
  
  const synonym=["Caregiver","Change","Hope"]
  const handlechange=(e)=>{
     if(e.target.className==="name"){
      setName(e.target.value)
     }
     else if(e.target.className==="number"){
        setNumber(e.target.value)
     }
     else if(e.target.className==="email"){
      setEmail(e.target.value)
     }
     else if(e.target.className==="address"){
      setAddress(e.target.value)
     }
     else if(e.target.className==="qualify"){
      setQualification(e.target.value)
     }
     else if(e.target.className==="language"){
      setLanguage(e.target.value)
     }
    
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, number, email, address, qualification, language };
    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      alert(response.data);
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  return (
    <div className="registrationform">
      <div className="careimage">
        <div className="careimagetext">
          <span className="bethe">Be The </span>
            <div className="allthree">
            {synonym.map((element)=>{
              return(
                <span>{element}</span>
              )
            })}
            </div>
          
        </div>
      </div>
      <div className="formimage">
        <form onSubmit={handleSubmit}>
          <h1><span>Caregivers</span>  Registration  Form</h1>
          <input type="text" value={name} className="name" placeholder="Full Name" onChange={handlechange}/>
          <input type="date"  className="date" placeholder="Date of Birth"/>
          <input type="text" value={number} className="number" placeholder="Contact Number" onChange={handlechange}/>
          <input type="text" value={email} className="email" placeholder="Email Address" onChange={handlechange}/>
          <span className="image">
          <label for="image">Upload Image</label>
          <input type="file"  className="image"  accept="image/*"/>
          </span>
          <input type="text" value={address} className="address" placeholder="Residential Address" onChange={handlechange}/>
          <span className="aadhar">
          <label for="aadhar">Upload Aadhar</label>
          <input type="file"  accept="image/*" placeholder="Upload Aadhar"/>
          </span>
          <span className="expertise">
            <label for="expertise">Field of Expertise</label>
          <select >
            <option >Field of Expertise</option>
            <option>Elderly Care</option>
            <option>Child Care</option>
            <option>Special Needs Care</option>
            <option>Nursing</option>
            <option>Other</option>

          </select>
          </span>
          <select >
            <option>Year of Expertise</option>
            <option >Less than 1 year</option>
            <option>1-3 years</option>
            <option>3-5 years</option>
            <option>5+ years</option>
          </select>
          <span className="qualification">
          <label for="aadhar">Relevant Qualifications</label>
          <input type="text" value={qualification} className="qualify" placeholder="Qualifications" onChange={handlechange}/>
          </span>
          <span class="form-group">
                <label for="schedule">Preferred Work Schedule</label>
                <div class="checkbox-group">
                    <label><input type="checkbox" className="schedule" value="full-time"/> Full-Time</label>
                    <label><input type="checkbox" className="schedule" value="part-time"/> Part-Time</label>
                    <label><input type="checkbox" className="schedule" value="flexible"/> Flexible Hours</label>
                    <label><input type="checkbox" className="schedule" value="weekends"/> Weekends Only</label>
                </div>
            </span>
            <input type="text" value={language} className="language" placeholder="Language Spoken" onChange={handlechange}/>
            <span className="dl">
          <label for="dl">Do you have a valid Driving License ?</label>
          <select>
            <option>---</option>
            <option>Yes</option>
            <option>No</option>
          </select>
          </span>
          <button className="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
