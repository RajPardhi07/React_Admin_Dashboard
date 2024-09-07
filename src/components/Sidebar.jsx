import { Link } from "react-router-dom"
import { MdDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaStore } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoStatsChartSharp } from "react-icons/io5";
import { RiHealthBookLine } from "react-icons/ri";
import { GrUserSettings } from "react-icons/gr";
import { MdSettingsApplications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";


const Sidebar = () => {

const {dispatch} = useContext(DarkModeContext);

    return (
        <div className="sidebar border-r min-h-[100vh] bg-white">
            <div className="top h-[50px] items-center flex">
                <Link to="/">
                    <span className="text-[20px] ml-3 font-bold text-[#6439ff]">Raj</span>
                </Link>
            </div>
            <hr className="h-0 border"/>
            <div className="center pl-[10px]">
                <ul className="list-none m-0 p-0">
                    <p className="text-[10px] font-bold mt-[15px] mb-[5px]">MAIN</p>
                    <li>
                        <MdDashboard className="text-[#7451f8] text-[18px]" />

                        <span className="text-[16px] ml-3 text-slate-500">Dashboard</span>
                    </li>
                    <p>List</p>
                    <Link to='/list'>
                        <li>
                            <FaRegUser className="text-[#7451f8] text-[18px]" />

                            <span className="text-[16px] ml-3 text-slate-500">List</span>
                        </li>
                    </Link>
                    <Link to="/products">
                        <li>
                            <FaStore className="text-[#7451f8] text-[18px]"/>

                            <span className="text-[16px] ml-3 text-slate-500">Products</span>
                        </li>
                    </Link>


                    <li>
                        <FaRegCreditCard className="text-[#7451f8] text-[18px]" />

                        <span className="text-[16px] ml-3 text-slate-500">Orders</span>
                    </li>

                    <li>
                        <TbTruckDelivery  className="text-[#7451f8] text-[18px]"/>

                        <span className="text-[16px] ml-3 text-slate-500">Delivery</span>
                    </li>
                    <p className="text-[10px] font-bold mt-[15px] mb-[5px]">USEFUl</p>
                    <li>
                        <IoStatsChartSharp className="text-[#7451f8] text-[18px]" />

                        <span className="text-[16px] ml-3 text-slate-500">Stats</span>
                    </li>
                    <li>
                        <FaStore className="text-[#7451f8] text-[18px]" />

                        <span className="text-[16px] ml-3 text-slate-500">Notification</span>
                    </li>
                    <p className="text-[10px] font-bold mt-[15px] mb-[5px]">SERVICE</p>
                    <li>
                        <RiHealthBookLine className="text-[#7451f8] text-[18px]" />

                        <span className="text-[16px] ml-3 text-slate-500">System Health</span>
                    </li>
                    <li>
                        <GrUserSettings className="text-[#7451f8] text-[18px]" />

                        <span className="text-[16px] ml-3 text-slate-500">Logs</span>
                    </li>
                    <li>
                        <MdSettingsApplications className="text-[#7451f8] text-[18px]" />

                        <span className="text-[16px] ml-3 text-slate-500">Settings</span>
                    </li>
                    <p className="text-[10px] font-bold mt-[15px] mb-[5px]">USER</p>
                    <li>
                        <CgProfile className="text-[#7451f8] text-[18px]"/>

                        <span className="text-[16px] ml-3 text-slate-500">Profile</span>
                    </li>
                    <li>
                        <RiLogoutBoxRLine className="text-[#7451f8] text-[18px]" />

                        <span className="text-[16px] ml-3 text-slate-500">Logout</span>
                    </li>

                </ul>

                <div className="flex items-center mt-4 gap-3">
                    <div onClick={() => dispatch({type: "LIGHT"})} className="w-9 h-9 bg-slate-400 rounded-md"></div>
                    <div onClick={() => dispatch({type:"DARK"})} className="w-9 h-9 bg-black rounded-md"></div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar