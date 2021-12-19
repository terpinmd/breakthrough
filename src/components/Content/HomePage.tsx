import { Link } from "gatsby";
import React from "react";
import { Card, Image, Container, Button } from "semantic-ui-react";
import styled from "styled-components";
import Img from "gatsby-image";

const HomeContainer = styled.div({
  background: "white",
  color: "black",
  font: "15px Arial, sans-serif",
  fontSize: "20px"
});

const Article = styled.article({
  fontWeight: 400,
  lineHeight: 1.8,
  color: "#222222"
});

const DetailDescription = styled.div({
  fontWeight: 300,
  lineHeight: 1,
  color: "#222222",
  font: "small-caption"
});

const MissionStatement = styled.p({
  color: "#bbbbbb",
  fontWeight: 600,
  padding: "10px"
});

const test = () => {
  return 5;
};

export default function HomePage() {
  return (
    <HomeContainer>
      <section>
        <Article>
          <Container style={{ paddingBottom: "25px" }}>
            <header>
              <h1 style={{ display: "inline-block" }}>What is breakthrough?</h1>
              {"  "}
              <span>Our mission is simple.</span>
            </header>
            <MissionStatement>
              Prepare students for the modern workplace as an I.T. professional
            </MissionStatement>
          </Container>
          <Card.Group itemsPerRow={1} stackable>
            <Card>
              <Card.Content className="center">
                <Card.Header>
                  <div className="ui center aligned container">
                    <p>confidence.</p>
                  </div>
                </Card.Header>
              </Card.Content>
            </Card>
          </Card.Group>
          <Card.Group itemsPerRow={3} stackable>
            <Card>
              <Image
                src="https://news.blr.com/app/uploads/sites/3/2018/09/TDA_010617-5.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Application Development</Card.Header>
                <Card.Meta></Card.Meta>
                <Card.Description>
                  <DetailDescription>
                    Using current technologies to create a real word application
                    in a group setting
                  </DetailDescription>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image
                src="https://news.blr.com/app/uploads/sites/3/2018/09/TDA_010617-5.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Professional Profile</Card.Header>
                <Card.Meta></Card.Meta>
                <Card.Description>
                  <DetailDescription>
                    Create an engaging resume and public profile
                  </DetailDescription>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Image
                src="https://news.blr.com/app/uploads/sites/3/2018/09/TDA_010617-5.jpg"
                wrapped
                ui={false}
              />
              <Card.Content>
                <Card.Header>Interviewing Experience</Card.Header>
                <Card.Meta>
                  <span className="date"></span>
                </Card.Meta>
                <Card.Description>
                  <DetailDescription>
                    Interviewing for entry level technical positions{" "}
                  </DetailDescription>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui center aligned container">
                  <Button as={Link} to="/details">
                    learn more
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Article>
      </section>
    </HomeContainer>
  );
}
