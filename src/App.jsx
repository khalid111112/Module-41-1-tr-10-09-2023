import { useEffect, useState } from 'react'

import './App.css'
import Watch from './components/Sunglass/Watch/Watch'

function App() {
  
    const [watches, setWatches] = useState([ ]);

    useEffect( () =>{
      fetch('watches.json')
      .then(res => res.json())
      .then(data => setWatches(data));
    }, [])
  
  // const  watches = [
  //   {id:1, name: 'Apple watch', price: 200},
  //   {id:2, name: 'Samsu watch', price: 200},
  //   {id:3, name: 'Mi watch', price: 200}
  // ]

//   const watches = [
//     {
//       "id": 1,
//       "name": "Smartwatch Model A",
//       "price": 199.99
//     },
//     {
//       "id": 2,
//       "name": "Smartwatch Model B",
//       "price": 149.99
//     },
//     {
//       "id": 3,
//       "name": "Smartwatch Model C",
//       "price": 179.95
//     },
//     {
//       "id": 4,
//       "name": "Smartwatch Model D",
//       "price": 249.99
//     },
//     {
//       "id": 5,
//       "name": "Smartwatch Model E",
//       "price": 159.00
//     }
//   ]
  

  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
