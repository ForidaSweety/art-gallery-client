import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";


const UserCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    // how does reduce work!!!
    const total = cart.reduce((sum, item) => item.price + sum, 0);

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
                fetch(`https://art-gallery-server.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'File has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full h-full bg-red-100 p-20">
        
        <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
         
            <h3 className="text-3xl text-pink-500 m-8">Total Price: ${total}</h3>
            <Link to="/dashboard/payment">
                <button className="btn bg-pink-500 btn-sm">PAYMENT</button>
            </Link>
        </div>
        <div className="overflow-x-auto w-full mt-10">
            <table className="table w-full">
                {/* head */}
                <thead className="text-lg">
                    <tr>
                        <th>No.</th>
                        <th>Class Name</th>
                        <th>Price</th>
                        <th>Delete Class</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, index) => <tr
                            key={item._id}
                        >
                            <td>
                                {index + 1}
                            </td>
                            <td>{item.class_name}</td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-400  text-white"><FaTrashAlt></FaTrashAlt></button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default UserCart;