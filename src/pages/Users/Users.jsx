import { useState } from "react";
import { FaEdit, FaTrash, FaUserPlus } from "react-icons/fa";
import { Link, useLoaderData, useNavigate } from "react-router";
import User from "./User";

const Users = () => {

   const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const navigate = useNavigate();

  console.log(users);


  return (
    <div className="p-5">
      <button 
      onClick={() => navigate("/add-user")}
      className="btn btn-outline btn-secondary mb-4 flex items-center gap-2">
        <FaUserPlus /> New User
      </button>

      <div className="overflow-x-auto">
        
        <table className="table w-full border border-base-200">
          <thead className="bg-gray-700 text-white text-center">
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Name</th>
              <th className="text-center">Email</th>
              <th className="text-center">Gender</th>
              <th className="text-center">Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {users.map((user, index) => (
              <User
                key={index}
                user={user}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
