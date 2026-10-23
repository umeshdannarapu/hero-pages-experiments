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

      <div className="flex h-full w-full flex-col items-center overflow-hidden rounded-[32px] border-[1.5px] border-white/10 bg-[#2B2B2B8A] text-center backdrop-blur-[100px]">
        {/* Navbar */}
        <div className="flex w-full justify-between px-8 py-6">
          <div className="flex gap-1.5">
            <img src="sprrrint-logo.svg" alt="logo" className="" />
            <p className="bg-linear-to-r from-[#FFF] to-[#999999] bg-clip-text text-[26px] tracking-[-2%] text-transparent">
              Sprrrint
            </p>
          </div>
          <h1>LOGO</h1>
        </div>
        <h1
          data-text={`The Smarter Way to \n Manage Emails`}
          className="font-satoshi relative bg-gradient-to-r from-white to-[#999999] bg-clip-text px-2 pb-4 text-[78px] leading-[95%] font-semibold tracking-[-0.05em] text-transparent after:absolute after:inset-0 after:left-0 after:-z-10 after:translate-y-[3px] after:bg-none after:text-black/25 after:blur-[3px] after:content-[attr(data-text)]"
        >
          The Smarter Way to <br /> Manage Emails
        </h1>
      </div>
    </div>
  );
}
