import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import { Flip } from "react-awesome-reveal";

const PopularClasses = () => {

    const [clascard, setClasscard] = useState([]);

    useEffect(() => {
        fetch('https://art-gallery-server.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasscard(data));
    }, [])

    return (
        <div className=" rounded-xl">
            <div className="mt-12 mb-2 file:rounded-xl p-2">
               <Flip>
               <h1 className="text-4xl font-semibold text-center text-pink-600 mb-4 ">Popular Classes</h1>
                <p className="text-white"> <hr /></p>
               </Flip>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
                {
                    clascard.map(clas=> <ClassesCard
                        key={clas._id}
                        clas={clas}
                    ></ClassesCard>)
                }
            </div>
        </div>
    );
};

export default PopularClasses;