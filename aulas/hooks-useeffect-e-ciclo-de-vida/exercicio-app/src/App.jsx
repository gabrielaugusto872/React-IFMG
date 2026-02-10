import { useState, useEffect, use } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null);

  const mudanca = (evento) => {
    setEmail(evento.target.value);
  }

  useEffect(() => {
    if(email === ""){
      setIsValid(null);
      return;
    }
    const timer = setTimeout(() => {
      const valido = email.includes("@") && email.includes(".com")
      setIsValid(valido);
      console.log("Validado:", valido);
    }, 500);

    return () => clearTimeout(timer);
  }, [email]);

  const envio = (evento) => {
    evento.preventDefault();
    console.log(email);
    setEmail("");
    setIsValid(null);
  }

  return (
    <>
      <div className="container">
        <form action="">
          <label htmlFor="email">Email </label>
          <input 
          type="text"
          id="email"
          name='email'
          value={email}
          onChange={mudanca}
          placeholder='Digite seu email'
          required />
          <button type='submit' onClick={envio}>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default App
