import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";


const User = ({ user, index, handleDelete }) => {
    const { _id, name, email, gender, status } = user || {};

    return (
        <tr className="hover:bg-base-200 text-center">
            <th className="border-b-1">{index + 1}</th>
            <td className="border-b-1">{name}</td>
            <td className="border-b-1">{email}</td>
            <td className="border-b-1">{gender}</td>
            <td className="border-b-1">{status}</td>
            <td className="border-b-1">
                <div className="space-x-1">
                    <Link to={`/edit-user/${_id}`} ><button

                        className="btn btn-sm btn-outline">
                        <FaEdit />
                    </button></Link>
                    <Link><button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-sm btn-outline btn-error">
                        <FaTrash />
                    </button></Link>
                </div>
            </td>
        </tr>
    );
};

export default User;