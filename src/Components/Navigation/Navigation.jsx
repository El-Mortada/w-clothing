import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../Assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { logOutUser } from "../../Utilities/Firebase/Firebase";
import CartIcon from "../CartIcon/CartIcon";
import CartDropDown from "../CartDropDown/CartDropDown";
import { CartContext } from "../../Context/CartContextProvider";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

export default function Navigation() {
  const { currentUser } = useContext(UserContext);
  const { isClicked } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer>
          <Link className="nav-link" to="/">
            <CrwnLogo className="logo" />
          </Link>
        </LogoContainer>
        <NavLinks>
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink onClick={logOutUser} className="nav-link" to="/auth">
              Log Out
            </NavLink>
          ) : (
            <NavLink className="nav-link" to="/auth">
              Sign In
            </NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isClicked && <CartDropDown />}
      </NavigationContainer>
    </>
  );
}
