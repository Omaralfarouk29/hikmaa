import React, { useEffect, useState } from 'react'
import { Top } from './Top'
import TopNav from './TopNav'
import { useNavigate } from 'react-router-dom'
import { subjectList } from '../services/subjectService'

const ManageSubject = () => {
    const navigator = useNavigate()
    const addNewSubject = () => {
        navigator("/addSubject");
    }

    const addNewTeacher = () => {
        navigator("/addTeacher")
    }

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        fetchAllSubject();
    
    }, []);
  
    const fetchAllSubject = () =>{
  
        subjectList().then((response) => {
        setSubjects(response.data);
      }).catch(error => {
        console.error(error);
        
      });
  
    }

    const updateSubject =() => {
      console.log("update teacher");
    }

    const removeSubject = () => {
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
                        <p className="h4 font-f">Subject list</p>
                      </div>
                      <div className="col-md-2">
                        <button className='btn btn-primary' onClick={addNewSubject}>Add subject</button>
                          {/* <Link to="/registersubject" className='btn btn-primary'>Add subject</Link> */}
                      </div>
                    </div>
                    
                    <table className='table table-hover table-bordered mt-4' id='subject-table'>

                      <thead>
                        <tr>
                          <th>S/N</th>
                          <th>Subject name</th>
                          <th>Edit</th>
                          <th>Delete</th>
                        </tr>
                      </thead>

                      <tbody>

                        {subjects.map((subject, index) => (
                          <tr key={index}>
                                  <td>{index + 1}</td>
                                    <td>{subject.subjectName}</td>
                                    <td >
                                      <button className='btn btn-success' onClick={() => updateSubject(subject.id)}>Edit</button>
                                    </td>
                                    <td>
                                      <button className='btn btn-danger' onClick={() => removeSubject(subject.id)}>Delete</button>
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

export default ManageSubject