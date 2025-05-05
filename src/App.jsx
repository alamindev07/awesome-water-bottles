
import { Suspense } from 'react'
import './App.css'
import Bottles from './Components/Bottles/Bottles'

const bottlesPromise = fetch("Bottels.json")
  .then(res => res.json());

function App() {
 

  return (
    <>
     
      <Suspense fallback={<h3>All bottles are Loading...</h3>}>
      <h1>Buy Awesome water bottle </h1>
        <Bottles bottlesPromise ={bottlesPromise}></Bottles>
      </Suspense>
      
    </>
  )
}

export default App
