import { TfiWorld } from "react-icons/tfi";
import { ImProfile } from "react-icons/im";
import { GoVerified } from "react-icons/go";
import { BsChatText } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { IoBookOutline } from "react-icons/io5";
import { CiGrid41, CiUser } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { LuUsers2, LuUserSquare2 } from "react-icons/lu";
import { FaBuilding, FaClipboardList } from "react-icons/fa6";
import { PiPathBold, PiVinylRecordLight } from "react-icons/pi";

export const newRoutes = [
  {
    name: "Dashboard",
    icon: CiGrid41,
    path: "/dashboard",
  },
  // User management
  {
    name: "User Management",
    icon: HiOutlineUser,
    links: [
      {
        name: "Organization",
        path: "/organization",
        icon: FaBuilding,
      },
      {
        name: "Team",
        path: "/team",
        icon: LuUsers2,
      },
      {
        name: "All Users",
        path: "/user",
        icon: CiUser,
      },
      {
        name: "Alto Admins",
        path: "/admin",
        icon: CiUser,
      },
      {
        name: "Organization Admins",
        path: "/admin",
        icon: CiUser,
      },
      {
        name: "Team Admins",
        path: "/admin",
        icon: CiUser,
      },
      {
        name: "Individual Users",
        path: "/user",
        icon: CiUser,
      },
    ],
  },
  // Record management
  {
    name: "Record Management",
    icon: PiVinylRecordLight,
    path: "",
    links: [
      {
        name: "Your Inbox",
        path: "/inbox",
        icon: BsChatText,
      },
      {
        name: "All",
        path: "/team",
        icon: LuUsers2,
      },
      {
        name: "Unassigned",
        path: "/unassigned",
        icon: CiUser,
      },
      {
        name: "Referral Management",
        path: "/referral-management",
        icon: FaBuilding,
      },
      {
        name: "Closed",
        path: "/closed",
        icon: GoVerified,
      },
      {
        name: "Open",
        path: "/open",
        icon: IoBookOutline,
      },
    ],
  },
  // Role management
  {
    name: "Role Management",
    path: "/role-management",
    icon: LuUserSquare2,
    links: [
      {
        name: "Alto Admins",
        path: "/admin",
        icon: CiUser,
      },
      {
        name: "Organization Admins",
        path: "/admin",
        icon: CiUser,
      },
      {
        name: "Team Admins",
        path: "/admin",
        icon: CiUser,
      },
      {
        name: "Individual Users",
        path: "/user",
        icon: CiUser,
      },
      {
        name: "Customized Role 1",
        path: "/user",
        icon: CiUser,
      },
      {
        name: "Customized Role 2",
        path: "/user",
        icon: CiUser,
      },
    ],
  },
  // Pathway
  {
    name: "Pathways",
    icon: PiPathBold,
    path: "/pathways",
    links: [
      {
        name: "Manage Referral",
        path: "/referral",
        icon: PiPathBold,
      },
    ],
  },
  // Sequence
  {
    name: "Sequence",
    path: "/sequence",
    icon: TfiWorld,
    links: [
      {
        name: "Manage Referral",
        path: "/referral",
        icon: PiPathBold,
      },
    ],
  },
  // Profile
  {
    name: "Profile",
    icon: ImProfile,
    path: "/profile",
  },
  // User Activity
  {
    name: "User Activity",
    path: "/role",
    icon: FaClipboardList,
    links: [
      {
        name: "All Activities",
        path: "/dashbaord",
        icon: LuUsers2,
      },
      {
        name: "Organization Log",
        path: "/dashboard",
        icon: FaBuilding,
        links: [
          {
            name: "Beacon Hospital",
            path: "/dashboard",
          },
          {
            name: "Bantry Hospital",
            path: "/dashboard",
          },
          {
            name: "Beaumont Hospital",
            path: "/dashboard",
          },
          {
            name: "Ennis Hospital",
            path: "/dashboard",
          },
          {
            name: "Alto Health",
            path: "/dashboard",
          },
        ],
      },
      {
        name: "Team log",
        path: "/dashboard",
        icon: LuUsers2,
        links: [
          {
            name: "Beacon Hospital",
            path: "/dashboard",
          },
          {
            name: "Bantry Hospital",
            path: "/dashboard",
          },
          {
            name: "Beaumont Hospital",
            path: "/dashboard",
          },
          {
            name: "Ennis Hospital",
            path: "/dashboard",
          },
          {
            name: "Alto Health",
            path: "/dashboard",
          },
        ],
      },
      {
        name: "Individual Log",
        path: "/dashboard",
        icon: CiUser,
        links: [
          {
            name: "Beacon Hospital",
            path: "/dashboard",
          },
          {
            name: "Bantry Hospital",
            path: "/dashboard",
          },
          {
            name: "Beaumont Hospital",
            path: "/dashboard",
          },
          {
            name: "Ennis Hospital",
            path: "/dashboard",
          },
          {
            name: "Alto Health",
            path: "/dashboard",
          },
        ],
      },
    ],
  },
  {
    name: "Security",
    path: "/security",
    icon: MdOutlineSecurity,
  },
];
