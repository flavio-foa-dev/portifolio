import React from 'react'

export default function Footer() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <div className="container flex flex-col  justify-between py-6 sm:flex-row">
        <p className="text-center font-bold text-white md:text-left">© Copyright 2022. All right reserved, FOA.</p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <a href="/">
          <i class="bx bxl-facebook-square text-2xl text-white hover:text-yellow">

          </i>
          </a>
        </div>

      </div>
    </div>
  )
}
