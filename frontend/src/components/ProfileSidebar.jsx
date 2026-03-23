import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import DefaultImage from "../../assets/Default_pfp.jpg"
const ProfileSidebar = () => {
    const { id } = useParams();

  const [profileURL, setProfileURL] = useState(DefaultImage)

  const fileUploadRef = useRef();

  const handleImageUpload = (e) => {
    e.preventDefault();
    fileUploadRef.current.click();
  }

  const uploadImageDisplay = () => {
    const uploadedFile = fileUploadRef.current.files[0];
    const cachedURL = URL.createObjectURL(uploadedFile);
    setProfileURL(cachedURL)
  }
  return (
    <div className="md:w-1/3 bg-gray-50/50 dark:bg-gray-800/50 p-10 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">

            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#00ADB5] to-[#00ADB5] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

              <div className="relative">
                <img
                  src={profileURL}
                  alt="Profile"
                  className="rounded-full w-44 h-44 object-cover mx-auto border-4 border-white dark:border-gray-700 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]"
                />

                <form id="form" encType="multipart/form-data">
                  <button
                    onClick={handleImageUpload}
                    type="button"
                    className="absolute bottom-1 right-1 bg-[#00ADB5] hover:bg-[#00868d] text-white p-3 rounded-full shadow-lg transition-all hover:rotate-12 active:scale-90 border-2 border-white dark:border-gray-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 640 640" className="h-4 w-4">
                      <path d="M213.1 128.8L202.7 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L437.3 160L426.9 128.8C420.4 109.2 402.1 96 381.4 96L258.6 96C237.9 96 219.6 109.2 213.1 128.8zM320 256C373 256 416 299 416 352C416 405 373 448 320 448C267 448 224 405 224 352C224 299 267 256 320 256z" />
                    </svg>
                  </button>

                  <input type="file" id="file" ref={fileUploadRef} accept="*.png *.jpeg *.jpg" onChange={uploadImageDisplay} hidden />
                </form>
              </div>
            </div>

            <div className="mt-8 text-center">
              <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white tracking-tight">User Name</h1>
            </div>

            <Link to={`/profile/${id}/edit`} className="w-full mt-10">
              <button className="w-full bg-[#00ADB5] hover:bg-[#00868d] text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200 dark:shadow-none transition-all active:scale-[0.98]">
                Edit Profile
              </button>
            </Link>
            <Link to={`/profile/${id}/posts`} className="w-full mt-10">
              <button className="w-full bg-[#00ADB5] hover:bg-[#00868d] text-white py-3 rounded-xl font-bold shadow-lg shadow-[#00ADB5] dark:shadow-none transition-all active:scale-[0.98]">
                My Posts
              </button>
            </Link>
            <Link to={`/profile/${id}/posts`} className="w-full mt-10">
              <button className="w-full bg-[#C40C0C] hover:bg-[#840808] text-white py-3 rounded-xl font-bold shadow-lg shadow-[#C40C0C] dark:shadow-none transition-all active:scale-[0.98]">
                Log Out
              </button>
            </Link>
          </div>
  )
}

export default ProfileSidebar