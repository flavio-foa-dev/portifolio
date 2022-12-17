import React from 'react'

export default function NavBar() {
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
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="/">Perfil</a></span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="#project">Project</a></span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="#contact">Contact</a></span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="#tools">Tools</a></span>
            </li>

            <li className="group pl-6">
              <span className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white hover:border-b-2"><a href="https://flavio-foa-dev.github.io/site/" target="_blank" rel="noreferrer">Site</a></span>
            </li>

          </ul>
      </div>
      </div>
    </div>
  )
}
