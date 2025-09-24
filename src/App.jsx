import React from 'react'
import LandingPageTemplate from './LandingPageTemplate.jsx'
import { travelAllowanceConfig } from './configs/travelAllowanceConfig.js'
import './App.css'

function App() {
  return <LandingPageTemplate config={travelAllowanceConfig} />
}

export default App

