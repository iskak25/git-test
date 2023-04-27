import React from 'react'
import activRootStyle from './ActivRoot.module.scss'
import Content from '../Content/Content'
import Header from '../Header/Header'
// import Main from '../Main/Main'
import Form from '../Form/Form'
import WeOffer from '../WeOffer/WeOffer'
import Main from '../Main/Main'
import { useEffect } from 'react'

const ActivRoot = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user) {
    // window.location.reload()
  }

  // console.log(user)
  return (
    <>
      <div className={activRootStyle.container}>
        <Header />
        <Main />
        <Content />
        <Form />
        <WeOffer />
      </div>
    </>
  )
}

export default ActivRoot
