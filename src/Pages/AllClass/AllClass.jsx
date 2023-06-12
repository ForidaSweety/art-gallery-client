import { useEffect, useState } from "react";
import AllClassDetail from "../AllClassDetail/AllClassDetail";


const AllClass = () => {
    const [classinfo, setClassInfo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/classes')
            .then(res => res.json())
            .then(data => setClassInfo(data));
    }, [])
    return (
        <div>
        <div className="mt-12 mb-2 rounded-xl p-2 bg-red-100">
       <h1 className="text-4xl font-semibold text-center text-pink-600 mb-4 ">All Class</h1>
       
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
               {
                   classinfo.map(item=><AllClassDetail
                    key={item._id}
                    item={item}
                   ></AllClassDetail> )
               }
           </div>
      </div>
    );
};

export default AllClass;