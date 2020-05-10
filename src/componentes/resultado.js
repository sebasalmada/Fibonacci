import React, { useState, useEffect } from 'react'


export default function Resultados(props) {
    const [resultado, setResultado] = useState([])

    
    useEffect (() => {
        let a = 0;
        let b = 1;
        let calculo = [];
        for(let i = 1; i <= props.long; i ++) {
            let suma = a + b
            calculo.push(suma)
            a = b
            b = suma
        }
        setResultado(calculo)    
    }, [props.long])

    return (
        <div className='resultados'>
            {
                resultado.map(single => <p key={single}>{single}</p>)
            }
        </div>
    )
}