import Head from "next/head"
import styled from "styled-components"
import Link from "next/link"
import { getAllPosts } from "../lib/api"

const Container = styled.div`
  height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`

const Card = styled.div`
  padding: 80px;
  width: 920px;
  background: ${(p) => p.theme.body};
  transition: all 0.3s ease-in-out;
  margin-bottom: auto;
  margin-top: 50px;
  display: flex;
  border-radius: 15px;
  position: relative;

  @media (max-width: 1127px) {
    flex-direction: column-reverse;
    padding: 0px;
    width: 600px;
  }

  @media (max-width: 485px) {
    .border {
      display: none;
    }
  }

  .border {
    &::before,
    &::after {
      background: ${(p) => p.theme.border};
    }
  }

  .top-left {
    &::before {
      content: "";
      top: 0px;
      left: 0px;
      display: block;
      position: absolute;
      height: 50px;
      width: 5px;
    }

    &::after {
      content: "";
      top: 0px;
      left: 0px;
      display: block;
      position: absolute;
      height: 5px;
      width: 50px;
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
    }

    &::after {
      content: "";
      bottom: 0px;
      right: 0px;
      display: block;
      position: absolute;
      height: 5px;
      width: 50px;
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
    }

    &::after {
      content: "";
      top: 0px;
      right: 0px;
      display: block;
      position: absolute;
      height: 5px;
      width: 50px;
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
    }

    &::after {
      content: "";
      bottom: 0px;
      left: 0px;
      display: block;
      position: absolute;
      height: 5px;
      width: 50px;
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
  align-self: center;

  @media (max-width: 1127px) {
    display: none;
    margin-right: 0;
    margin: 0 auto;
    width: 200px;
    height: 200px;
  }
`

const Title = styled.div`
  display: flex;
  max-width: 390px;
  flex-direction: column;
  margin-right: 80px;
  margin-top: auto;
  width: auto;
  p {
    margin-top: 20px;
    font-size: 0.9rem;
    line-height: 1.2rem;
    color: ${(p) => p.theme.text1};
  }
  @media (max-width: 1127px) {
    margin-right: 0;
    margin: 0 auto;
    h1,
    h3 {
      text-align: center;
    }
  }

  @media (max-width: 485px) {
    margin-bottom: 300px;
    margin-left: 20px;
    margin-right: 20px;
    /* text-align: center; */
    .name {
      /* display: flex; */
      margin: 0 auto;
    }
    h1 {
      top: 0px;
      left: 0px;
      color: ${(p) => p.theme.title.color1};
      display: block;
      font-size: 2rem !important;
      /* position: relative; */
    }

    h1:nth-child(2) {
      top: 0;
      left: 3px !important;
      color: ${(p) => p.theme.title.color2};
      position: absolute;
    }

    h1:nth-child(3) {
      top: 3px !important;
      left: 0px;
      color: ${(p) => p.theme.title.color3};
      position: absolute;
    }

    h1:nth-child(4) {
      top: -3px !important;
      left: 0px;
      color: ${(p) => p.theme.title.color4};
      position: absolute;
    }
  }

  .name {
    position: relative;
    h1 {
      top: 0px;
      left: 0px;
      color: ${(p) => p.theme.title.color1};
      display: block;
      font-size: 4rem;
      position: relative;
    }

    h1:nth-child(2) {
      top: 0;
      left: 5px;
      color: ${(p) => p.theme.title.color2};
      position: absolute;
    }

    h1:nth-child(3) {
      top: 5px;
      left: 0px;
      color: ${(p) => p.theme.title.color3};
      position: absolute;
    }

    h1:nth-child(4) {
      top: -5px;
      left: 0px;
      color: ${(p) => p.theme.title.color4};
      position: absolute;
    }
  }

  h3 {
    color: ${(p) => p.theme.text1};
    margin: 0;
  }
`

const Menu = styled.div`
  .menu-links {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    a {
      margin-bottom: 10px;
      color: inherit;
    }

    @media (max-width: 485px) {
      height: auto;
      margin-bottom: 40px;
    }
  }
`

export default function Home() {
  return (
    <Container>
      <Card>
        <div className="border top-left"></div>
        <div className="border top-right"></div>
        <div className="border bottom-left"></div>
        <div className="border bottom-right"></div>

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
          <p>
            I'm an Amsterdam-based <span></span>Software Engineer specializing
            in React, TypeScript and Node. I currently work for{" "}
            <a href="https://messagebird.com" target="_blank">
              Messagebird
            </a>{" "}
            as a Frontend Engineer. In the past I also worked for the
            Dubai-based startup{" "}
            <a href="https://quiqup.com" target="_blank">
              Quiqup
            </a>{" "}
            writing all things JS.
          </p>
        </Title>
        <Menu>
          <div className="menu-links">
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/blog">Contact</Link>
          </div>

          {/* <span>4</span> */}
        </Menu>
      </Card>
    </Container>
  )
}
