import { RiUserAddFill } from "react-icons/ri";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Link } from "react-router";

const AddUser = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 p-6 mt-10 bg-white shadow-md rounded-md border border-secondary">
      <Link to="/" className="text-secondary font-semibold flex items-center mb-4">
        <span className="mr-2 text-xl"><TbArrowBackUpDouble /></span> All User
      </Link>

      <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 flex items-center justify-center gap-2"><RiUserAddFill /> New User</h2>
      <p className="text-center text-gray-500 mb-6">
        Use the below form to create a new account
      </p>

      <form>
        {/* Name Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full"
          />
        </div>

        {/* Gender Radio */}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-gray-700">Gender</label>
          <div className="flex items-center gap-6">
            <label className="label cursor-pointer gap-2">
              <input type="radio" name="gender" className="radio radio-secondary" defaultChecked />
              <span className="label-text">Male</span>
            </label>
            <label className="label cursor-pointer gap-2">
              <input type="radio" name="gender" className="radio radio-secondary" />
              <span className="label-text">Female</span>
            </label>
          </div>
        </div>

        {/* Status Radio */}
        <div className="mb-6">
          <label className="block mb-1 font-medium text-gray-700">Status</label>
          <div className="flex items-center gap-6">
            <label className="label cursor-pointer gap-2">
              <input type="radio" name="status" className="radio radio-secondary" defaultChecked />
              <span className="label-text">Active</span>
            </label>
            <label className="label cursor-pointer gap-2">
              <input type="radio" name="status" className="radio radio-secondary" />
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
