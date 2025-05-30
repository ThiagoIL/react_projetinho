import React from 'react'

const Condicional = () => {

    const enviarMail = (e) =>{
            e.preventDefault()
            console.log('testando ')

    }

  return (

    

    <div>
        <h2>Cadastre seu email:</h2>

        <form >
            <input type="email" placeholder='digite seu email' name="" id="" />
            <button onClick={enviarMail}>Send</button>

        </form>
    </div>
  )
}

export default Condicional