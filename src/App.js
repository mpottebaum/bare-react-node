import React, { useState } from 'react'
import './stylesheets/App.css'

const App = () => {

    const [ count, setCount ] = useState(0)


    return <div className='container'>
        <h1 className='title'>Counter</h1>
        <div className='counter'>
            <button onClick={() => setCount(count - 1)} className='btn'>-</button>
            <h1 className='count'>{count}</h1>
            <button onClick={() => setCount(count + 1)} className='btn'>+</button>
        </div>
    </div>
}

export default App