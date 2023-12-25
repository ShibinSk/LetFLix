import React from 'react'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div>
      Admin Panel

      <div className="main">
      <p className="sign" align="center">Admin Panel</p>
      <form className="form1">
        <input className="un" type="text" align="center" placeholder="Username" />
        <input className="pass" type="password" align="center" placeholder="Password" />
        <Link to={'/dashBoard'}>

        <a className="submit" align="center">Login</a>
        </Link>
        <p className="forgot" align="center"><a href="#">Forgot Password?</a></p>
      </form>
    </div>
    </div>
  )
}

export default AdminLogin
