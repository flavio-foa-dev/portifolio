import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import NavBar from '../components/navBar'

export default function Tools() {
  return (
    <>
      <Header/>
      <NavBar/>
      <div className="flex  py-20 " >
        <h2 className="text-center font-semibold uppercase sm:text-5xl lg:text-6xl">
          Here's what I'm good at
        </h2>

        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          These are the some of tools
        </h3>

        <div className="container flex gap-6 py-6 px-6">
            <img width="50px" disabled="disabled" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" />
            <img width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" />
            <img width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="React" />
            <img width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javaScript" />
            <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg " alt="mySQL"/>
            <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg " alt="MongoDB"/>
            <img width="50px" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg " alt="nodeJs"/>
            <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis"/>
            <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" alt="Docker"/>
            <img width="50px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="gitHub"/>

        </div>

      </div>
      <Footer/>
    </>
  )
}
