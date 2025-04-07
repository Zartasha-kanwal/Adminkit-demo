import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSearch,
  faBell,
  faEnvelope,
  faExpand,
} from "@fortawesome/free-solid-svg-icons";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from "date-fns";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const data = [
  { month: "Jan", Sales: 2000 },
  { month: "Feb", Sales: 1500 },
  { month: "Mar", Sales: 1400 },
  { month: "Apr", Sales: 1900 },
  { month: "May", Sales: 1500 },
  { month: "Jun", Sales: 2000 },
  { month: "Jul", Sales: 2900 },
  { month: "Aug", Sales: 2700 },
  { month: "Sep", Sales: 3000 },
  { month: "Oct", Sales: 3500 },
  { month: "Nov", Sales: 3800 },
  { month: "Dec", Sales: 3500 },
];
const data2 = [
  { name: "Chrome", value: 4306, color: "blue" },
  { name: "Firefox", value: 3801, color: "orange" },
  { name: "IE", value: 1689, color: "red" },
  { name: "Others", value: 3251, color: "lightgray" },
];
const data3 = [
  { month: "Jan", value: 54 },
  { month: "Feb", value: 67 },
  { month: "Mar", value: 41 },
  { month: "Apr", value: 55 },
  { month: "May", value: 62 },
  { month: "Jun", value: 45 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 73 },
  { month: "Sep", value: 60 },
  { month: "Oct", value: 76 },
  { month: "Nov", value: 48 },
  { month: "Dec", value: 79 },
];

