import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import {  Flip } from "react-awesome-reveal";



const PopularInstructors = () => {
    const [instructorscard, setInstructorscard] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/instructor')
            .then(res => res.json())
            .then(data => setInstructorscard(data));
    }, [])

    return (
       <div>
         <div className="mt-12 mb-2 rounded-xl p-2">
       <Flip> <h1 className="text-4xl font-semibold text-center text-pink-600 mb-4 ">Popular Instructors</h1>
        <p className=""> <hr /></p></Flip>
        
        </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
                {
                    instructorscard.map(instructor=><InstructorCard 
                        key={instructor._id}
                        instructor={instructor}
                        ></InstructorCard> )
                }
            </div>
       </div>
    );
};

export default PopularInstructors;