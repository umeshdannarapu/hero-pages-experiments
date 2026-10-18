const Pill = () => {
  return (
    <div className="flex justify-center items-center rounded-full border-1 border-[#D7D7D7] gap-3 text-[#A5A5A5] px-7 py-2 w-fit h-fit">
      <div className="w-4 p-2 h-4 flex justify-center items-center bg-[#CFFFB2] rounded-full">
        <div className="w-2 h-2 bg-[#5EFF00] rounded-full shrink-0"></div>
      </div>
      <p>AVAILABLE FOR MAY 2025</p>
    </div>
  );
};

export default Pill;
