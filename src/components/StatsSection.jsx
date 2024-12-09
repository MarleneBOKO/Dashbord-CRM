function StatsSection() {
  const stats = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path d="M16.0302 19.0229C15.8552 19.0054 15.6452 19.0054 15.4527 19.0229C11.2877 18.8829 7.98024 15.4704 7.98024 11.2704C7.98024 6.98287 11.4452 3.50037 15.7502 3.50037C20.0377 3.50037 23.5202 6.98287 23.5202 11.2704C23.5027 15.4704 20.1952 18.8829 16.0302 19.0229Z" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M28.7172 6.99963C32.1122 6.99963 34.8422 9.74713 34.8422 13.1246C34.8422 16.4321 32.2172 19.1271 28.9447 19.2496C28.8047 19.2321 28.6472 19.2321 28.4897 19.2496" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M7.28051 25.4796C3.04551 28.3146 3.04551 32.9346 7.28051 35.7521C12.093 38.9721 19.9855 38.9721 24.798 35.7521C29.033 32.9171 29.033 28.2971 24.798 25.4796C20.003 22.2771 12.1105 22.2771 7.28051 25.4796Z" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M32.0947 35.0004C33.3547 34.7379 34.5447 34.2304 35.5247 33.4779C38.2547 31.4304 38.2547 28.0529 35.5247 26.0054C34.5622 25.2704 33.3897 24.7804 32.1472 24.5004" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ),
      label: "Total Customers",
      value: "5,423",
      change: "+16% ",
      month:"this month",
      isPositive: true,
    },
    {
      icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M24.0666 31.75L26.6 34.2834L31.6666 29.2167" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M20.2669 18.117C20.1003 18.1003 19.9003 18.1003 19.7169 18.117C15.7503 17.9837 12.6003 14.7337 12.6003 10.7337C12.5836 6.65035 15.9003 3.33368 19.9836 3.33368C24.0669 3.33368 27.3836 6.65035 27.3836 10.7337C27.3836 14.7337 24.2169 17.9837 20.2669 18.117Z" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M19.9831 36.3498C16.9498 36.3498 13.9331 35.5832 11.6331 34.0498C7.59981 31.3498 7.59981 26.9498 11.6331 24.2665C16.2165 21.1998 23.7331 21.1998 28.3165 24.2665" stroke="#00AC4F" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      ),
      label: "Members",
      value: "1,893",
      change: "-1% ",
      month:"this month",
      isPositive: false,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
          <path d="M11.27 3.5H30.7125C36.9425 3.5 38.5 5.0575 38.5 11.27V22.3475C38.5 28.5775 36.9425 30.1175 30.73 30.1175H11.27C5.0575 30.135 3.5 28.5775 3.5 22.365V11.27C3.5 5.0575 5.0575 3.5 11.27 3.5Z" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M21 30.1345V38.4995" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.5 22.75H38.5" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.125 38.5H28.875" stroke="#00AC4F" stroke-width="2.625" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ),
      label: "Active Now",
      value: "189",
      avatars: [ 
        "/public/Images/Ellipse 58.png",
        "public/Images/Ellipse 59.png",
        "public/Images/Ellipse 60.png", 
        "/public/Images/Ellipse 61.png",
        "/public/Images/Ellipse 62.png",
      ],
    },
  ];

  return (
    <div className="flex justify-between bg-white shadow-lg p-6 rounded-[30px] w-full h-[151px]">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="relative flex items-center w-1/3 gap-3 p-4 rounded-lg"
        >
          <div className="bg-[#D3FFE7] flex items-center justify-center w-[84px] h-[84px] p-2 rounded-full shadow-md mb-4">
            {stat.icon}
          </div>
          <div className="flex flex-col p-0 m-0">
            <h3 className="text-[#ACACAC] text-sm">{stat.label}</h3>
            <p className="text-[#333] text-[32px] font-semibold">{stat.value}</p>
           <div className="flex items-center gap-1">
           {stat.change && (
              <p className={`flex items-center gap-1 text-xs ${stat.isPositive ? "text-green-500" : "text-red-500"}`}>
              {stat.isPositive ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                  <path d="M10 17L10 5" stroke="#00AC4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M4.16666 9.99999L10 4.16666L15.8333 9.99999" stroke="#00AC4F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                  <path d="M10 3L10 15" stroke="#D0004B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15.8333 10L10 15.8333L4.16668 10" stroke="#D0004B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {stat.change}
            </p>
          
            )}
            <span className="text-[#292D32] text-xs">{stat.month}</span>
           </div>
          {stat.avatars && (
  <div className="flex p-0 m-0">
    {stat.avatars.map((avatar, idx) => (
      <img
        key={idx}
        src={avatar}
        alt={`Avatar ${idx}`}
        className={`w-[26px] h-[26px] rounded-full  ${idx !== 0 ? '-ml-2' : ''}`}
      />
    ))}
  </div>
)}

          </div>

          {index !== stats.length - 1 && (
            <div className="bg-[#F0F0F0] w-[1px] h-[75%]  "></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default StatsSection;
