import React, { useState, useEffect } from "react";
import { newRoutes } from "./routes";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(1);
  const [hoveringButton, setHoveringButton] = useState(false);
  const [hoveringToolbar, setHoveringToolbar] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!hoveringButton && !hoveringToolbar) {
      setActiveLink(null);
    }
  }, [hoveringButton, hoveringToolbar]);

  return (
    <main className="relative flex">
      {/* Sidebar */}
      <div>
        <nav className=" min-h-screen w-[65px] bg-white border-r-2 border-r-[#CFCFCF] shadow-md">
          <p
            className="px-1 pt-5 mb-[50px] text-[22px] font-bold font-poppin text-center cursor-pointer  text-deep-blue"
            onClick={() => navigate("/dashboard")}
          >
            Alto
          </p>

          <ul className="flex flex-col me-1">
            {newRoutes.map((route, index) => {
              const isActive = location.pathname === route.path;

              return (
                <li key={index}>
                  <>
                    {route?.links ? (
                      <button
                        className={`w-[65px] text-[#222222] h-[55px] grid place-items-center transitions border-r-2 border-r-[#CFCFCF] border-l-[3px] ${
                          isActive
                            ? "border-l-deep-blue bg-[#F9F9F9]"
                            : "border-l-transparent bg-white"
                        } hover:border-l-deep-blue cursor-pointer hover:bg-[#F9F9F9] focus:bg-[#F9F9F9]`}
                        onMouseEnter={() => {
                          setActiveLink(index);
                          setHoveringButton(true);
                        }}
                        onMouseLeave={() => setHoveringButton(false)}
                      >
                        {React.createElement(route.icon, {
                          className: "text-[20px]",
                        })}
                      </button>
                    ) : (
                      <Link
                        to={route.path}
                        className={`w-[65px]  text-[#222222] h-[55px] grid place-items-center border-l-[3px] hover:border-l-deep-blue cursor-pointer transitions border-r-2 border-r-[#CFCFCF] hover:bg-[#F9F9F9] focus:bg-[#F9F9F9] ${
                          isActive
                            ? "border-l-deep-blue bg-[#F9F9F9]"
                            : "border-l-transparent bg-white"
                        }`}
                      >
                        {React.createElement(route.icon, {
                          className: "text-[20px]",
                        })}
                      </Link>
                    )}
                  </>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Toolbar */}
        <div
          className={`fixed top-0 h-full overflow-y-auto left-[65px] bg-[#F9F9F9] shadow-md z-[10] ${
            activeLink !== null && newRoutes[activeLink].links
              ? "w-[220px]"
              : "w-0"
          }`}
          style={{ overflow: "hidden", transition: "width 0.3s ease-in-out" }}
          onMouseEnter={() => setHoveringToolbar(true)}
          // onMouseLeave={() => setHoveringToolbar(false)}
        >
          {activeLink !== null && newRoutes[activeLink].links && (
            <>
              <h2 className="p-2 mt-6 mb-[35px] text-lg font-medium text-center text-gray-600">
                {newRoutes[activeLink].name}
              </h2>
              <div>
                {newRoutes[activeLink]?.links?.map((link, index) => {
                  if (link?.links?.length > 0) {
                    return (
                      <div
                        key={index}
                        className="collapse collapse-arrow rounded-0"
                      >
                        <input type="radio" name={"link"} defaultChecked />
                        <button
                          type="button"
                          className="flex items-center gap-x-3 px-3 h-[55px] transitions hover:shadow bg-transparent focus:!bg-white hover:!bg-white text-[#222222] rounded-0 text-xl font-medium collapse-title "
                        >
                          <span>
                            {React.createElement(link.icon, {
                              className: "text-[20px]",
                            })}
                          </span>
                          <p className="block text-sm font-normal">
                            {link.name}
                          </p>
                        </button>
                        <div className="collapse-content">
                          {link?.links?.map((link, index) => {
                            return (
                              <div
                                key={index}
                                className="flex items-center w-full mb-2 ps-7"
                              >
                                <Link
                                  to={link.path}
                                  className="text-[#222222] text-sm  transitions hover:text-deep-blue"
                                  key={index}
                                >
                                  {link.name}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <Link
                        to={link.path}
                        key={index}
                        className="flex items-center gap-x-3 px-3 h-[55px] transitions hover:shadow hover:bg-white text-[#222222]"
                      >
                        <span>
                          {React.createElement(link.icon, {
                            className: "text-[20px]",
                          })}
                        </span>
                        <p className="block text-sm font-normal">{link.name}</p>
                      </Link>
                    );
                  }
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
