import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { useLoaderData, useNavigate } from "react-router";
import User from "./User";
import Swal from "sweetalert2";

const Users = () => {


  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3741', // your primary color
      cancelButtonColor: '#545454',  // your secondary color
      confirmButtonText: 'Yes, delete it!',
    })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
          })
            .then((res) => res.json())
            .then(data => {
              if (data.deletedCount > 0) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "User has been deleted!",
                  showConfirmButton: false,
                  timer: 1500
                });
                // Remove the deleted coffee from the state
                const remainingUsers = users.filter(user => user._id !== id);
                setUsers(remainingUsers);
              }
            })

        }
      })
  }

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
                handleDelete={handleDelete}
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
