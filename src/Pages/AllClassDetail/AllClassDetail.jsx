import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";



const AllClassDetail = ({ item }) => {

    const { _id,class_name, imag, available_seats, instructor_name, num_of_student, price } = item;
    const { user } = useContext(AuthContext);
    const [,refetch]= useCart();
    const navigate = useNavigate();
    const location = useLocation();


    const handleAddToCart = item => {
        console.log(item);

        if(user && user.email){
            const selectedCls = {clsId: _id, class_name,available_seats, imag, price, email: user.email}
            fetch('https://art-gallery-server.vercel.app/carts',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedCls)
            })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId) {
                         refetch(); 
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to select the courses',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }

    }


    return (
        <div>
            <div className="card w-96 bg-red-200 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={imag} className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-black">Name: {class_name}</h2>
                    <p className="text-black">Instructor name: {instructor_name}</p>
                    <p className="text-black">Num of student: {num_of_student}</p>
                    <p className="text-black">Available seats: {available_seats}</p>
                    <p className="text-black">Price: ${price}</p>
                    <div className="card-actions">

                        <button onClick={() => handleAddToCart(item)} className="btn btn-sm btn-secondary">Select Course</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllClassDetail;