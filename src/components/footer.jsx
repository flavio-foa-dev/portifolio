import React from 'react'
import { CiLinkedin, CiYoutube, CiFacebook, CiInstagram } from 'react-icons/ci'
import { VscGithubInverted } from 'react-icons/vsc'

export default function Footer() {
  return (
    <div className="flex justify-center w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">

      <div className="container flex items-center justify-between py-6 px-4 ">

        <p className="text-center font-bold text-white" >© Copyright 2022. All right reserved, FOA </p>

        <div id="contact" className="flex items-center gap-2">
          <a href="/" className="text-white  hover:text-red-600"><CiYoutube size="34px"/></a>
          <a href="/" className="text-white hover:text-sky-700"><CiFacebook size="32px"/></a>
          <a href="/" className="text-white hover:text-orange-600"><CiInstagram size="32px"/></a>
          <a href="https://www.linkedin.com/in/flavio-foa/" target="_blank" className="text-white hover:text-sky-700" rel="noreferrer"><CiLinkedin size="32px"/></a>
          <a href="https://github.com/flavio-foa-dev" target="_blank" className="text-white hover:text-gray-800" rel="noreferrer"><VscGithubInverted size="28px"/></a>
        </div>

      </div>
    </div>
  )






}
