import { IoSearch } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiExitFullscreen } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdMessage } from "react-icons/md";
import { MdMenu } from "react-icons/md";


const Navbar = () => {
  return (
    <div className="navbar absolute top-[7px] h-[54px] right-0  w-[89vw]">
      <div className="flex  items-center justify-between border-b-2 ">
        <div className="search flex items-center  py-1 px-2 border rounded-full">
          <input className="bg-transparent outline-none" type="text" placeholder="Search..." />
          <IoSearch className="cursor-pointer" />

        </div>
        <div className="flex items-center gap-12 ">
          <div className="flex gap-2 items-center">
            <MdLanguage className="text-[24px]" />

            <span className="text-[18px]">English</span>
          </div>
          <div className="text-[23px]">
            <MdOutlineDarkMode />

          </div>
          
          <div>
          <BiExitFullscreen  className="text-[23px]" />

          </div>
          <div>
          <IoMdNotificationsOutline className="text-[23px]" />

          </div>
          <div>
          <MdMessage className="text-[23px]" />

          </div>
          <div>
          <MdMenu className="text-[23px]" />

          </div>
          <div>
            <img className="w-11 h-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1621245550592-63b5ed0ef1da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar