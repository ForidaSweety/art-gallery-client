import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
import { FaBook, FaBookOpen, FaHome, FaUsers, FaWallet } from "react-icons/fa";


const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin] = useAdmin();
//    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <label htmlFor="my-drawer-2" className="btn btn-secondary drawer-button mt-8 lg:hidden">Open drawer</label>
            <Outlet></Outlet>

        </div>
        <div className="drawer-side bg-[#f684e5]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80">

                {
                    isAdmin ? <>
                        <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/addclass"> <FaBookOpen></FaBookOpen> Add an class</NavLink></li>
                        <li><NavLink to="/dashboard/manageclass"><FaWallet></FaWallet> Manage class</NavLink></li>
                        <li><NavLink to="/dashboard/selectedcourse"><FaBook></FaBook> Manage Selected Course</NavLink></li>
                        <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                        
                    </> : <>
                        <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
                        
                        <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/usercart"><FaBookOpen></FaBookOpen> My Selection
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>

                        </li>
                    </>
                }

                <div className="divider"></div>
                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                
            </ul>

        </div>
    </div>
    );
};

export default Dashboard;