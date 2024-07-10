import React from 'react'
import { Top } from './Top'
import TopNav from './TopNav'
import { Link } from 'react-router-dom'



const Admin = () => {
  return (
    <React.Fragment> 
       <div className="bg-light h-fixed-md">
            <Top/>
            <div className='d-flex'>
            <TopNav/>
                <div className='container-fluid mt-5'>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow-sm rounded-2 bg-warning-2">
                              <div className="card-body h-fixed-xs">

                                  {/* This is inside of card body  */}
                                  <i className="bi bi-house-fill text-danger display-7"></i>
                                  <Link to="/Home" className='text-none font-f text-black'> Dashbroad </Link>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow-sm rounded-2 bg-primary">
                              <div className="card-body h-fixed-xs">
                                  {/* This is inside of card body  */}
                                  <i className="bi bi-mortarboard-fill text-danger display-7"></i> 
                                  <Link to="/ManageStudent" className='text-none font-f text-black'> Manage student</Link>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                     <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow-sm rounded-2 bg-danger">
                              <div className="card-body h-fixed-xs">
                                  {/* This is inside of card body  */}
                                  <i className="bi bi-people-fill text-danger display-7"></i>
                                            <Link to="#" className='text-none font-f text-black mb-1'> Teacher </Link>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>

                     <div className="col-md-3">
                      <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-9"> 
                            <div className="card border-0 shadow-sm rounded-2 bg-info">
                              <div className="card-body h-fixed-xs">
                                  {/* This is inside of card body  */}
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Admin