import React, { useState } from 'react'

function Search(props) {
    const [name,setName] = useState('')

    const onSubmitFunction = (e) =>{
        e.preventDefault()
        props.search(name)    //lifting state up
        resetInputField()
    }

    const resetInputField = () =>{
        setName('')
    }

    return (
        <form className='search'>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            <button className='btn' onClick={onSubmitFunction}>Search</button>
        </form>
    )
}

export default Search
