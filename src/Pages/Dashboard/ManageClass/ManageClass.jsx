import { FaBook, FaCheck, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useClasses from "../../../hooks/useClasses";


const ManageClass = () => {
    const [classes, , refetch] = useClasses();
    const [axiosSecure] = useAxiosSecure();

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/classes/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }

    return (
        <div className="w-full">
        
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Available seat</th>
                        <th>Price</th>
                        <th>Approve</th>
                        <th>Delete</th>
                        <th>send feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((item, index) => <tr key={item._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>
                                <div className="flex items-center space-x-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.imag}  />
                                        </div>
                                    </div>
                                
                                </div>
                            </td>
                            <td>
                                {item.class_name}
                            </td>
                            <td>
                                {item.instructor_name}
                            </td>
                            <td>
                                {item.available_seats}
                            </td>
                            <td className="text-right">${item.price}</td>
                            <td>
                                <button className="btn btn-ghost  bg-pink-500  text-white"><FaCheck></FaCheck></button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-400  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                           
                            <td>
                                <button className="btn btn-ghost  bg-pink-500  text-white"><FaBook></FaBook></button>
                            </td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    </div>
    );
};

export default ManageClass;