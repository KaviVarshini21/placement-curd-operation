import React,{useState,useEffect} from 'react';
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const EditContact  = () => {
        const navigate = useNavigate()
         let { contactId} = useParams()
        // const user = JSON.parse(contactId)
        const [user,setUsers]=useState(null)
        const [dis,setDis]=useState(false)
        const getData = async()=>{
            const {data}=await axios.get(`http://localhost:8080/view/${contactId}`)
            console.log(data)
            setUsers(data)
        }
        useEffect(()=>{
            getData()
        },[])
        useEffect(()=>{
                if(user!=null){
                    setCompany(user.company)
                    setTrainername(user.name)
                    setAddress(user.address)
                    setPhotourl(user.photourl)
                    setMobile(user.mobile)
                    setEmail(user.email)
                    setDept(user.dept)
                    setDuration(user.duration)
                    setDate(user.date)
                    
                    setDis(true)
                }
        },[user])
    console.log(user)
   
  const [company,setCompany]=useState('');
  const [trainername, setTrainername] = useState("");
  const [address,setAddress]=useState('')
  const [photourl, setPhotourl] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [duration,setDuration]=useState('');
  const [dept,setDept]=useState('');
  const [date,setDate]=useState('');
  


    

    const handleSubmit =async (e) =>{
        e.preventDefault();
        const {data}=await axios.post(`http://localhost:8080/edit/${user._id}`,{ company,
        trainername,
        address,
        photourl,
        mobile,
        email,
        dept,
        duration,
        date})
        navigate('/contacts/list')
}
   
    return (
        
        <>
        <section className='add-contact p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary fw-bold">
                            Update Training Details
                        </p>
                        
                    </div>
                </div>
                {dis && 
                <div className="row align-items-center">
                    <div className="col-md-4">
                            <form>
                                
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
                                   <input type="submit" className='btn btn-primary' value='Update' onClick={handleSubmit}/>
                                   {/* <Link to={'/contacts/list'} className="btn btn-dark ms-2" >Cancel</Link> */}
                               
                                </div>   
                            </form>
                    </div>
                    
                </div>
}
            </div>
        </section>
        </>
    )
};
export default EditContact ;