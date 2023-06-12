import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLoginBtn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: ' Successfully Login',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });

            })
            
    }


    return (
        <div className="hero min-h-screen mb-20 bg-red-200">
        <div className="hero-content flex-col m-20">
            <div className="text-center  lg:text-left">
            {/* <img className='h-96' src={imge} alt="" /> */}
            <h1 className="text-5xl font-bold mb-8">Login now!</h1>
            </div>
            <div className="card w-full max-w-md shadow-2xl bg-base-100">
                <div className="card-body  p-10 rounded-xl">
               
                    <form onSubmit={handleLoginBtn}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">

                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-secondary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='my-4 text-center'>New this site ! Please ! <br /> <Link className='text-orange-700 font-bold' to="/registration">Registration</Link> </p>
                    <SocialLogin></SocialLogin>

                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;