import "./custom.css";
import { FaAngleRight } from "react-icons/fa";

export function RightSide() {
  return (
    <div className=" md:mt-0 mt-5 flex flex-col w-screen md:w-[25vw] md:px-[40px] md:pt-[20px] md:h-screen gap-y-5 ">
      <div className="bg-[#edf8fa] h-[50vh] md:h-[60vh] flex flex-col gap-y-5  rounded-t-[25px] md:rounded-[10px] pt-5">
        <h1 className="font-bold text-[20px]  mx-7">Retirement Strategy</h1>
        <div className="flex flex-col border-b-2 border-slate-200 h-[20vh] gap-y-2.5 mx-7">
          <label className="font-bold" htmlFor="Range">
            Employee Contribution
          </label>
          <div className="flex gap-x-2 ">
            <input
              className="w-[80%] md:w-44"
              type="range"
              name=""
              id=""
              min={0}
              max={50}
            />
            <span className="bg-white flex justify-center w-[50px]">12%</span>
          </div>
          <label htmlFor="Range">Retirement Age</label>
          <div className="flex gap-x-2 ">
            <input
              className="w-[80%] md:w-44"
              type="range"
              name=""
              id=""
              min={0}
              max={100}
            />
            <span className="bg-white flex justify-center w-[50px]">65</span>
          </div>
        </div>
        <div className="flex flex-col gap-y-6 h-[25vh] ">
          <div className="flex justify-between mx-7">
            <span className=" text-[14px] font-bold">
              Employer Contribution
            </span>
            <span className="text-[14px] font-bold">8.4%</span>
          </div>
          <div className="flex justify-between mx-7">
            <span className="text-[14px] font-bold">Interest Rate</span>
            <span className="text-[14px] font-bold">5%</span>
          </div>
          <div className="relative z-20 md:mx-7 bg-[#000099] text-white cursor-pointer flex justify-center items-center md:rounded-xl rounded-t-[5px] h-[60px] md:h-[38px]">
            Update
          </div>
          <h2 className="hidden text-[#000099]  md:flex items-center justify-center cursor-pointer">
            View Help Docs <FaAngleRight className="pt-[3px]" />
          </h2>
        </div>
      </div>
      <div className="hidden border-l-2 border-[#000099]  md:flex flex-col px-7 py-1 j">
        <h1>
          Are you Considering a <b>Housing Advance?</b>
        </h1>
        <span className="text-slate-600 text-[14px]">
          Limited time reduced interest
        </span>
        <span className="font-bold flex items-center text-[12px] text-[#000099]">
          Learn More <FaAngleRight className="pt-[2px]" />
        </span>
      </div>
    </div>
  );
}
