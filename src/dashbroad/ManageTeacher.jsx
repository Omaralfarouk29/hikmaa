import React, { useEffect, useState } from 'react'
import { Top } from './Top';
import TopNav from './TopNav';
import { useNavigate } from 'react-router-dom';
import { teacherList } from '../services/teacherService';

const ManageTeacher = () => {
    const naviggator = useNavigate();
    const addNewTeacher = () => {
        naviggator("/addTeacher")
    }

    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
      fetchAllTeacher();
    
    }, []);
  
    const fetchAllTeacher = () =>{
  
      teacherList().then((response) => {
        setTeachers(response.data);
      }).catch(error => {
        console.error(error);
        
      });
  
    }

    const updateTeacher =() => {
      console.log("update teacher");
    }

    const removeTeacher = () => {
      console.log("delete teacher ");
    }
  
  return (
    <>
    <div className="bg-light h-fixed-md">
        <Top/>
        <div className='d-flex'>
            <TopNav/>

            <div className='container-fluid mt-5'>
                <div className="card border-0 shadow-sm rounded-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-10">
                        <p className="h4 font-f">Teacher list</p>
                      </div>
                      <div className="col-md-2">
                        <button className='btn btn-primary' onClick={addNewTeacher}>Add teacher</button>
                          {/* <Link to="/registerteacher" className='btn btn-primary'>Add teacher</Link> */}
                      </div>
                    </div>
                    
                    <table className='table table-hover table-bordered mt-4' id='teacher-table'>

                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>ID no</th>
                          <th>First name</th>
                          <th>Middle name</th>
                          <th>Last name</th>
                          <th>Phone number</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>

                      <tbody>

                        {teachers.map((teacher, index) => (
                          <tr key={index}>
                                  <td>{index + 1}</td>
                                    <td>{teacher.regNo}</td>
                                    <td> {teacher.instituteName + " "+teacher.lastName }</td>
                                    <td>{teacher.phoneNumber}</td>
                                    <td>{teacher.email}</td>
                                    <td>{teacher.firstName}</td>
                                    <td >
                                      <button className='btn btn-success' onClick={() => updateTeacher(teacher.id)}>Edit</button>
                                    </td>
                                    <td>
                                      <button className='btn btn-danger' onClick={() => removeTeacher(teacher.id)}>Delete</button>
                                    </td>
                          </tr>
                        ))}

                      </tbody>
                    </table>
                  </div>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default ManageTeacher