import React from 'react'

function Form() {
    function submitted(data) {
        console.log(data.get('password'))
    }

  return (
    <form action={submitted}>
        <label htmlFor='username'>Username :</label>
        <input id='username' type="text" name='username'/>

        <label htmlFor='password'>password :</label>
        <input id='password' type="password" name='password'/>

        <button>Sign in</button>
    </form>
  )
}

export default Form