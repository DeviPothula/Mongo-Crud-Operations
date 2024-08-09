import React, { useState, useEffect } from 'react';
import UserForm from './userForm'
import UserList from './usersList';
import axiosInstance from './axiosConfig';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({ _id: null, firstName: '', lastName: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log('users...', users)
  },[users])

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get('/getUser');
      setUsers(response?.data?.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };


  const addUser = async (user) => {
    console.log('user we adding', user)
    delete user["_.id"];
    try {
      const response = await axiosInstance.post('/saveUser', user);
      fetchUsers()
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  const updateUser = async (id, updatedUser) => {
    try {
      const response = await axiosInstance.put(`/updateUser/${id}`, updatedUser);
      fetchUsers()
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteUser = async (id) => {
    console.log('id in delete users', id)
    try {
      await axiosInstance.delete(`/deleteUser/${id}`);
       fetchUsers()
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const editUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <div className="App d-flex justify-content-center align-items-center">
      <h1>Learning Mongo</h1>
      <h1>User Management</h1>
      <UserForm 
        addUser={addUser} 
        updateUser={updateUser} 
        currentUser={currentUser} 
        setCurrentUser={setCurrentUser} 
      />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
};

export default App;
