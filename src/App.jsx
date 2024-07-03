import React, { useState } from "react";
import { CiGrid41 } from "react-icons/ci";
import { FaRegUser, FaUsers, FaUserCheck } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { PiUserListDuotone } from "react-icons/pi";

function App() {
  const [activeLink, setActiveLink] = useState(0);

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
      <nav className="relative h-screen w-[65px] border-r-2 border-r-[#F9F9F9] shadow-md">
        <h1 className="p-1 text-xl font-bold mb-4 text-deep-blue text-center">
          Alto
        </h1>
        <ul className="flex flex-col gap-y-1 me-1">
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
              >
                {React.createElement(icon, { className: "text-[20px]" })}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`fixed left-[65px] top-0 h-full bg-[#F9F9F9] w-[220px] shadow-md transitions ${
          activeLink !== null ? "block" : "hidden"
        }`}
      >
        {activeLink !== null && (
          <>
            <h2 className="p-2 font-medium mb-4 text-lg text-gray-600 text-center">
              {icons[activeLink].label}
            </h2>
            <ul className="px-4">
              {icons[activeLink].links.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.route}
                    className="block p-2 bg-white rounded shadow-md hover:bg-gray-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </main>
  );
}

export default App;
