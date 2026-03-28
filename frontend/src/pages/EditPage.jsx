import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import ProfilePage from './ProfilePage';

const EditPage = () => {
    const { id } = useParams();
    console.log({ id });
    // get using apis - names, description, location...

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-[#222831] via-[#222831] to-[#222831] font-sans">
            <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden transition-all duration-300 hover:shadow-3xl animate-fade-in">

                {/* Header Section */}
                <div className="bg-gray-50 dark:bg-gray-800/50 p-8 border-b border-gray-100 dark:border-gray-800">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Edit Profile</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">Update your personal information and public bio.</p>
                </div>

                <div className="p-8 md:p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* Name Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#00ADB5] dark:text-[#00ADB5] uppercase tracking-wider">
                                Full Name
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent outline-none transition-all"
                                type="text"
                                defaultValue="Enter Name"
                                placeholder="Enter your name"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-blue-600 dark:text-[#00ADB5] uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent outline-none transition-all"
                                type="email"
                                defaultValue="Enter Email"
                                placeholder="name@example.com"
                            />
                        </div>

                        {/* Location Input */}
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-sm font-semibold text-blue-600 dark:text-[#00ADB5] uppercase tracking-wider">
                                Location
                            </label>
                            <input
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent outline-none transition-all"
                                type="text"
                                defaultValue="Enter Location"
                                placeholder="e.g. New York, USA"
                            />
                        </div>

                        {/* Description Textarea */}
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label className="text-sm font-semibold text-blue-600 dark:text-[#00ADB5] uppercase tracking-wider">
                                Short Description
                            </label>
                            <textarea
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-[#00ADB5] focus:border-transparent outline-none transition-all min-h-[120px] resize-none"
                                defaultValue="Enter Description"
                                placeholder="Tell us a little about yourself..."
                            />
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <div className="mt-10 flex justify-end gap-4">
                        <Link to={`/profile/${id}`}><button className="px-6 py-2.5 rounded-xl font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                            Cancel
                        </button></Link>
                        <button className="px-8 py-2.5 rounded-xl font-bold text-white bg-[#00ADB5] hover:bg-[#00868d] shadow-lg shadow-emerald-200 dark:shadow-none transition-all active:scale-95">
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPage