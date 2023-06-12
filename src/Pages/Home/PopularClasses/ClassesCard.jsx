// import { Link } from "react-router-dom";
// import imag from'../../../assets/image/Traditional Painting.jpg'

const ClassesCard = ({ clas }) => {

    const { class_name,imag, available_seats,instructor_name,num_of_student } = clas;

    return (
       <div className="bg-red-200 rounded-xl p-5">
         <div className="flex space-x-2">
            {imag && <img style={{ borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={imag} />}
            <div>
                <h3 className="uppercase text-rose-600 font-semibold text-lg">{class_name}______</h3>
                <p className='text-black'>Instructor: {instructor_name}</p>
                <p className='text-black'>Num of student: {num_of_student}</p>
                <p className='text-black'>Available seats: {available_seats}</p>
            </div>
        </div>
       </div>
    );
};

export default ClassesCard;

