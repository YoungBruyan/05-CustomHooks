import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('Me voliv a mostrar');
    
    return (
        <small> { value } </small>
    )
})
