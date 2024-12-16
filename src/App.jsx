import React, { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import ItemList from './practice/List'
import AsyncDataFetcher from './practice/AsyncDataFetcher'
import UserForm from './practice/UserForm'

const App = () => {


  return (
    <>
      {/* <Sidebar/> */}
      {/* <Main/>   */}
      <ItemList></ItemList>
      <AsyncDataFetcher></AsyncDataFetcher>
      <UserForm></UserForm>
    </>
  )
}

export default App
