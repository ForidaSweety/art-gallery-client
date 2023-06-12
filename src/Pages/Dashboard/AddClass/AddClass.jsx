import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";


const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        
        const formData = new FormData();
        formData.append('imag', data.image[0])

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse => {
            if(imgResponse.success){
                const imgURL = imgResponse.data.display_url;
                const {class_name,instructor_name, price, available_seats} = data;
                const newClass = {class_name,instructor_name, price: parseFloat(price), available_seats, image:imgURL}
                //console.log(newClass)
                axiosSecure.post('/classes', newClass)
                .then(data => {
                    console.log('after adding new class', data.data)
                    if(data.data.insertedId){
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class added successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
        })

    };

    return (
        <div className="w-full m-24 mr-24 px-10">
            <h2 className="text-center mb-8 font-bold text-4xl bg-red-100 text-pink-600 mr-24 p-4 rounded-xl">Add Class</h2>
        
        <form className="mr-24 bg-red-200 p-8 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Class Name</span>
                </label>
                <input type="text" placeholder="Class Name"
                    {...register("class_name", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Instructor Name</span>
                </label>
                <input type="text" placeholder="Class Name"
                    {...register("instructor_name", { required: true, maxLength: 120 })}
                    className="input input-bordered w-full " />
            </div>
            
            <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Available seat</span>
                    </label>
                    <input type="number" {...register("available_seat", { required: true })} placeholder="Available seat" className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full my-4">
                <label className="label">
                    <span className="label-text"> Image</span>
                </label>
                <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
            </div>
            <input className="btn btn-sm mt-4" type="submit" value="Add Class" />
        </form>
    </div>
    );
};

export default AddClass;