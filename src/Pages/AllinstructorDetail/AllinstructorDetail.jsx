
const AllinstructorDetail = ({instruct}) => {

    const {imag, name, email, num_of_classes} = instruct;

    return (
       <tr className="font-semibold text-black">
        <td>
            <div className="avatar">
                <div className="rounded w-24 h-24">
                {imag && <img src={imag}/>}
                </div>
            </div>
        </td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{num_of_classes}</td>
       </tr>
    );
};

export default AllinstructorDetail;