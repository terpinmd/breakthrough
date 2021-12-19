import React, { useContext } from "react";
import { Responsive } from "semantic-ui-react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import styled from "styled-components";
import CartContext from "../Context/CartContext";
import AuthContext from "../Context/AuthContext";

const HeaderContainer = styled.div({
  background: "rgba(255,255,255,.97)",
  boxShadow: "0 2px 2px -2px rgb(0 0 0 / 15%)",
  padding: "10px",
  transition: "top .2s ease-in-out"
});
const Header = ({ location }) => {
  const { cartCount } = useContext(CartContext);
  const { token, signOut } = useContext(AuthContext);
  console.log(token);
  return (
    <HeaderContainer>
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <MobileMenu
          location={location}
          token={token}
          cartCount={cartCount}
          signout={signOut}
        />
      </Responsive>
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <DesktopMenu
          location={location}
          token={token}
          cartCount={cartCount}
          signout={signOut}
        />
      </Responsive>
    </HeaderContainer>
  );
};

export default Header;
