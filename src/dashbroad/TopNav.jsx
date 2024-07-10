import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TopNav = () => {
    const childSuperRef = useRef(null);
    const childSettingRef = useRef(null);

    const navigator = useNavigate();

    const settingHandler = () => {
        const childSetting = childSettingRef.current;
        const childSuper = childSuperRef.current;

        if (childSetting && childSetting.classList.contains('d-none')) {
            childSetting.classList.replace('d-none', 'd-block');

            if (childSuper && childSuper.classList.contains('d-block')) {
                childSuper.classList.replace('d-block', 'd-none');
            }
        } else if (childSetting) {
            childSetting.classList.replace('d-block', 'd-none');
        }
    };

    const logoutHandler =() => {
        localStorage.removeItem('user');
        localStorage.removeItem('role');

        navigator("/signup");
    }

    //  session code 

    const [role, setRole] = useState('');

    useEffect(() => {
        // Retrieve data from localStorage
        // const storedUsername = localStorage.getItem('user');
        const storedRole = localStorage.getItem('role');
    
        // Parse JSON if data exists
        if (storedRole) {
          setRole(JSON.parse(storedRole));
        }
      }, []);

    return (
        <React.Fragment>
            <aside>
                <div className="card border-0 shadow-sm rounded-0">
                    <div className="card-body h-fixed w-fixed">
                        <ul className='nav mt-4'>
                            <li className='list-none mb-2'>
                                <i className="bi bi-house-fill text-danger display-7"></i>
                                <Link to="/Home" className='text-none font-f text-black'> Dashbroad </Link>
                            </li>
                                         <li className='list-none mb-2'>
                                            <i className="bi bi-mortarboard-fill text-danger display-7"></i> 
                                            <Link to="/students" className='text-none font-f text-black'> Manage student</Link>
                                        </li>

                                        <li className='list-none mb-2'>
                                            <i className="bi bi-mortarboard-fill text-danger display-7"></i> 
                                            <Link to="/teachers" className='text-none font-f text-black'> Teacher</Link>
                                        </li>

                                        <li className='list-none mb-2'>
                                            <i className="bi bi-card-text text-danger display-7"></i> 
                                            <Link to="/subjects" className='text-none font-f text-black'> Manage Subject</Link>
                                        </li>


                           
            
                            <li className='list-none mb-2' onClick={settingHandler}>
                                <i className="bi bi-gear-fill text-danger  display-7"></i>
                                <Link to="#" className='text-none font-f text-black mb-1'> Comments<span className='text-white'>data center</span> </Link>
                                <ul className='ps-4 d-none' ref={childSettingRef}>
                                            <li className='list-none mb-1'>
                                                <Link to='/MyProfile' className='text-none font-f text-black'>My account</Link>
                                            </li>
                                    <li className='list-none'>
                                        <Link to='/ChangePassword' className='text-none font-f text-black'>Change password</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className='list-none'>
                                <i className="bi bi-box-arrow-in-right text-danger  display-7"></i> 
                                <Link to='/' className='text-none font-f text-black'>Logout</Link>

                                {/* <span onClick={logoutHandler} className='ms-1 text-none font-f text-black' style={{cursor:"pointer"}}>Logout</span> */}
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </aside>
        </React.Fragment>
    );
};

export default TopNav;


