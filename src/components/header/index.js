import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { headreInfo } from "../../constatnts";

const Header = ({page}) => {

  const {pathname}=useLocation();
  const navigate=useNavigate();
  const [currentPage,setCurrentPage]=useState('dashboard');
 
  const onLogOut=()=>{
    
    localStorage.removeItem('login');
    navigate("/login");
  }
  return (
    <div className="header">
      <div className="product-admin">PRODUCT ADMIN</div>
      {headreInfo.map((i) => {
        return (
          <div className={`${"icon-wrapper"} ${page.toLowerCase()===i.name.toLowerCase()&&"active"}`}>
            <Link to={`/${i.name.toLowerCase()}`} className="link">
              <div className="icons">{i.icon}</div>
              <div className="icons-name">{i.name}</div>
            </Link>
          </div>
        );
      })}
      {pathname!="/login" && <div onClick={onLogOut} className="logout">Logout</div>}
    </div>
  );
};
export default Header;
