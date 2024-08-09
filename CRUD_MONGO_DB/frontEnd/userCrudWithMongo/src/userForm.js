import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, updateUser, currentUser, setCurrentUser }) => {
  const [user, setUser] = useState({ _id: null, firstName: '', lastName: '' });

  useEffect(() => {
    if (currentUser._id !== null) {
      setUser(currentUser);
    } else {
      setUser({ _id: null, firstName: '', lastName: '' });
    }
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user._id === null) {
      addUser(user);
    } else {
      updateUser(user._id, user);
    }
    setUser({ _id: null, firstName: '', lastName: '' });
    setCurrentUser({ _id: null, firstName: '', lastName: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="firstName" 
        placeholder="First Name" 
        value={user.firstName} 
        onChange={handleInputChange} 
        required 
      />
      <input 
        type="text" 
        name="lastName" 
        placeholder="Last Name" 
        value={user.lastName} 
        onChange={handleInputChange} 
        required 
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
