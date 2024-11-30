import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast from 'react-hot-toast';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const axios = useAxios();
  const navigate = useNavigate();

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const data = await axios.post('/api/auth/login', formData);
      localStorage.setItem('name', data.data.user.name);
      localStorage.setItem('email', data.data.user.email);
      navigate('/');
      toast.success('login successful')
      
      
    }
    catch (err) {
      toast.error('login failed');
      
    }
    
    
  };

  return (
    <div className="body">
      
      <div className="auth__container">
      <div className="auth__form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form__group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="toggle__link">
            Signup
          </Link>
        </p>
      </div>
      </div>
      
    </div>
  );
};

export default Login;
