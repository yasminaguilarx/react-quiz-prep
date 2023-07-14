import React from "react";

const UserItem = ({ user, id }) => {
  const handleClick = () => {
    console.log(user.id);
  };

  return (
    <div className='userItems' onClick={handleClick} id={id}>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default UserItem;
