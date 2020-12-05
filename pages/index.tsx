import Head from "next/head"
import styled from "styled-components"

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #252829;
  font-family: "Space Mono", monospace;
`

const Card = styled.div`
  padding: 80px;
  background: #252829;
  display: flex;
  border-radius: 15px;
  position: relative;

  .top-left {
    &::before {
      content: "";
      top: 0px;
      left: 0px;
      display: block;
      position: absolute;
      height: 50px;
      width: 5px;
      background: white;
    }

    &::after {
      content: "";
      top: 0px;
      left: 0px;
      display: block;
      position: absolute;
      height: 5px;
      width: 50px;
      background: white;
    }
  }

  .bottom-right {
    &::before {
      content: "";
      bottom: 0px;
      right: 0px;
      display: block;
      position: absolute;
      height: 50px;
      width: 5px;
      background: white;
    }

    &::after {
      content: "";
      bottom: 0px;
      right: 0px;
      display: block;
      position: absolute;
      height: 5px;
      width: 50px;
      background: white;
    }
  }

  .top-right {
    &::before {
      content: "";
      top: 0px;
      right: 0px;
      display: block;
      position: absolute;
      height: 50px;
      width: 5px;
      background: white;
    }

    &::after {
      content: "";
      top: 0px;
      right: 0px;
      display: block;
      position: absolute;
      height: 5px;
      width: 50px;
      background: white;
    }
  }

  .bottom-left {
    &::before {
      content: "";
      bottom: 0px;
      left: 0px;
      display: block;
      position: absolute;
      height: 50px;
      width: 5px;
      background: white;
    }

    &::after {
      content: "";
      bottom: 0px;
      left: 0px;
      display: block;
      position: absolute;
      height: 5px;
      width: 50px;
      background: white;
    }
  }
`

const Photo = styled.div`
  width: 320px;
  height: 320px;
  border-radius: 10px;
  margin-right: 80px;
  background: url("/img.jpg") no-repeat;
  background-position: center;
  background-size: 120%;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  margin-top: auto;
  width: auto;
  font-family: "Space Mono", monospace;
  .name {
    position: relative;
    h1 {
      top: 0px;
      left: 0px;
      color: #c8ac48;
      display: block;
      font-size: 4rem;
      position: relative;
    }

    h1:nth-child(2) {
      top: 0;
      left: 5px;
      color: #df6b3c;
      position: absolute;
    }

    h1:nth-child(3) {
      top: 5px;
      left: 0px;
      color: #5399d7;
      position: absolute;
    }

    h1:nth-child(4) {
      top: -5px;
      left: 0px;
      color: white;
      position: absolute;
    }
  }

  h3 {
    color: #81919c;
    margin: 0;
  }
`
const Menu = styled.div`
  color: #81919c;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;
  span {
    margin-bottom: 10px;
  }
`

export default function Home() {
  return (
    <Container>
      <Card>
        <div className="top-left"></div>
        <div className="top-right"></div>
        <div className="bottom-left"></div>
        <div className="bottom-right"></div>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@700&family=Space+Mono&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Photo></Photo>
        <Title>
          <div className="name">
            <h1>
              Julian <br />
              Betancourt
            </h1>
            <h1>
              Julian <br />
              Betancourt
            </h1>
            <h1>
              Julian <br />
              Betancourt
            </h1>
            <h1>
              Julian <br />
              Betancourt
            </h1>
          </div>
          <h3>Fullstack JavaScript Developer</h3>
        </Title>
        <Menu>
          <span>Home</span>
          <span>About</span>
          <span>Blog</span>
          {/* <span>4</span> */}
        </Menu>
      </Card>
    </Container>
  )
}
