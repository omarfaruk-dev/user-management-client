import { RiUserAddFill } from "react-icons/ri";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Link } from "react-router";
import Swal from "sweetalert2";

const AddUser = () => {

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newUser = Object.fromEntries(formData.entries());

    //add user to db
    fetch('https://user-management-server-tan.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User added successfully!",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })

  }

  return (
    <div className="max-w-4xl mx-auto px-4 p-6 mt-10 bg-white shadow-md rounded-md border-2 border-red-50">
      <div className="inline-block"><Link to="/" className="text-secondary font-semibold flex items-center mb-4">
        <span className="mr-2 text-xl"><TbArrowBackUpDouble /></span> All User</Link>
      </div>

      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 flex items-center justify-center gap-2"><RiUserAddFill /> New User</h2>
      <p className="text-center text-gray-500 mb-6">
        Use the below form to create a new account
      </p>

      <form onSubmit={handleAddUser}>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="input input-bordered w-full" required
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full" required
          />
        </div>

        {/* Gender Radio */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Gender</label>
          <div className="flex items-center gap-6">
            <label className="label cursor-pointer gap-2">
              <input type="radio" name="gender" value='Male' className="radio radio-secondary" defaultChecked />
              <span className="label-text">Male</span>
            </label>
            <label className="label cursor-pointer gap-2">
              <input type="radio" name="gender" value='Female' className="radio radio-secondary" />
              <span className="label-text">Female</span>
            </label>
          </div>
        </div>

        {/* Status Radio */}
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Status</label>
          <div className="flex items-center gap-6">
            <label className="label cursor-pointer gap-2">
              <input type="radio" name="status" value='Active' className="radio radio-secondary" defaultChecked />
              <span className="label-text">Active</span>
            </label>
            <label className="label cursor-pointer gap-2">
              <input type="radio" name="status" value='Inactive' className="radio radio-secondary" />
              <span className="label-text">Inactive</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit" className="btn btn-secondary btn-block text-white text-base font-medium">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
