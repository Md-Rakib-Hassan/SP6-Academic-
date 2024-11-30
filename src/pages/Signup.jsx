import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import toast from 'react-hot-toast';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
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
    try {
      const data = await axios.post('/api/auth/signup', formData);
      navigate('/login');
      toast.success('Sign up successful')
    }
    catch (err) {
      toast.error('Sign up failed')
      
    }
  };

  return (
    <div className="body">
      <div className="auth__container">
      <div className="auth__form">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
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
            Signup
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="toggle__link">
            Login
          </Link>
        </p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
