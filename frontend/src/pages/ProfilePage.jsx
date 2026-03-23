import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ImageUpload from '../components/ImageUpload';
import DefaultImage from "../../assets/Default_pfp.jpg"
import { useRef, useState } from 'react';
import ProfileSidebar from '../components/ProfileSidebar';

const ProfilePage = () => {
  const [name, setName] = useState("User Name")
  const [location, setLocation] = useState("User location")
  const [email, setEmail] = useState("User email")
  const [description, setDescription] = useState("User description")
  

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-gradient-to-br from-[#222831] via-[#222831] to-[#222831] font-sans">
      {/* Main Card */}
      <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-5xl w-full overflow-hidden transition-all duration-500 hover:shadow-[#00ADB5]/40 animate-fade-in border border-white/20">

        <div className="flex flex-col md:flex-row">

          {/* Sidebar Section */}
          <ProfileSidebar />

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
                  <div key={index} className="group flex items-start gap-4 bg-gray-50 dark:bg-gray-800/50 p-4 rounded-2xl border border-transparent hover:border-[#00ADB5] dark:hover:border-blue-900 transition-all shadow-sm">
                    <div className="bg-[#00ADB5] dark:bg-[#00ADB5]/20 p-2.5 rounded-lg text-blue-600 dark:text-blue-400">
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
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#00ADB5] rounded-full"></div>
              <h2 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em] mb-4">Description</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg italic font-serif">
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ipsam quis sed neque similique incidunt accusamus aliquid quas." Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo eos nisi eaque nesciunt fugit deserunt voluptatem amet nemo libero sequi consequuntur ipsa totam incidunt, facere dolorem minima voluptas tempore repellendus ea eveniet ad quod possimus non! Assumenda sequi eum consequuntur perferendis, eius dicta incidunt ut sapiente. Id ad maxime iusto?
              </p>
            </section>

            {/* Change Password Section */}
            <section className="pt-6 border-t border-gray-100 dark:border-gray-800">
              <button className="flex items-center gap-2 text-sm font-bold text-[#00ADB5] dark:text-[#00ADB5] hover:text-[#00ADB5] transition-colors group">
                <div className="p-2 bg-emerald-50 dark:bg-blue-900/20 rounded-lg group-hover:bg-emerald-100 dark:group-hover:bg-blue-900/40 transition-colors">
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