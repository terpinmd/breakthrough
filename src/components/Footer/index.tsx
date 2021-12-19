import React from "react";
import { Link } from "gatsby";
import { Segment, Container, Grid, List, Header } from "semantic-ui-react";

const emailLink = (
  <a href="mailto:john@doe.com" alt="email link">
    Email
  </a>
);

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: "1em 0em 1em 0em",
      marginTop: "4em",
      borderTop: "1px solid #f2f2f2",
      backgroundColor: "#f3f3f3",
      color: "#363e46"
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={6}>
            <Header as="h4" content="About" />
            <List>
              <List.Item as={Link} to="/terms/">
                Terms
              </List.Item>
              <List.Item as={Link} to="/faq/">
                faq
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={10}>
            <Header as="h4">Contact Us</Header>
            <List horizontal style={{ display: "flex" }}>
              <List.Item
                icon="mail"
                style={{ display: "flex" }}
                content={emailLink}
              />
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Footer;
