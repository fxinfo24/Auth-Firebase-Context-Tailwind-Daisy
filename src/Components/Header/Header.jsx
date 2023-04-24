import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/AuthProviders";

const Header = () => {
  const {user, logOutUser} = useContext(UserContext)

  const handleLogout = () => {
    logOutUser()
    .then(() => {})
    .catch(error => console.error(error))
  };
  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content">
        <a className="btn btn-ghost normal-case text-xl">Auth Master</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Home
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/orders">
          Orders
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">
          Register
        </Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">
          Login
        </Link>
        {
          user ? <>
          <span>{user.email}</span>
          <button onClick={handleLogout} className="btn btn-xs">Log Out</button> 
          </>
          :
          <Link to = '/login'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Header;
