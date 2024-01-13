import { Chart } from "./chart";
import { FaCaretDown } from "react-icons/fa";
import { Circular } from "./circularchar";
import "./custom.css";
export function MainInfo() {
  return (
    <div className="flex flex-col items-center w-screen md:w-[45vw]">
      <div className=" justify-between flex flex-col w-[80vw] md:w-[35vw] mt-[50px] md:mt-[20px] md:h-[90vh]">
        <div className="flex flex-col">
          <span className="text-[#000099] text-[15px] font-extrabold">
            Retirement Income
          </span>
          <h1 className="text-[20px] font-bold">Starting Year 2056</h1>
        </div>
        <div className="flex gap-x-10 md:flex-row flex-col">
          <div className="md:basis-1/3 flex flex-col border-b-2 border-[#000099] py-2">
            <span className="text-[18px] font-bold">$300,000</span>
            <span className="text-slate-600 text-[12px]">My Goal</span>
          </div>
          <div className="md:basis-2/3 flex justify-between gap-x-10">
            <div className="basis-1/2  flex flex-col py-2 border-b-2 border-[#000099]">
              <span className="text-[18px] font-bold">59%</span>
              <span className="text-slate-600 text-[2.6vw] md:text-[12px]">
                Goal Achieved
              </span>
            </div>
            <div className="basis-1/2 flex flex-col py-2 border-b-2 border-[#000099]">
              <span className="text-[18px] font-bold">$300</span>
              <span className="text-slate-600 text-[2.6vw] md:text-[12px]">
                Est. Monthly Income
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <Chart />
        </div>
        <div className="flex flex-col gap-y-2 ">
          <span className="text-[15px] font-bold">
            How do I compare to my peers?
          </span>
          <span className="text-[3.2vw] md:text-[12px] text-slate-600">
            These numbers represent current goal achievement
          </span>
        </div>
        <div className="flex md:flex-row flex-col md:items-center md:justify-between">
          <div className="flex flex-col gap-y-2 w-[100%] md:w-[40%]">
            <div className="py-2">
              <label className="font-bold text-[14px]" htmlFor="Age">
                Age:
              </label>
              <select
                className="md:ml-0 ml-6 text-slate-600 text-[14px]"
                name=""
                id=""
              >
                <option value="Under 30">Under 30</option>
              </select>
            </div>
            <div className="border-t-2 border-slate-200 py-2">
              <label className=" font-bold text-[14px]" htmlFor="Salary">
                Salary:
              </label>
              <select
                className="md:ml-0 ml-3 text-slate-600 text-[14px]"
                name=""
                id=""
              >
                <option value="K 20-K 30">K 20-K 30</option>
              </select>
            </div>
            <div className="border-t-2 border-slate-200 py-2">
              <label className="font-bold text-[14px]" htmlFor="Age">
                Gender:
              </label>
              <select
                className="md:ml-0 ml-3 text-slate-600 text-[14px]"
                name=""
                id=""
              >
                <option value="Male">Male</option>
              </select>
            </div>
          </div>
          <div className="flex md:justfiy-start justify-between">
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="78, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  78%
                </text>
              </svg>
              <text className="text-[12px] text-slate-600 ml-6">Average</text>
            </div>
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="85, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  95%
                </text>
              </svg>
              <text className="text-[12px] text-slate-600 ml-9">Top</text>
            </div>
            <div className="single-chart">
              <svg viewBox="0 0 36 36" className="circular-chart orange">
                <path
                  class="circle-bg"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke-dasharray="59, 100"
                  d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">
                  59%
                </text>
              </svg>
              <text className="text-[12px] text-slate-600 ml-10">Me</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
