import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast from 'react-hot-toast';
const Update = () => {
  const [formData, setFormData] = useState({
    current_password: "",
    new_password: "",
  });
  const axios = useAxios();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const usernewData = formData;
    usernewData.email=localStorage.getItem('email');
    try {
      const data = await axios.put('/api/auth/change-password', usernewData);
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      navigate('/login');
      toast.success('Password update successful')
    }
    catch (err) {
      toast.error('Password update failed')
      
    }
  };

  return (
    <div className="body">
      <div className="auth__container">
      <div className="auth__form">
        <h1>Update</h1>
          <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="current_password">Current Password</label>
            <input
              type="password"
              id="name"
              name="current_password"
              placeholder="Enter your old Password"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          
          <div className="form__group">
            <label htmlFor="new_password">New Password</label>
            <input
              type="password"
              id="password"
              name="new_password"
              placeholder="Enter your new password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Update
          </button>
        </form>
        
      </div>
    </div>
    </div>
  );
};

export default Update;
