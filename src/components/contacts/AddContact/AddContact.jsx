import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";


import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddContact = () => {
  const [company,setCompany]=useState('');
  const [trainername, setTrainername] = useState("");
  const [address,setAddress]=useState('')
  const [photourl, setPhotourl] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [duration,setDuration]=useState('');
  const [dept,setDept]=useState('');
  const [date,setDate]=useState('');
  
  

  // const [productname,setProductname]=useState('')
  // const [description,setDescription]=useState('')

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8080/signup", {
      company,
      trainername,
      address,
      photourl,
      mobile,
      email,
      dept,
      duration,
      date
    });
    navigate("/contacts/list");
  };
  return (
    <>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p
                className="h4 text-primary fw-bold"
                style={{ fontFamily: "timesnew roman" }}
              >
                Training Details
              </p>
            </div>
          </div>





          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label className="form-label fw-bold">Training Company Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Trainer Name : </label>
                  <input
                    type="text"
                    className="form-control"
                    value={trainername}
                    onChange={(e) => setTrainername(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Company's Location : </label>
                  <input
                    type="text"
                    className="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Photo</label>
                  <input
                    type="text"
                    className="form-control"
                    value={photourl}
                    onChange={(e) => setPhotourl(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Contact Number : </label>
                  <input
                    type="number"
                    className="form-control"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Student's Department : </label>
                  <input
                    type="text"
                    className="form-control"
                    value={dept}
                    onChange={(e) => setDept(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label className="form-label fw-bold">Training Duration : </label>
                  <input
                    type="text"
                    className="form-control"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                  />
                </div>
                <div className="mb-2">
                    <label className="form-label fw-bold">Training Date : </label> 
                      <input type="date" className='form-control'  value={date} onChange={e => setDate(e.target.value)}/>
                </div>
               
                <div className="mb-2">
                  <input
                    type="submit"
                    className="btn btn-danger"
                    value="Submit"
                  />
                  {/* <Link to={'/contacts/list'} className="btn btn-dark ms-2" >List</Link> */}
                </div>
              </form>
            </div>
          </div>









          
        </div>
      </section>
    </>
  );
};
export default AddContact;
