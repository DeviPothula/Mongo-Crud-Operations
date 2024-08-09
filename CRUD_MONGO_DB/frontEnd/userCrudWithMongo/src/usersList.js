import React from 'react';

const UserList = ({ users, deleteUser, editUser }) => {
  console.log('users.. in usersList', users)
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users?.map(user => (
          <li key={user["_id"]}>
            {user?.firstName} {user?.lastName}
            <button onClick={() => editUser(user)}>Edit</button>
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
