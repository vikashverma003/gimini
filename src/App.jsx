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
import CounterControls from './practice/hooks/contexts/CounterControls'
import CounterDisplay from './practice/hooks/contexts/CounterDisplay'
import {CounterProvider} from './practice/hooks/contexts/CounterContext'

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
        {/* <RefHooky /> */}
        
        <CounterProvider>

        <CounterControls />
        <CounterDisplay />
        
        </CounterProvider>

    </>
  )
}

export default App
