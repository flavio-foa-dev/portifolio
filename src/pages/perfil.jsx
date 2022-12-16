import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Perfil() {
  return (
    <>
      <Header/>
      <div className="flex items-center justify-evenly  bg-gradient-to-r from-violet-500 to-fuchsia-500  px-6 py-6">
        <img src="https://avatars.githubusercontent.com/u/78602566?v=4" alt="avatar" className="rounded-full w-48"/>
        <div>
          <h1>HI! I Am </h1>
          <p>Flavio Andrade</p>
        </div>
        <div>
          <h1>Contato</h1>
          <p>Flavio Andrade</p>
        </div>
      </div>


      <Footer/>
    </>
  )
}
