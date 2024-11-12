import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import TeacherLogin from './components/login/TeacherLogin';
import ForgotPasswordActivity from './components/forgotpass/ForgotPasswordActivity';
import UpdatePassword from './components/update/UpdatePassword';
import Phonghoc from './components/phong/Phonghoc';
import AddNewRow from './components/add/AddNewRow';
import Edituser from './components/user/Edituser';
import AdminLogin from './components/login/AdminLogin';
import PhongHocSV from './components/phong/PhongHocSV';
import PhongHocGV from './components/phong/PhongHocGV';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />{/* Route for the Login page */}
        <Route path="/admin-login" element={<AdminLogin />} />{/* Route for Admin Login page */}
        <Route path="/teacher-login" element={<TeacherLogin />} />{/* Route for the Teacher Login page */}


        <Route path="/forgot-password" element={<ForgotPasswordActivity />} />{/* Route for Forgot Password page */}
        <Route path="/update-password" element={<UpdatePassword />} />{/* Route for Update Password page */}


        <Route path="/edit-user" element={<Edituser />} />{/* Route for editing user information */}
        <Route path="/add-new-room" element={<AddNewRow />} />{/* Route for adding a new room */}


        <Route path="/phonghoc" element={<Phonghoc />} />{/* Route for Phonghoc (classroom management) page */}
        <Route path="/phonghocsv" element={<PhongHocSV />} />{/* Route for PhongHocSV (student classroom schedule) page */}
        <Route path="/phonghocgv" element={<PhongHocGV />} />{/* Route for the PhongHocGV page (teacher classroom schedule) */}
      </Routes>
    </Router>
  );
};

export default App;
