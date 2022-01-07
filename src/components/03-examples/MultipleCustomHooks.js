import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { author, quote } = (!loading && data.length>0) && data[0];

    //console.log( counter );

    return (
        <div>
            <h2>BreakingBad Quotes</h2>
            <hr/>

            {
                loading
                ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote className='blockquote text-end'>
                            <p className='mb1'> { quote } </p>
                            <footer className='blockquote-footer'> { author } </footer>
                        </blockquote>
                    )
            }

            <button 
                className='btn btn-dark'
                onClick={ increment }
            >
                Siguiente quote
            </button>

        </div>
    )
}
