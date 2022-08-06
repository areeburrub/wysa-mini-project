import React from 'react'
import styles from './login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {

  const [email, setEmail] = useState('admin@example.com')
  const [password, setPassword] = useState("secretPswd");

  const [showPassword, setShowPassword] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault()
    const res = fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:email,
        password:password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        setErrMsg(data.error)
      }
      else {
        console.log(data)
        setErrMsg("")
        router.push('/chat')
      }
    })
  }


  return (
    <form className={styles.loginContainer} onSubmit={handleSubmit}>
      <span className={styles.loginTitle}>Login to peace</span>
      <span className={styles.loginError}>{errMsg}</span>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}} />
        <input 
          type={showPassword?"text":"password"} 
          placeholder="Password" 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}} />
        <span className={styles.showPswd}>
          <label htmlFor='show'>Show password</label>
          <input type="checkbox" value={showPassword} onClick={(e)=>{setShowPassword(!showPassword)}} id='show'/>
        </span>
        <button type='submit'>Login</button>
      </form>
  )
}

export default Login