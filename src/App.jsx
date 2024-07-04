import React, { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaRegUser, FaUsers, FaUserCheck } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { PiUserListDuotone } from "react-icons/pi";

function App() {
  const [activeLink, setActiveLink] = useState(null);

  const icons = [
    {
      icon: CiGrid41,
      label: "Dashboard",
      links: [
        { name: "Overview", route: "/dashboard/overview" },
        { name: "Stats", route: "/dashboard/stats" },
        { name: "Reports", route: "/dashboard/reports" },
        { name: "Settings", route: "/dashboard/settings" },
        { name: "Notifications", route: "/dashboard/notifications" },
      ],
    },
    {
      icon: FaRegUser,
      label: "Profile",
      links: [
        { name: "My Profile", route: "/profile/my-profile" },
        { name: "Edit Profile", route: "/profile/edit" },
        { name: "Preferences", route: "/profile/preferences" },
        { name: "Privacy", route: "/profile/privacy" },
        { name: "Security", route: "/profile/security" },
      ],
    },
    {
      icon: FaUsers,
      label: "Users",
      links: [
        { name: "User List", route: "/users/list" },
        { name: "User Groups", route: "/users/groups" },
        { name: "User Roles", route: "/users/roles" },
        { name: "User Permissions", route: "/users/permissions" },
        { name: "User Activity", route: "/users/activity" },
      ],
    },
    {
      icon: TfiWorld,
      label: "World",
      links: [
        { name: "Global Stats", route: "/world/global-stats" },
        { name: "Regional Data", route: "/world/regional" },
        { name: "Country Reports", route: "/world/country-reports" },
        { name: "International News", route: "/world/news" },
        { name: "Climate", route: "/world/climate" },
      ],
    },
    {
      icon: FaUserCheck,
      label: "User Check",
      links: [
        { name: "Verification", route: "/user-check/verification" },
        { name: "Background Check", route: "/user-check/background" },
        { name: "History", route: "/user-check/history" },
        { name: "Compliance", route: "/user-check/compliance" },
        { name: "Approval", route: "/user-check/approval" },
      ],
    },
    {
      icon: PiUserListDuotone,
      label: "User List",
      links: [
        { name: "All Users", route: "/user-list/all" },
        { name: "Active Users", route: "/user-list/active" },
        { name: "Inactive Users", route: "/user-list/inactive" },
        { name: "Banned Users", route: "/user-list/banned" },
        { name: "New Users", route: "/user-list/new" },
      ],
    },
  ];

  return (
    <main className="relative flex">
      <nav className="relative h-screen w-[65px] border-r-2 border-r-[#F9F9F9] shadow-md ">
        <h1 className="p-1 mb-4 text-xl font-bold text-center text-deep-blue">
          Alto
        </h1>
        <ul className="flex flex-col me-1">
          {icons.map(({ icon, label }, index) => (
            <li key={index}>
              <button
                aria-label={label}
                className={`w-[65px] border-r-2 text-[#222222] border-r-[#F9F9F9] h-[55px] grid place-items-center border-l-[3px] 
                  ${
                    activeLink === index
                      ? "border-l-deep-blue bg-[#F9F9F9]"
                      : "border-l-transparent"
                  } 
                  hover:border-l-deep-blue cursor-pointer transitions hover:bg-[#F9F9F9] focus:bg-[#F9F9F9]`}
                onClick={() => setActiveLink(index)}
                onMouseEnter={() => setActiveLink(index)}
                // onMouseLeave={() => setActiveLink(null)}
              >
                {React.createElement(icon, { className: "text-[20px]" })}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed  top-0 h-full bg-[#F9F9F9] shadow-md transitions ${
          activeLink !== null ? "w-[220px] left-[65px]" : "w-0 left-0"
        }`}
        style={{ overflow: "hidden", transition: "width 0.3s ease-in-out" }}
      >
        {activeLink !== null && (
          <>
            <h2 className="p-2 mb-4 text-lg font-medium text-center text-gray-600">
              {icons[activeLink].label}
            </h2>
            <ul className="px-4">
              {icons[activeLink].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.route}
                    className="block p-2 bg-white rounded shadow-md hover:bg-sky-blue hover:text-white transitions"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      <div className="flex items-center justify-center flex-1 w-full h-screen ">
        <h1 className="text-3xl font-semibold text-white font-poppin">
          Dashboard
        </h1>
      </div>
    </main>
  );
}

export default App;
