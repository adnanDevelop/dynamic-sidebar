import { CiGrid41 } from "react-icons/ci";
import { FaRegUser, FaUsers, FaUserCheck } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { PiUserListDuotone } from "react-icons/pi";
import React from "react";

function App() {
  const icons = [
    { icon: CiGrid41, label: "Dashboard" },
    { icon: FaRegUser, label: "Profile" },
    { icon: FaUsers, label: "Users" },
    { icon: TfiWorld, label: "World" },
    { icon: FaUserCheck, label: "User Check" },
    { icon: PiUserListDuotone, label: "User List" },
  ];

  return (
    <main className="relative">
      <nav className="relative h-screen w-[65px] border-r-2 border-r-[#F9F9F9] shadow-md">
        <h1 className="p-1 text-xl font-bold mb-4 text-deep-blue text-center">
          Alto
        </h1>
        <div>
          <ul className="flex flex-col gap-y-1 me-1">
            {icons.map(({ icon, label }, index) => {
              return (
                <li key={index}>
                  <button
                    aria-label={label}
                    className="w-[65px] border-r-2 text-[#222222] border-r-[#F9F9F9] h-[55px] grid place-items-center border-l-[3px] border-l-transparent hover:border-l-deep-blue cursor-pointer transitions hover:bg-[#F9F9F9] focus:bg-[#F9F9F9] bg-white"
                  >
                    {React.createElement(icon, {
                      className: "text-[20px] ",
                    })}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Toolbar */}
          <div className="fixed left-[65px] top-0 h-full bg-[#F9F9F9] w-[200px] shadow-md transitions">
            <h2 className="p-2 font-semibold text-lg text-gray-600 text-center">
              Team
            </h2>
          </div>
        </div>
      </nav>
    </main>
  );
}

export default App;
