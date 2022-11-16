import React from 'react';
import './styles.scss'


const LoginPage: React.FC = () => {
  return (
      <main className='main-div'>
        <div className='title-div'>
          <h1>Faça seu login aqui</h1>
        <form action="">
          <label htmlFor="email">seu email aqui</label>
          <input type="email" name='email'/>
        </form>
        </div>
      </main>

  )
}

export default LoginPage;