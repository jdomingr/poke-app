import React from 'react'

export const ErrorMessage = ( { error } ) => {
    return (
        <div className="container-error">
            { error }
        </div>
    )
}