export default function Adminkit() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);
  const [dropdownOpen3, setDropdownOpen3] = useState(false);
  const [dropdownOpen4, setDropdownOpen4] = useState(false);
  const [events, setEvents] = useState();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };
  const [currentDate, setCurrentDate] = useState(new Date());

  const startDate = startOfWeek(startOfMonth(currentDate));
  const endDate = endOfWeek(endOfMonth(currentDate));

  const days = [];
  let day = startDate;

  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }
  const bounds = [
    [10, 120], // Bottom-left (South China Sea)
    [60, -130], // Top-right (Alaska)
  ];

  // Define key locations (Tokyo, Islamabad, Los Angeles)
  const cities = [
    { name: "Tokyo, Japan", position: [35.6895, 139.6917] },
    { name: "Islamabad, Pakistan", position: [33.6844, 73.0479] },
    { name: "Los Angeles, USA", position: [34.0522, -118.2437] },
  ];

  return (
    <section className="bg-[#f6f5f5]">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[100vh] overflow-y-auto bg-gray-800 text-white w-64 p-5 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="space-y-4">
          <li className="hover:bg-gray-700 p-2 rounded mt-16 font-bold">
            AdminKit<sup className="bg-blue-600 ml-1 rounded-sm">PRO</sup>
          </li>
          <div className="grid grid-cols-[20%_80%]">
            <div>
              <img
                src="https://demo.adminkit.io/img/avatars/avatar.jpg"
                className="rounded-sm h-[40px] w-[40px] "
              />
            </div>
            <div className="font-semibold">
              <h6>Charles Hall</h6>
              <p className="text-[13px] text-[#ccc]">Designer</p>
            </div>
          </div>
          <ul className="text-[#ccc] text-[16px]">
            Pages
            <li className="flex flex-row gap-2 mt-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-sliders align-middle"
              >
                <line x1="4" y1="21" x2="4" y2="14"></line>
                <line x1="4" y1="10" x2="4" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="3"></line>
                <line x1="20" y1="21" x2="20" y2="16"></line>
                <line x1="20" y1="12" x2="20" y2="3"></line>
                <line x1="1" y1="14" x2="7" y2="14"></line>
                <line x1="9" y1="8" x2="15" y2="8"></line>
                <line x1="17" y1="16" x2="23" y2="16"></line>
              </svg>
              Dashboards
            </li>
            <li className="text-white hover:bg-gray-700 p-2 rounded">
              →
              <a className="ml-4" href="#">
                Analytics
              </a>
            </li>
            <li className="text-white hover:bg-gray-700 p-2 rounded">
              →
              <a className="ml-4" href="#">
                E-Commerce{" "}
              </a>
            </li>
            <li className="text-white hover:bg-gray-700 p-2 rounded">
              →
              <a className="ml-4" href="#">
                Crypto{" "}
              </a>
            </li>
          </ul>
          <ul className="text-[#ccc]">
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-layout align-middle"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
              </svg>
              Pages
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-user align-middle"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              Profile
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-credit-card align-middle"
              >
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                <line x1="1" y1="10" x2="23" y2="10"></line>
              </svg>
              Invoice
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-list align-middle"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              Tasks
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-calendar align-middle"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Calendar
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-users align-middle"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Auth
            </li>
          </ul>
          <ul>
            <span className="text-[14px]">Components</span>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-briefcase align-middle"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
              UI Elements
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-coffee align-middle"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              Icons
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-check-circle align-middle"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Forms
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-list align-middle"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              Tables
            </li>
          </ul>
          <ul>
            <span className="text-[14px]">Plugins & Addons</span>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-check-square align-middle"
              >
                <polyline points="9 11 12 14 22 4"></polyline>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
              </svg>
              Form Plugins
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-list align-middle"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              DataTables
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bar-chart-2 align-middle"
              >
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
              </svg>
              Charts
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-bell align-middle"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
              Notifications
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-map align-middle"
              >
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
                <line x1="8" y1="2" x2="8" y2="18"></line>
                <line x1="16" y1="6" x2="16" y2="22"></line>
              </svg>
              Maps
            </li>
            <li className="flex flex-row gap-4 items-center hover:text-white cursor-pointer mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-corner-right-down align-middle"
              >
                <polyline points="10 15 15 20 20 15"></polyline>
                <path d="M4 4h7a4 4 0 0 1 4 4v12"></path>
              </svg>
              Multi Level
            </li>
          </ul>
        </ul>
        <div className="w-full h-[170px] p-5 bg-[#293947] rounded-md mt-8">
          <strong className="mb-3">Weekly Sales Report</strong>
          <div className="text-sm mb-6">
            Your weekly sales report is ready for download!
          </div>
          <button className="text-blue-600 border border-blue-600 w-full h-9 rounded-md">
            Download
          </button>
        </div>
      </div>
      <nav className="flex items-center justify-between bg-white shadow-lg p-4 w-full  text-white sticky top-0 z-20">
        {/* Menu Icon */}
        <div className="relative">
          <button
            className="text-3xl"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={` text-3xl ${
                isSidebarOpen ? "text-[#000000A6] text-xl" : "text-[#000000A6]"
              } transition-colors duration-300`}
            />
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex items-center  max-sm:hidden xs:hidden md:flex  rounded-lg px-3 py-1 ml-3">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-xl outline-0 ml-2 text-[#000000A6]"
          />
          <FontAwesomeIcon icon={faSearch} className="text-gray-400 text-xl" />
        </div>

        {/* Dropdowns - Hidden in md, visible in lg+ */}
        <div className="hidden lg:flex gap-4 text-[#000000A6]">
          <div className="relative group top-0">
            <button className=" flex items-center">Mega Menu▾</button>
            <div className="absolute left-0 mt-2  bg-white shadow-lg opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 flex flex-row">
              <div className="text-[#ccc] ml-2">
                {" "}
                UI elements
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Cards
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Carousel
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Grid
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Buttons
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  General
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Grid
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Modal
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Tab
                </a>
              </div>
              <div className="text-[#ccc] ml-2">
                {" "}
                Forms
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Layouts
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Basic Inputs
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Input Groups
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Advanced Inputs
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Editors
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Validation
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Wizard
                </a>
              </div>
              <div className="text-[#ccc] ml-2">
                {" "}
                Tables
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Basic Tables
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Responsive Table
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Table with Buttons
                </a>
                <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                  Muulti Selection
                </a>
              </div>
            </div>
          </div>
          <div className="relative top-0 group">
            <button className=" flex items-center">Services▾</button>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg opacity-0 invisible translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
              <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                HomePage
              </a>
              <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                Documentations
              </a>
              <a className="block px-4 py-2 text-[#000000A6] hover:bg-gray-200">
                Changelog
              </a>
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-center gap-4 text-[#4d4b4ba6]">
          <FontAwesomeIcon
            icon={faBell}
            className="text-xl cursor-pointer hover:text-blue-500"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-xl cursor-pointer hover:text-blue-500"
          />
          <div className="cursor-pointer">
            <img
              src="https://demo.adminkit.io/img/flags/us.png"
              className="h-[20px] w-[20px] rounded-full"
            />
          </div>
          {/* Fullscreen Toggle */}
          <button onClick={toggleFullscreen}>
            <FontAwesomeIcon
              icon={faExpand}
              className="text-xl hover:text-blue-500"
            />
          </button>
          <img
            src="https://demo.adminkit.io/img/avatars/avatar.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-[7px] cursor-pointer"
          />
        </div>
      </nav>

      {/*Heading */}
      <div className=" px-8 py-4 flex flex-row justify-between items-center w-full">
        <div>
          <h1>
            <strong>Analytics</strong> Dashboard
          </h1>
        </div>
        <div className="flex flex-row gap-5  items-center">
          <h1>Invite a friend</h1>
          <button className="bg-blue-500 text-white rounded-sm px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 text-sm sm:text-base md:text-lg font-semibold">
            New Project
          </button>
        </div>
      </div>

      {/*Sales & graph section */}
      <div className="grid lg:grid-cols-2 grid-cols-1 h-1/2 px-20 gap-4">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-3">
          <div className="h-[154px] p-[30px] shadow-xl">
            <div className="flex flex-row items-center justify-between font-semibold">
              <h4 className="text-[#afadad]">Sales</h4>
              <span className="text-[#3b7ddd] bg-[#d3e2f7] h-8 w-8 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-truck align-middle"
                >
                  <rect x="1" y="3" width="15" height="13"></rect>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                  <circle cx="5.5" cy="18.5" r="2.5"></circle>
                  <circle cx="18.5" cy="18.5" r="2.5"></circle>
                </svg>
              </span>
            </div>
            <h1 className="text-[28px]">2.382</h1>
            <div>
              <span className="text-[#3b7ddd]">-3.65%</span>&nbsp;
              <span className="text-[#afadad]">Since last week</span>
            </div>
          </div>
          <div className="h-[154px] p-[30px] shadow-xl">
            <div className="flex flex-row items-center justify-between font-semibold">
              <h4 className="text-[#afadad]">Earnings</h4>
              <span className="text-[#3b7ddd] bg-[#d3e2f7] h-8 w-8 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-dollar-sign align-middle"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </span>
            </div>
            <h1 className="text-[28px]">$21.300</h1>
            <div>
              <span className="text-[#3b7ddd]">6.65%</span> &nbsp;
              <span className="text-[#afadad]">Since last week</span>
            </div>
          </div>
          <div className="h-[154px] p-[30px] shadow-xl">
            <div className="flex flex-row items-center justify-between font-semibold">
              <h4 className="text-[#afadad]">Visitors</h4>
              <span className="text-[#3b7ddd] bg-[#d3e2f7] h-8 w-8 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-users align-middle"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </span>
            </div>
            <h1 className="text-[28px]">14.212</h1>
            <div>
              <span className="text-[#3b7ddd]">5.25%</span> &nbsp;
              <span className="text-[#afadad]">Since last week</span>
            </div>
          </div>
          <div className="h-[154px] p-[30px] shadow-xl">
            <div className="flex flex-row items-center justify-between font-semibold">
              <h4 className="text-[#afadad]">Orders</h4>
              <span className="text-[#3b7ddd] bg-[#d3e2f7] h-8 w-8 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-shopping-cart align-middle"
                >
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </span>
            </div>
            <h1 className="text-[28px]">64</h1>
            <div>
              <span className="text-[#DC3545]">-2.25%</span> &nbsp;
              <span className="text-[#afadad]">Since last week</span>
            </div>
          </div>
        </div>
        <div>
          {/*graph section header area */}
          <div className="flex justify-between items-center mt-2">
            <h4 className="text-[#939BA2] font-semibold">Recent Movement</h4>
            <div className="flex flex-row gap-4">
              <select className="border-0 outline-white outline-4 hover:outline-blue-300 rounded-sm">
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
              </select>
              <input
                type="text"
                placeholder="Search.."
                className="text-[#939BA2] outline-0 rounded-sm px-2"
              />
            </div>
          </div>
          {/*graph area */}
          <div className="flex justify-center items-center shadow-xl">
            <div className="w-full max-w-3xl pt-2">
              <ResponsiveContainer
                width="100%"
                height={300}
                className={`bg-[#e9f1f4]`}
              >
                <LineChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis domain={[1000, 4000]} tickCount={5} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="Sales"
                    stroke="#4f46e5"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/*Broswer & Calender */}
      <div className="grid lg:grid-cols-2 grid-cols-1 h-1/2 lg:px-20 gap-4 mt-10">
        {/*Broswer usage area */}
        <div className="shadow-lg bg-white">
          <h1 className="font-semibold text-[#afadad] text-lg mt-2 ml-2">
            Browser Usage
          </h1>
          <div className="flex justify-center items-center">
            <PieChart width={300} height={300}>
              <Pie
                data={data2}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
              >
                {data2.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </div>
          <div className="flex flex-row justify-between items-center px-4 border border-b-gray-400 border-x-0 border-t-0 mb-4">
            <div>
              {" "}
              <i className="fa-solid fa-circle text-blue-700"></i> Chrome{" "}
              <span className="text-[#1CBB8C] bg-[#1CBB8C26] rounded-sm">
                +12%
              </span>
            </div>
            <span>4306</span>
          </div>
          <div className="flex flex-row justify-between items-center px-4 border border-b-gray-400 border-x-0 border-t-0 mb-4">
            <div>
              {" "}
              <i className="fa-solid fa-circle text-orange-500"></i> Firefox{" "}
              <span className="text-[#Dc3545] bg-[#DC354526] rounded-sm">
                -3%
              </span>
            </div>
            <span>3801</span>
          </div>
          <div className="flex flex-row justify-between items-center px-4 border border-b-gray-400 border-x-0 border-t-0 mb-4">
            <div>
              {" "}
              <i className="fa-solid fa-circle text-red-600"></i> Edge
            </div>
            <span>1689</span>
          </div>
          <div className="flex flex-row justify-between items-center px-4 border border-b-gray-400 border-x-0 border-t-0 mb-4">
            <div>
              {" "}
              <i className="fa-solid fa-circle text-black"></i> Others
            </div>
            <span>3251</span>
          </div>
        </div>
        {/*Calender area */}
        <div className="bg-white shadow-lg">
          <div className="flex flex-row px-2 py-2 justify-between items-center">
            <h1 className="font-semibold text-[#afadad] text-lg mt-2 ml-2">
              Calender
            </h1>
            <div
              className="relative cursor-pointer"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <i className="fa-solid fa-ellipsis"></i>
              {dropdownOpen && (
                <div className="absolute w-40 right-3 shadow-[0_0_10px_rgba(0,0,0,0.25)] cursor-pointer">
                  <h4 className="pl-2 hover:bg-slate-300">Action</h4>
                  <h4 className="pl-2 hover:bg-slate-300">Another action</h4>
                  <h4 className="pl-2 hover:bg-slate-300 mb-2">
                    Something else here
                  </h4>
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-9 px-2 sm:px-4 w-full max-w-full">
            <div className="bg-white rounded-lg w-full ">
              <div className="flex justify-between items-center">
                <button
                  onClick={() => setCurrentDate(addDays(currentDate, -30))}
                  className="p-2 bg-gray-200 rounded"
                >
                  ◀
                </button>
                <h2 className="text-lg font-semibold">
                  {format(currentDate, "MMMM yyyy")}
                </h2>
                <button
                  onClick={() => setCurrentDate(addDays(currentDate, 30))}
                  className="p-2 bg-gray-200 rounded"
                >
                  ▶
                </button>
              </div>
              {/* Day Names */}
              <div className="grid grid-cols-7 text-center font-semibold">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div key={day}>{day}</div>
                  )
                )}
              </div>
              {/* Days */}
              <div className="grid grid-cols-7 gap-1 text-center">
                {days.map((day, index) => (
                  <div key={index} className=" border rounded-md bg-gray-100">
                    {format(day, "d")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Real-Time Section */}
      <div className="lg:px-20 md:px-14 px-8 mt-8 bg-white shadow-lg">
        <div className="flex flex-row justify-between items-center">
          <h1 className="font-semibold text-[#afadad] text-lg">Real-Time</h1>
          <div
            className="relative cursor-pointer"
            onClick={() => setDropdownOpen2(!dropdownOpen2)}
          >
            <i className="fa-solid fa-ellipsis"></i>
            {dropdownOpen2 && (
              <div className="absolute w-40 right-3 shadow-[0_0_10px_rgba(0,0,0,0.25)] cursor-pointer">
                <h4 className="pl-2 hover:bg-slate-300">Action</h4>
                <h4 className="pl-2 hover:bg-slate-300">Another action</h4>
                <h4 className="pl-2 hover:bg-slate-300 mb-2">
                  Something else here
                </h4>
              </div>
            )}
          </div>
        </div>
        <div className=" relative z-0 flex justify-center items-center min-h-screen">
          <div className="w-full max-w-4xl h-[500px] rounded-lg overflow-hidden">
            <MapContainer
              bounds={bounds}
              className="h-full w-full"
              scrollWheelZoom={true}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
          </div>
        </div>
      </div>
      {/*Latest projects */}
      <div className="bg-white lg:px-20 md:px-14 px-8">
        <div className="flex flex-row px-2 py-2 justify-between items-center">
          <h1 className="font-semibold text-[#afadad] text-lg mt-2 ml-2">
            Latest Projects
          </h1>
          <div
            className="relative cursor-pointer"
            onClick={() => setDropdownOpen4(!dropdownOpen4)}
          >
            <i className="fa-solid fa-ellipsis"></i>
            {dropdownOpen4 && (
              <div className="absolute w-40 right-3 bg-white shadow-[0_0_10px_rgba(0,0,0,0.25)] cursor-pointer">
                <h4 className="pl-2 hover:bg-slate-300">Action</h4>
                <h4 className="pl-2 hover:bg-slate-300">Another action</h4>
                <h4 className="pl-2 hover:bg-slate-300 mb-2">
                  Something else here
                </h4>
              </div>
            )}
          </div>
        </div>

        <div className="w-full max-w-2xl mx-auto pt-5 bg-white">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data3}>
              <XAxis dataKey="month" />
              <YAxis domain={[40, 80]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ fill: "#3b82f6", r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <footer className="px-4 text-[#afadad] mt-10 mb-3 flex flex-row justify-between cursor-pointer">
        <strong className="hover:underline">AdminKit ©</strong>
        <ul className="flex flex-row gap-2">
          <li className="hover:underline">Support</li>
          <li className="hover:underline">Help Center</li>
          <li className="hover:underline">Privacy</li>
          <li className="hover:underline">Terms</li>
        </ul>
      </footer>
    </section>
  );
}
