import React, {useState,useEffect} from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import axios from "axios"
let ViewContact  = () => {
    let { contactId } = useParams();
    
    // const user = JSON.parse(contactId)
    // console.log(user)
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
                setDis(true)
            }
    },[user])
    
    return (
        <>
        <section className='view-contact-intro'>
            <div className="container">
               <div className="row">
                <div className="col">
                    
                </div>
               </div>
            </div>

        </section>
        {dis && 
        <section className='view-contact mt-3'>
            <div className="container">
                <div className="row align-items-center">
                    
                    <div className="col-md-6">
                    <ul className='list-group'>
                        <li className='list-group-item list-group-item-action'>
                                           Company Name: <span className='fw-bold'>{user.company}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                           Trainer Name: <span className='fw-bold'>{user.trainername}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                           Company's Address : <span className='fw-bold'>{user.address}</span>
                                        </li>
                                       
                                        <li className='list-group-item list-group-item-action'>
                                            Mobile Number : <span className='fw-bold'>{user.mobile}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                            Email: <span className='fw-bold'>{user.email}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                          Department : <span className='fw-bold'>{user.dept}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                          Duration : <span className='fw-bold'>{user.duration}</span>
                                        </li>
                                        <li className='list-group-item list-group-item-action'>
                                          Date : <span className='fw-bold'>{user.date}</span>
                                        </li>
                                
                                        <li className='list-group-item list-group-item-action'>
                                        Photo: <br /><img src={user.photourl} style={{witdth:"20px",height:"200px"}}></img> 
                                        </li>
                                        <br /><br /><Link to={'/contacts/list'} className="btn btn-primary">Detail's list</Link>
                                       

                        </ul>
                   
                                        
                                 </div>
                   

                </div>
                <br /><br />
                
            </div>
                
           

        </section>
}
        </>
    )
};
export default ViewContact ;