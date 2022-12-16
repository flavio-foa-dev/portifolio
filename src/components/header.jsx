import React from 'react'

export default function Header() {
  return (
    <div className="w-full z-50 top-0 py-3 sm:py-5  absolute">
      <div className="container flex items-center justify-between">
        <div>
          <a href="/">
            <img src="" className="w-24 lg:w-48" alt=""/>
          </a>
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center">

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2">Perfil</span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2">Tools</span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2">Projects</span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2">Clients</span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2">Statistics</span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="https://flavio-foa-dev.github.io/site/" target="_blank" rel="noreferrer">Site</a></span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="#project">Contact</a></span>
            </li>
          </ul>
      </div>
      </div>
    </div>
  )
}
