import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import { CiGrid41 } from "react-icons/ci";
import { FaRegUser, FaUsers, FaUserCheck } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { PiUserListDuotone } from "react-icons/pi";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(null);
  const [hoveringToolbar, setHoveringToolbar] = useState(false);
  const [hoveringButton, setHoveringButton] = useState(false);

  //   dummy links
  const icons = [
    {
      icon: CiGrid41,
      label: "Dashboard",
      route: "/",
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
      route: "/user-check", // Direct route for this item
    },
    {
      icon: PiUserListDuotone,
      label: "User List",
      route: "/user-list", // Direct route for this item
    },
  ];

  useEffect(() => {
    if (!hoveringButton && !hoveringToolbar) {
      setActiveLink(null);
    }
  }, [hoveringButton, hoveringToolbar]);

  return (
    <main className="relative flex">
      {/* Sidebar */}
      <div>
        <nav className="relative h-screen w-[65px] border-r-2 border-r-[#F9F9F9] shadow-md">
          <h1 className="p-1 mb-4 text-xl font-bold text-center text-deep-blue">
            Alto
          </h1>
          <ul className="flex flex-col me-1">
            {icons.map(({ icon, label, links, route }, index) => (
              <li key={index}>
                {links ? (
                  <button
                    aria-label={label}
                    className={`w-[65px] border-r-2 text-[#222222] border-r-[#F9F9F9] h-[55px] grid place-items-center border-l-[3px] 
                  ${
                    activeLink === index
                      ? "border-l-deep-blue bg-[#F9F9F9]"
                      : "border-l-transparent"
                  } 
                  hover:border-l-deep-blue cursor-pointer transitions hover:bg-[#F9F9F9] focus:bg-[#F9F9F9]`}
                    onMouseEnter={() => {
                      setActiveLink(index);
                      setHoveringButton(true);
                    }}
                    onMouseLeave={() => setHoveringButton(false)}
                  >
                    {React.createElement(icon, { className: "text-[20px]" })}
                  </button>
                ) : (
                  <Link
                    to={route}
                    aria-label={label}
                    className={`w-[65px] border-r-2 text-[#222222] border-r-[#F9F9F9] h-[55px] grid place-items-center border-l-[3px] 
                  hover:border-l-deep-blue cursor-pointer transitions hover:bg-[#F9F9F9] focus:bg-[#F9F9F9]`}
                  >
                    {React.createElement(icon, { className: "text-[20px]" })}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Toolbar */}
        <div
          className={`fixed top-0 h-full left-[65px] bg-[#F9F9F9] shadow-md rounded-tr-[20px] rounded-br-[20px] ${
            activeLink !== null && icons[activeLink].links ? "w-[220px]" : "w-0"
          }`}
          style={{ overflow: "hidden", transition: "width 0.3s ease-in-out" }}
          onMouseEnter={() => setHoveringToolbar(true)}
          onMouseLeave={() => setHoveringToolbar(false)}
        >
          {activeLink !== null && icons[activeLink].links && (
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
      </div>
    </main>
  );
}

export default Sidebar;
