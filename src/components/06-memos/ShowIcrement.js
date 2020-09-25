import React from 'react'

export const ShowIcrement = React.memo(({increment}) => {

    console.log('Estoy aqui de nuevo');
    
    return (
        <button 
            className="btn btn-primary"
            onClick={() =>{
                increment( 5 );
            }}
        >
            incrementar
        </button>
    )
})
