import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ImageUpload from '../components/ImageUpload';
import DefaultImage from "../../assets/Default_pfp.jpg"
import { useRef, useState } from 'react';

const ProfilePage = () => {
  const { id } = useParams();
  console.log({ id });

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



  const [name, setName] = useState("User Name")
  const [location, setLocation] = useState("User location")
  const [email, setEmail] = useState("User email")
  const [description, setDescription] = useState("User description")


  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-green-400 via-emerald-500 to-teal-500 font-sans">
      {/* Main Card */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden transition-all duration-500 hover:shadow-emerald-500/20 animate-fade-in border border-white/20">

        <div className="flex flex-col md:flex-row">

          {/* Sidebar Section */}
          <div className="md:w-1/3 bg-gray-50/50 dark:bg-gray-800/50 p-10 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 dark:border-gray-800">

            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-emerald-400 to-teal-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

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
                    className="absolute bottom-1 right-1 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-all hover:rotate-12 active:scale-90 border-2 border-white dark:border-gray-800"
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
              <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 dark:shadow-none transition-all active:scale-[0.98]">
                Edit Profile
              </button>
            </Link>
          </div>

          {/* Main Content Section */}
          <div className="md:w-2/3 p-8 md:p-12 space-y-10">

            {/* Contact Info */}
            <section>
              <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-6">Contact Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "email", text: "example@gmail.com", label: "Email" },
                  { icon: "location", text: "Ropar, India", label: "Location" }
                ].map((item, index) => (
                  <div key={index} className="group flex items-start gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-transparent hover:border-emerald-200 dark:hover:border-emerald-900 transition-all shadow-sm">
                    <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2.5 rounded-lg text-emerald-600 dark:text-emerald-400">
                      {item.icon === "email" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-700 dark:text-gray-200 font-medium">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Description Section */}
            <section className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-emerald-500/20 rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">Description</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic font-serif">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsam quis sed neque similique incidunt accusamus aliquid quas." Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eos nisi eaque nesciunt fugit deserunt voluptatem amet nemo libero sequi consequuntur ipsa totam incidunt, facere dolorem minima voluptas tempore repellendus ea eveniet ad quod possimus non! Assumenda sequi eum consequuntur perferendis, eius dicta incidunt ut sapiente. Id ad maxime iusto?
              </p>
            </section>

            {/* Change Password Section */}
            <section className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <button className="flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 transition-colors group">
                <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/40 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                Change Password
              </button>
            </section>
          </div>

        </div>
      </div>
    </div>

  )
}

export default ProfilePage