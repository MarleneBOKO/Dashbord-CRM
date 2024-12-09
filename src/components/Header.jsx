function Header() {
    return (
      <header className="flex justify-between py-[41px] px-[71px] ">
        <h1 className="text-black font-medium text-2xl">Hello Evano 👋🏼,</h1>
        <div
  className="w-[216px] h-[38px] flex rounded-xl bg-white items-center p-3"
  style={{
    boxShadow: "0px 10px 60px 0px rgba(226, 236, 249, 0.50)",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
      stroke="#7E7E7E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21 21L16.65 16.65"
      stroke="#7E7E7E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  <input
    type="text"
    placeholder="Search"
    className="text-[#B5B7C0] text-sm ml-2 focus:outline-none w-full bg-transparent"
  />
</div>

      </header>
    );
  }
  
  export default Header;
  