import React from 'react'

const Widget = ({ title, description }) => {
  return (
    <>
      <div
        className="min-w-80 w-96 overflow-hidden bg-white border border-gray-200 rounded-xl shadow-md transform transition-all duration-500 hover:shadow-lg hover:scale-105 relative group"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white opacity-0 transition-opacity duration-500 group-hover:opacity-30 blur-md"
        ></div>
        <div className="p-6 relative z-10">
          <p className="text-xl font-semibold text-gray-800">{title}</p>
          <p className="mt-2 text-wrap text-gray-600">{description}
          </p>
        </div>
      </div>

    </>
  )
}

export default Widget
