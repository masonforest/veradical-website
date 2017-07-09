import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Mason from './me.png';

const Container = styled.div`
  width: 960px;
  margin: auto;
`

const Profile = styled.div`
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-direction: row;

  h2 {
    border-bottom: 1px solid #000;
    padding-bottom: 8px;
    font-size: 28px;
  }

  hr {
    width: 4px;
    height: 5px;
    border: 0;
    border-top: 2px solid #ccc;
    color: #fff;
  }
  p {
    flex: 1 1 50%;
    font-size: 24px;
  }
  div {
    flex: 1 1 50%;
  }

  @media (max-width: 667px) {
    flex-direction: column;

    p {
      padding: 10px;
    }

    h2 {
      margin: 10px;
    }
  }
`

const ProfilePicture = styled.img`
  padding: 20px;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Profile>
            <ProfilePicture src={Mason} />
            <div>
              <h2>Hello, I&apos;m Mason!</h2>
              <p>I&apos;ve been building software professionally for over a twelve years. After five years at <a href="https://thoughtbot.com/" target="_blank">thoughtbot</a> I&apos;ve decided to go out of my own. If you&apos;re working on a project on the Web or the Blockchain I&apos;d love to <a target="_blank" href="mailto:mason@kissr.co">chat</a>!</p>
            </div>
          </Profile>
        </Container>
      </div>
    );
  }
}

export default App;
