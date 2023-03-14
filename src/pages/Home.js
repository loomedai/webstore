import React from 'react'
import { Counter } from '../features/counter/Counter';
import Drinks from '../reducers/lemonades'

function Home() {
  return (
    <div>

          
        <Counter />
        <Drinks />


    </div>
  )
}

export default Home