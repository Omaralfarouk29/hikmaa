import React, { useEffect, useState } from 'react'
import TopNav from './TopNav'
import { Top } from './Top'
import { useNavigate } from 'react-router-dom'
import { studentList } from '../services/studentService'

const ManageStudent = () => {
    const naviggator = useNavigate();

    const addNewStudent = () => {
        naviggator("/addStudent")
    }

    const [students, setStudents] = useState([]);

    useEffect(() => {
      fetchAllStudent();
    
    }, []);
  
    const fetchAllStudent = () =>{
  
      studentList().then((response) => {
        setStudents(response.data);
      }).catch(error => {
        console.error(error);
        
      });
  
    }

    const updateStudent =() => {
      console.log("update student");
    }

    const removeStudent = () => {
      console.log("delete student ");
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
                            <p className="h4 font-f">Students list</p>
                          </div>
                          <div className="col-md-2">
                            <button className='btn btn-primary' onClick={addNewStudent}>Add student</button>
                              {/* <Link to="/registerStudent" className='btn btn-primary'>Add student</Link> */}
                          </div>
                        </div>
                        
                        <table className='table table-hover table-bordered mt-4' id='student-table'>

                          <thead>
                            <tr>
                              <th>S/N</th>
                              <th>Student Id</th>
                              <th>First name</th>
                              <th>Middle name</th>
                              <th>Last name</th>
                              <th>Phone number</th>
                              <th>Edit</th>
                              <th>Delete</th>
                            </tr>
                          </thead>

                          <tbody>

                            {students.map((student, index) => (
                              <tr key={index}>
                                      <td>{index + 1}</td>
                                        <td>{student.regNo}</td>
                                        <td> {student.instituteName + " "+student.lastName }</td>
                                        <td>{student.phoneNumber}</td>
                                        <td>{student.email}</td>
                                        <td>{student.firstName}</td>
                                        <td >
                                          <button className='btn btn-success' onClick={() => updateStudent(student.id)}>Edit</button>
                                        </td>
                                        <td>
                                          <button className='btn btn-danger' onClick={() => removeStudent(student.id)}>Delete</button>
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

export default ManageStudent