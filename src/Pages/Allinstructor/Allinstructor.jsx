import { useEffect, useState } from "react";
import AllinstructorDetail from "../AllinstructorDetail/AllinstructorDetail";

const Allinstructor = () => {

    const [allinstructor, setAllinstructor] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/instructor')
            .then(res => res.json())
            .then(data => setAllinstructor(data));
    }, [])

    return (
        <div>
            <div className="overflow-x-auto w-full ">
                <table className="table max-w-5xl bg-red-200 m-28 ml-64">
                    
                    <thead>
                        <tr className="font-semibold text-lg text-black">
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Number of Classes</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allinstructor.map(instruct => <AllinstructorDetail 
                                key={instruct._id}
                                instruct={instruct}
                            ></AllinstructorDetail>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Allinstructor;