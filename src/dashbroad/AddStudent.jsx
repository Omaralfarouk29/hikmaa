import React, { useState } from 'react'
import { Top } from './Top'
import TopNav from './TopNav'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const navigator = useNavigate();

    const [firstName, setFirstName] =  useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [dob, setDOB] = useState(''); 
    const [studentId, setStudentId] = useState(''); 

    const saveStudent = () => {
        console.log("this is saved student here ");
    }
  return (
    <>
          <div className="bg-light h-fixed-md">
            <Top/>
            <div className='d-flex'>
                <TopNav/>
               

                <div className="row ms-5 mt-5">
                        {/* <div className="col-md-2"></div> */}
                        <div className="col-md-10 ms-5 ">
                            <div className="card border-0 shadow-sm rounded-0">
                                <div className="card-body">
                                    {/* { pageTitle() } */}
                                         <p className="lead text-center font-f">Register student</p>
                                        <form action="#" className='px-3'>
                                        <div className="input-group mb-2">
                                                <label htmlFor="last" className='font-f'>Enter student ID </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text"
                                               className="form-control rounded-1" 
                                                 placeholder="student ID"  value={studentId} onChange={(e) => setStudentId(e.target.value)} />

                                            </div>
                                            <div className="input-group mb-2">
                                                <label htmlFor="first" className='font-f'>Enter first name </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" 
                                                className="form-control rounded-1" 
                                                placeholder="First name" value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}  
                                                />

                                            </div>
                                            <div className="input-group mb-2">
                                                <label htmlFor="last" className='font-f'>Enter middle name </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text"
                                               className="form-control rounded-1" 
                                                 placeholder="middle name"  value={middleName} onChange={(e) => setMiddleName(e.target.value)} />

                                            </div>
                                           
                                            <div className="input-group mb-2">
                                                <label htmlFor="last" className='font-f'>Enter last name </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text"
                                               className="form-control rounded-1" 
                                                 placeholder="Last name"  value={lastName} onChange={(e) => setLastName(e.target.value)} />

                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="phone" className='font-f'>Enter phone number </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="tel"
                                                  className="form-control rounded-1" 
                                                    placeholder="Phone number" 
                                                 value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                                            </div>
                                            <div class="input-group mb-2">
                                                <label htmlFor="phone" className='font-f'>Enter DOB </label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="date"
                                                  className="form-control rounded-1" 
                                                 value={dob} onChange={(e) => setDOB(e.target.value)} />

                                            </div>
                                            <div className="input-group mb-2">
                                                <label htmlFor="email" className='font-f'>Enter  address</label> 
                                            </div>
                                            <div class="input-group mb-3">
                                                <input type="email" 
                                                 className="form-control rounded-1" 
                                                 placeholder=" address"  value={address} onChange={(e) => setAddress(e.target.value)} />

                                               
                                            </div>
                                            <div className="input-group mb-2">
                                                <label htmlFor="institite" className='font-f'>Enter gender</label> 
                                            </div>
                                            <div className="input-group mb-3">
                                                <input type="text" 
                                                  className="form-control rounded-1" 
                                                 placeholder="Enter institute name"  value={gender} onChange={(e) => setGender(e.target.value)} />

                                          
                                            </div>
                                            <div className="input-group mb-4">
                                                <button className='btn btn-warning w-100' onClick={saveStudent}>Save student</button>
                                            </div>
                                        </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            </div>
    </>
  )
}

export default AddStudent