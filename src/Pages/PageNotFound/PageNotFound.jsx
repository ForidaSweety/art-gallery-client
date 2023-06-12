import { Link } from 'react-router-dom';
import notFound from'../../assets/image/page_not_found_re_e9o6.svg'

const PageNotFound = () => {
    return (
        <div className='m-5 d-flex align-center justify-center'>
        <div>
         <img className='mx-auto' src={notFound} alt="" />

         <h1 className='text-7xl font-semibold text-center '> Not Found</h1>
        </div>

         <div className=' text-center justify-center mt-5'>
             <Link to={'/'}><button className='btn btn-secondary mb-8'>Back to Home</button></Link>

         </div>
     </div>
    );
};

export default PageNotFound;