import React, { useEffect } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import CustomButton from "../../components/CustomButton/CustomButton.jsx";

function Navigation() {
  const navigate = useNavigate("");

  return (
    <div className={styles.nav}>
   
      <div className={styles.links}>
        <div className={styles.navLink}>
          <NavLink to="/">Today</NavLink>
        </div>
        
        <div className={styles.navLink}>
          <NavLink to="/fivedays">5 DAYS</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
