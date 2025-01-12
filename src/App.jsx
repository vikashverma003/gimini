import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import ItemList from './practice/List'
import AsyncDataFetcher from './practice/AsyncDataFetcher'
import UserForm from './practice/UserForm'
import 'bootstrap/dist/css/bootstrap.min.css' // For the bootstrap
import FirstHook from './practice/hooks/FirstHook'
import SecondHook from './practice/hooks/SecondHook'
import RefHooky from './practice/hooks/RefHooky'

const App = () => {


  return (
    <>
      {/* <Sidebar/> */}
      {/* <Main/>   */}
      {/* <ItemList></ItemList>
      <AsyncDataFetcher></AsyncDataFetcher>
      <UserForm></UserForm> */}
        {/* <FirstHook />
        <SecondHook /> */}
        <RefHooky />
    </>
  )
}

export default App
