// import logo from './logo.svg';
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import Admin from './dashbroad/Admin';
import ManageStudent from './dashbroad/ManageStudent';
import AddStudent from './dashbroad/AddStudent';
import ManageTeacher from './dashbroad/ManageTeacher';
import AddTeacher from './dashbroad/AddTeacher';
import ManageSubject from './dashbroad/ManageSubject';
import AddSubject from './dashbroad/AddSubject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Home' element={<Admin/>}></Route>
        <Route path='/students' element={<ManageStudent/>}></Route>
        <Route path='/teachers' element={<ManageTeacher/>}></Route>
        <Route path='/subjects' element={<ManageSubject/>}></Route>
        <Route path='/addStudent' element={<AddStudent/>}></Route>
        <Route path='/addTeacher' element={<AddTeacher/>}></Route>
        <Route path='/addSubject' element={<AddSubject/>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
