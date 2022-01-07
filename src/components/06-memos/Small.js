import React from 'react'

export const Small = React.memo(({ value }) => {

    console.log('Mostrado :D');

    return (
        <small> { value } </small>
    )
})
