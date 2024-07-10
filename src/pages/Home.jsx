import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <React.Fragment>
           <div className="row">
            <div className="col-md-3"></div>
            <div className="card col-md-5 mt-5">
                <div className="card-body">
                    <p className="lead text-center ">Login form </p>
                    <form action="#" method="post">
                        <div className="form-group mb-3">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="username" className="form-control" required/>
                        </div>

                        <div className="form-group mb-3">
                            <label for="Password">Password</label>
                            <input type="Password" id="Password" name="Password" placeholder="Password" className="form-control" required/>
                        </div>
                        <div className="form-group mb-3">
                            <button type="submit" name="btn_login" id="btn_login" className="form-control btn btn-success">
                                Login
                            </button>
                        </div>
                        <p className="lead">
                            <Link to='Home'>Go to dashbroad</Link>
                        </p>
                    </form>
                </div>
            </div>
           </div>
        </React.Fragment>
    );
}

export default Home