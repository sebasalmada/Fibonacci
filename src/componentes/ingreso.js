import React, { useState } from 'react'
import Resultados from './resultado'

export default function Ingreso () {
    const [longitud, setLongitud] = useState()

    function handleSubmit(e) {
        e.preventDefault()
        console.log(longitud)
    }

    function handleChange(e) {
        setLongitud(e.target.value)
    }

    
    return (
        <div className='ingreso'>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Longitud Fibonacci' onChange={handleChange}></input>
            </form>
            <Resultados long={longitud} />
        </div>
    )
}