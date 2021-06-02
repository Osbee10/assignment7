import React from "react";
import { useEffect, useState } from "react";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users")
      .then((response) => response.json())
        .then((response) => {
            const{ data
        } = response;
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div>
      <table border="2px">
      <thead>
          <td>Fullname</td>
          <td>Username</td>
          <td>Email</td>
        </thead>
        <thead>
          <td>samuel osborne</td>
          <td>sammy1</td>
          <td>osbee10@gmail.com</td>
        </thead>
        <thead>
          <td>kwame samuel</td>
          <td>kwame1</td>
          <td>kwame1@gmail.com</td>
        </thead>
        <thead>
          <td>derick owusu</td>
          <td>derico22</td>
          <td>derick@yahoo.com</td>
        </thead>
        <thead>
          <td>Frank Appiah</td>
          <td>frankii</td>
          <td>papafrank@xyz.com</td>
        </thead>
        <thead>
          <td>Jerry Frimpong</td>
          <td>Jerry2</td>
          <td>jerryfrimpong@hotmail.com</td>
        </thead>
        <thead>
          <td>Sammy Osborne</td>
          <td>Engineer1</td>
          <td>engineerosbee@xyz</td>
        </thead>
        <tbody>
                  {
                      user.map((user, key)=> <tr key={key}>
                      <td>{user.fullname }</td>
                      <td>{user.username }</td>
                      <td>{ user.email}</td>
                      
                  </tr>
                  )
                  
          }
        </tbody>
      </table>
    </div>
  );
}

export default Users;
