import { FaCaretDown } from "react-icons/fa";
export function UserInfo() {
  return (
    <section className="flex flex-col w-screen md:w-[50vh] px-[30px] md:px-[50px] pt-[50px] md:pt-[20px] h-screen bg-white gap-y-5 md:bg-[#edf8fa]">
      <div className="flex item-center gap-x-2">
        <div className="">
          <img
            className="rounded-full w-[60px] shadow-lg"
            src={require("./alex-suprun-ZHvM3XIOHoE-unsplash.jpg")}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-bold text-[20px]">Hi Mike,</span>
          <span className="text-[11px]">welcome back.</span>
        </div>
      </div>
      <div className="flex flex-col md:py-0 py-8 bg-[#edf8fa] md:bg-none gap-y-5 rounded-[15px] md:pl-2 px-5">
        <div className="font-bold">Today</div>
        <div className="flex flex-col">
          <span className="font-bold text-[30px] md:text-[24px]">$19,892</span>
          <span className="text-[10px] text-slate-500">Account Balance</span>
        </div>
        <div className="flex md:flex-col flex-row gap-x-5 gap-y-5">
          <div className="flex flex-col">
            <span className="font-bold text-[16px]">$4,000</span>
            <span className="text-[10px] text-slate-500">
              Year-to-Date Contribution
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="font-bold text-[16px]">$1,892</span>
            <span className="text-[10px] text-slate-500">Total Interest</span>
          </div>
        </div>
        <div className="text-white font-bold flex items-center  md:w-[130px] h-[40px] rounded-[10px] bg-[#000099] justify-center cursor-pointer">
          I want to <FaCaretDown fill="white" className="ml-2" />
        </div>
      </div>
      <div className=" flex flex-col md:py-0 py-8 bg-[#edf8fa] md:bg-none gap-y-5 rounded-[15px] md:pl-2 px-5 ">
        <h1 className="font-bold text-[20px] md:text-[15px]">
          Recent Transactions
        </h1>
        <div className="flex flex-col border-b-2 border-slate-200 h-[50px]">
          <span className="text-slate-500 text-[11px]">2020-08-07</span>
          <span className="font-bold text-[15.3px]  md:text-[13px]">
            Withdrawal Transfer to Bank-XXXX11
          </span>
        </div>
        <div>
          <div className="flex flex-col border-b-2 border-slate-200 h-[50px] ">
            <span className="text-slate-500 text-[11px]">2020-07-21</span>
            <span className="font-bold text-[15.3px] md:text-[13px]">
              Withdrawal Transfer to Bank-XXXX11
            </span>
          </div>
        </div>
        <div>
          <div className="flex flex-col border-b-2 border-slate-200 h-[50px] ">
            <span className="text-slate-500 text-[11px]">2020-07-16</span>
            <span className="font-bold text-[15.3px]  md:text-[13px]">
              Withdrawal Transfer to Bank-XXXX11
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
