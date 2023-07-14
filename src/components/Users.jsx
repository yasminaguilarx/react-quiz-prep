import React from "react";
import UserItem from "./UserItem";

const Users = ({ users }) => {
  return users.map((user) => {
    <UserItem user={user} id={user.id} />;
  });
};

export default Users;
