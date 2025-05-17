import { FaEdit } from "react-icons/fa";
import { TbArrowBackUpDouble } from "react-icons/tb";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

const EditUser = () => {

    const user = useLoaderData();
    const { _id, name, email, gender, status } = user;

    const handleEditUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedUser = Object.fromEntries(formData.entries());

        //update user to db
        fetch(`http://localhost:3000/users/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "User Updated successfully!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }
    return (
        <div className="max-w-4xl mx-auto px-4 p-6 mt-10 bg-white shadow-md rounded-md border-2 border-red-50">
            <Link to="/" className="text-secondary font-semibold flex items-center mb-4">
                <span className="mr-2 text-xl"><TbArrowBackUpDouble /></span> All User
            </Link>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2 flex items-center justify-center gap-2"><FaEdit /> Edit Existing User</h2>
            <p className="text-center text-gray-500 mb-6">
                Use the below form to edit an existing user
            </p>

            <form onSubmit={handleEditUser}>
                {/* Name Input */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        defaultValue={name}
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
                        defaultValue={email}
                        placeholder="Enter Your Email"
                        className="input input-bordered w-full" required
                    />
                </div>

                {/* Gender Radio */}
                <div className="mb-4">
                    <label className="block mb-1 font-medium text-gray-700">Gender</label>
                    <div className="flex items-center gap-6">
                        <label className="label cursor-pointer gap-2">
                            <input type="radio" name="gender" value='Male' className="radio radio-secondary" defaultChecked={gender === "Male"} />
                            <span className="label-text">Male</span>
                        </label>
                        <label className="label cursor-pointer gap-2">
                            <input type="radio" name="gender" value='Female' className="radio radio-secondary" defaultChecked={gender === "Female"} />
                            <span className="label-text">Female</span>
                        </label>
                    </div>
                </div>

                {/* Status Radio */}
                <div className="mb-6">
                    <label className="block mb-1 font-medium text-gray-700">Status</label>
                    <div className="flex items-center gap-6">
                        <label className="label cursor-pointer gap-2">
                            <input type="radio" name="status" value='Active' className="radio radio-secondary" defaultChecked={status === "Active"} />
                            <span className="label-text">Active</span>
                        </label>
                        <label className="label cursor-pointer gap-2">
                            <input type="radio" name="status" value='Inactive' className="radio radio-secondary" defaultChecked={status === "Inactive"} />
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

export default EditUser;
