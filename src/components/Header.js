import React from 'react'

function Header({title, closePopup}) {
    return (
        <div className='App-header'>
            <h2 onClick={closePopup} className='page-heading'>{title}</h2>
        </div>
    )
}

export default Header
