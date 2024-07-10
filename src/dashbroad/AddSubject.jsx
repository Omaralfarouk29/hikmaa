import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Top } from './Top';
import TopNav from './TopNav';

const AddSubject = () => {
    const navigator = useNavigate();

    const [subjectName, setSubjectName] =  useState('');

    const saveSubject =  () => {
        console.log("saved teacher ");
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
                                   <p className="lead text-center font-f">Register subject</p>
                                  <form action="#" className='px-3'>
                    
                                      <div className="input-group mb-2">
                                          <label htmlFor="first" className='font-f'>Enter first name </label> 
                                      </div>
                                      <div className="input-group mb-3">
                                          <input type="text" 
                                          className="form-control rounded-1" 
                                          placeholder="First name" value={subjectName}
                                          onChange={(e) => setSubjectName(e.target.value)}  
                                          />

                                      </div>
                                      <div className="input-group mb-4">
                                          <button className='btn btn-warning w-100' onClick={saveSubject}>Save student</button>
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

export default AddSubject