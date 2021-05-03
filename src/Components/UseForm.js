import React from 'react'

const UseForm = (props) => {


    return (
        <>
        <form onSubmit = {props.getUser} />
            <input style = {{margin: "20px", display: "block"}} type="text" name = "username"/>
        <button> Submit </button>
          
        <form/>
        </>
      
    )
}
export default UseForm 
