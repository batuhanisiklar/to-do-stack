"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

interface TeacherInfo {
  name: string;
  department: string;
  title: string;
  email: string;
  officeHours: string;
  officeLocation: string;
}

export default function TeacherDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [teacherInfo, setTeacherInfo] = useState<TeacherInfo>({
    name: "Prof. Dr. Ahmet Yılmaz",
    department: "Computer Engineering",
    title: "Professor", 
    email: "ahmet.yilmaz@university.edu",
    officeHours: "Mon, Wed 10:00-12:00",
    officeLocation: "Block B, Room 205"
  });

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="animate-pulse flex space-x-6">
          <div className="h-12 w-12 bg-white rounded-full animate-spin"></div>
          <div className="text-2xl text-white font-bold">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-md shadow-xl">
        <div className="max-w-8xl mx-auto px-4 lg:px-6">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Teacher Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <button className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <span className="text-md font-semibold text-gray-700">Welcome, {teacherInfo.name}</span>
              <button
                onClick={handleLogout}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold text-md"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-white/90 backdrop-blur-xl shadow-2xl h-screen fixed left-0 p-4">
          <div className="space-y-2">
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 rounded-lg transition-all duration-300 flex items-center space-x-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-md">Course Schedule</span>
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 rounded-lg transition-all duration-300 flex items-center space-x-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="font-semibold text-md">Grade Management</span>
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 rounded-lg transition-all duration-300 flex items-center space-x-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span className="font-semibold text-md">Course Management</span>
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 rounded-lg transition-all duration-300 flex items-center space-x-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="font-semibold text-md">Announcements</span>
            </button>
            <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-700 rounded-lg transition-all duration-300 flex items-center space-x-2 group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-semibold text-md">Academic Calendar</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-64 flex-1">
          <div className="max-w-8xl mx-auto py-6 px-4 lg:px-6">
            <div className="bg-white/90 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden border border-blue-100 mb-6 hover:shadow-3xl transition-all duration-500">
              <div className="p-6">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <p className="text-md font-semibold text-blue-600">Name</p>
                    <p className="text-xl font-bold text-gray-800 mt-2">{teacherInfo.name}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <p className="text-md font-semibold text-blue-600">Title</p>
                    <p className="text-xl font-bold text-gray-800 mt-2">{teacherInfo.title}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <p className="text-md font-semibold text-blue-600">Department</p>
                    <p className="text-xl font-bold text-gray-800 mt-2">{teacherInfo.department}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <p className="text-md font-semibold text-blue-600">Email</p>
                    <p className="text-xl font-bold text-gray-800 mt-2">{teacherInfo.email}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <p className="text-md font-semibold text-blue-600">Office Hours</p>
                    <p className="text-xl font-bold text-gray-800 mt-2">{teacherInfo.officeHours}</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <p className="text-md font-semibold text-blue-600">Office Location</p>
                    <p className="text-xl font-bold text-gray-800 mt-2">{teacherInfo.officeLocation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
