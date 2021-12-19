import React from "react";
import Headroom from "react-headroom";
import { Container } from "semantic-ui-react";
import Footer from "../Footer";
import Header from "../Header";
import "semantic-ui-css/semantic.min.css";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle({
  body: {}
});

const Layout = ({ location, children }) => (
  <div id="rootAbc">
    <Headroom
      upTolerance={10}
      downTolerance={10}
      style={{ zIndex: "20", height: "6.5em" }}
    >
      <Header location={location} />
    </Headroom>
    <GlobalStyle />
    <Container text>{children}</Container>
    <Footer />
  </div>
);

export default Layout;
