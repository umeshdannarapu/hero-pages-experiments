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
      <div className="flex h-full w-full flex-col justify-centeritems-center overflow-hidden rounded-[32px] border-[1.5px] border-white/10 bg-[#2B2B2B8A] text-center backdrop-blur-[100px]">
        {/* Navbar */}
        <div className="flex justify-between w-full px-8 py-6">
          <img src="sprrrint-logo.svg" alt="logo" className="" />
          <h1>LOGO</h1>
        </div>
        <h1 className="text-[78px] leading-[95%] tracking-[-5%] font-semibold text-[#999999]">
          The Smarter Way to <br /> Manage Emails
        </h1>
      </div>
    </div>
  );
}
