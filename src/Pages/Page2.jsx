export default function Page2() {
  return (
    <div
      id="page2root"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#0B0B0B] p-5.5"
    >
      {/* Blob */}
      <div className="absolute top-0 h-[404px] w-[553px] bg-white blur-[100px]">
        <div className="absolute inset-y-0 -top-8 bottom-0 -left-10 h-[500px] w-20 rotate-10 bg-[#0B0B0B]" />
        <div className="absolute -top-8 -right-10 h-[500px] w-20 -rotate-10 bg-[#0B0B0B]" />
        <div className="absolute -bottom-10 -left-1 h-[80px] w-[600px] -rotate-8 bg-[#0B0B0B]" />
      </div>
      {/* Offset Blob*/}
      <div className="absolute -top-30 h-[404px] w-[553px] bg-white blur-[120px]">
        <div className="absolute inset-y-0 -top-8 bottom-0 -left-10 h-[500px] w-20 rotate-10 bg-[#0B0B0B]" />
        <div className="absolute -top-8 -right-10 h-[500px] w-20 -rotate-10 bg-[#0B0B0B]" />
        <div className="absolute -bottom-10 -left-1 h-[80px] w-[600px] -rotate-8 bg-[#0B0B0B]" />
      </div>

      <div className="flex relative h-full w-full flex-col items-center overflow-hidden rounded-[32px] border-[1.5px] border-white/10 bg-[#2B2B2B8A] text-center backdrop-blur-[100px]">
        {/* Navbar */}
        <div className="flex w-full justify-between px-8 py-6">
          <div className="flex gap-1.5">
            <img src="sprrrint-logo.svg" alt="logo" className="" />
            <p className="bg-linear-to-r from-[#FFF] to-[#999999] bg-clip-text text-[26px] tracking-[-2%] text-transparent">
              Sprrrint
            </p>
          </div>
          <button className="py-4 px-5 bg-gradient-to-r from-white/10 to-transparent rounded-full text-white shadow-[0_14px_24px_0_rgba(0,0,0,0.25),inset_0_0_12px_0_rgba(255,255,255,0.25)]">
            Request Access
          </button>
        </div>
        <div className="flex flex-col pb-8">
          <h1
            data-text={`The Smarter Way to \n Manage Emails`}
            className="font-satoshi relative bg-gradient-to-r from-white to-[#999999] bg-clip-text px-2 pb-7.5 text-[78px] leading-[95%] font-semibold tracking-[-0.05em] text-transparent after:absolute after:inset-0 after:left-0 after:-z-10 after:translate-y-[3px] after:bg-none after:text-black/25 after:blur-[3px] after:content-[attr(data-text)]"
          >
            The Smarter Way to <br /> Manage Emails
          </h1>
          <p className="text-[16px] text-[#D9D9D9] tracking-[-2%] leading-[24px] font-inter">
            Auto-segmentation, smart filtering, AI auto-complete, and built-in
            CRM.
            <br />
            Stop wasting time on repetitive tasks.
          </p>
        </div>
        <div className="flex flex-col gap-3 justify-center h-fit ">
          <button className="py-4 px-5 bg-[#7CFF36] rounded-full text-black font-medium text-[16px] tracking-[-4%] font-euclid shadow-[0_28px_88px_0_rgba(122,255,54,0.51),0_120px_88px_0_rgba(122,255,54,0.51)]">
            Request Access
          </button>
          <p className="text-white/30 text-[14px] font-euclid tracking-[-4%] pb-11">
            Get 3 month free now
          </p>
        </div>
        {/* Left Dashboard*/}
        <div className="bg-gradient-to-l from-transparent via-red to-red absolute -bottom-16  shadow-[0_-20px_32px_0_rgba(0,0,0,0.25)] -rotate-6 -left-100 bg-transparent  scale-[0.5] p-2 rounded-[24px] bg-white/2 shadow-[inset_0_2px_4px_0_rgba(225,255,255,0.2)]">
          <img
            src="page2-dashboard.svg"
            alt="Dashboard"
            className="rounded-[16px] shadow-[0_20px_32px_0_rgba(0,0,0,0.25)]"
          />
        </div>
        {/* Center Dashboard*/}
        <div className="p-2 rounded-[24px] bg-white/2 shadow-[inset_0_2px_4px_0_rgba(225,255,255,0.2)]">
          <img
            src="page2-dashboard.svg"
            alt="Dashboard"
            className="rounded-[16px]"
          />
        </div>
      </div>
      <div className="h-[60px] w-full"></div>
    </div>
  );
}
