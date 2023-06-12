import { Flip } from "react-awesome-reveal";


const InstructorCard = ({instructor}) => {

    const {name, imag, num_of_classes} = instructor;

    return (
     <Flip>
       <div className="bg-red-200 rounded-xl p-5">
      <div className="flex space-x-2">
         {imag && <img style={{ borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={imag} />}
         <div>
             <h3 className="uppercase text-rose-600 font-semibold text-lg">{name}______</h3>
             <p className='text-black'>Num of classes: {num_of_classes}</p>
            
         </div>
     </div>
    </div>
     </Flip>
    );
};

export default InstructorCard;