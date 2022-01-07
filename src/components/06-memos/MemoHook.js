import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment} = useCounter( 1000 );
    const [show, setShow] = useState(true);

    const procesoPesado = ( iteraciones ) => {
        for( let i = 0; i < iteraciones, i++;){
            console.log('Ahi vamos...');
        }

        return `${ iteraciones } iteraciones realizadas`;
    }

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{ counter }</small></h3>
            <hr/>

            <p> { procesoPesado( counter ) } </p>

            <button
                className='btn btn-dark'
                onClick={ increment }
            >
                +1
            </button>

            <button
                className='btn btn-outline-dark ms-3'
                onClick={ () => {
                    setShow( !show );
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
