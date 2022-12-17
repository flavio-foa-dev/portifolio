import React from 'react'

export default function CardPrject() {
  return (
    <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3 bg-violet-50">

      <div className="group rounded px-8 py-12 shadow hover:bg-violet-500">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <img src="/assets/img/icon-development-white.svg" alt="development icon"/>
          </div>
          <div className="block group-hover:hidden">
            <img src="/assets/img/icon-development-black.svg" alt="development icon"/>
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow-600 lg:text-xl">
            WEB DEVELOPMENT
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="group rounded px-8 py-12 shadow hover:bg-violet-500">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <img src="/assets/img/icon-content-white.svg" alt="content marketing icon"/>
          </div>
          <div className="block group-hover:hidden">
            <img src="/assets/img/icon-content-black.svg" alt="content marketing icon"/>
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow-600 lg:text-xl">
            Technical Writing
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="group rounded px-8 py-12 shadow hover:bg-violet-600">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <img src="/assets/img/icon-mobile-white.svg" alt="Mobile Application icon"/>
          </div>
          <div className="block group-hover:hidden">
            <img src="/assets/img/icon-mobile-black.svg" alt="Mobile Application icon"/>
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow-600 lg:text-xl">
            Mobile Development
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="group rounded px-8 py-12 shadow hover:bg-violet-600">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <img src="/assets/img/icon-email-white.svg" alt="Email Marketing icon"/>
          </div>
          <div className="block group-hover:hidden">
            <img src="/assets/img/icon-email-black.svg" alt="Email Marketing icon"/>
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow-600 lg:text-xl">
            Email Development
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="group rounded px-8 py-12 shadow  hover:bg-violet-600">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <img src="/assets/img/icon-design-white.svg" alt="Theme Design icon"/>
          </div>
          <div className="block group-hover:hidden">
            <img src="/assets/img/icon-design-black.svg" alt="Theme Design icon"/>
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow-600 lg:text-xl">
            Graphic Design
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>

      <div className="group rounded px-8 py-12 shadow  hover:bg-violet-600">
        <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
          <div className="hidden group-hover:block">
            <img src="/assets/img/icon-graphics-white.svg" alt="Graphic Design icon"/>
          </div>
          <div className="block group-hover:hidden">
            <img src="/assets/img/icon-graphics-black.svg" alt="Graphic Design icon"/>
          </div>
        </div>
        <div className="text-center">
          <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow-600 lg:text-xl">
            Web Design
          </h3>
          <p className="text-grey pt-4 text-sm group-hover:text-white md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  )
}





