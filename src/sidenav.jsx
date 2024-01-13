import { FaSearch } from "react-icons/fa";
import { AiOutlineQq } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
export function SideNav() {
  return (
    <aside className="bg-white flex flex-row md:flex-col md:items-center md:justify-around h-[50px] md:h-screen md:w-[60px] w-screen">
      <div className="order-2 md:order-1 flex md:flex-col items-center gap-y-5 md:basis-[15%] w-[30px] cursor-pointer md:justify-start w-[15vw] justify-around">
        <div className="hidden md:flex items-center justify-center md:h-[30px] md:w-[30px] cursor-pointer">
          <AiOutlineQq fill="grey" />
        </div>
        <div className="">
          <FaSearch fill="grey" />
        </div>
      </div>
      <div className="order-1 md:order-2 w-[90vw]  flex md:flex-col md:basis-[60%] w-[30px] items-center gap-y-3 md:justify-start justify-around">
        <div className="flex items-center justify-center h-[30px] w-[30px] rounded-[5px] hover:bg-[#000099] cursor-pointer">
          <GoHome fill="grey" className="hover:fill-white" />
        </div>
        <div className="flex items-center justify-center h-[30px] w-[30px] rounded-[5px] hover:bg-[#000099] cursor-pointer">
          <FaRegNewspaper fill="grey" className="hover:fill-white" />
        </div>
        <div className="flex items-center justify-center h-[30px] w-[30px] rounded-[5px] hover:bg-[#000099] cursor-pointer">
          <FaRegListAlt fill="grey" className="hover:fill-white" />
        </div>
        <div className="flex items-center justify-center h-[30px] w-[30px] rounded-[5px] hover:bg-[#000099] cursor-pointer">
          <FaRegUser fill="grey" className="hover:fill-white" />
        </div>
      </div>
      <div className="fixed md:order-3 md:sticky bg-white  w-screen top-0 right-0 flex md:flex-col md:basis-[20%] md:w-[30px] items-center gap-y-3 items-center justify-end">
        <div className=" cursor-pointer flex items-center justify-center h-[30px] w-[30px] rounded-[5px] hover:bg-[#000099] cursor-pointer">
          <IoMdNotificationsOutline fill="grey" className="hover:fill-white" />
        </div>
        <div className="hidden cursor-pointer md:flex items-center justify-center h-[30px] w-[30px] rounded-[5px] hover:bg-[#000099] cursor-pointer">
          <IoExitOutline stroke="grey" className="hover:stroke-white" />
        </div>
      </div>
    </aside>
  );
}
