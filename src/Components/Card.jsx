const Card = ({ day = "TUE", date = "19 May", customClass }) => {
  return (
    <div
      className={`${customClass || customClass} rounded-[26px] min-w-[500px] max-w-[500px] bg-[#fff] flex-col`}
    >
      <div className="px-6 py-3 border-b-1 border-[#D4D4D4] flex justify-between items-center w-full">
        <span className="">{day}</span>
        <span className="">{date}</span>
      </div>

      <div className="flex flex-col py-4.5 gap-3">
        <div className="px-4.5 gap-3 flex justify-between items-center w-full">
          <div className="p-3 rounded-[8px] bg-[#F5F5F5] w-full">
            <div className="rounded-[8px] p-3 bg-[#F5F5F5] w-full gap-3 flex felx-col">
              <img src="profile01.svg" className="w-14 rounded-full" />
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex w-full items-center justify-between">
                  <span className="text-[20px] tracking-[-3%] text-black font-medium">
                    New client call: Leah
                  </span>
                  <span className="text-[14px] tracking-[-3%] text-[#6E6E6E]">
                    2hr
                  </span>
                </div>
                <span className="font-medium leading-[160%] text-[14px] tracking-[-3%] text-[#6E6E6E]">
                  2:00 PM- 3:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4.5 gap-3  flex justify-between items-center w-full">
          <div className="p-3 rounded-[8px] bg-[#F5F5F5] w-full">
            <div className="rounded-[8px] p-3 bg-[#F5F5F5] w-full gap-3 flex felx-col">
              <img src="profile01.svg" className="w-14 rounded-full" />
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex w-full items-center justify-between">
                  <span className="text-[20px] tracking-[-3%] text-black font-medium">
                    New client call: Leah
                  </span>
                  <span className="text-[14px] tracking-[-3%] text-[#6E6E6E]">
                    2hr
                  </span>
                </div>
                <span className="font-medium leading-[160%] text-[14px] tracking-[-3%] text-[#6E6E6E]">
                  2:00 PM- 3:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
