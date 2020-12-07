import Head from "next/head"
import styled from "styled-components"
import {
  IoMdMail,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io"
import Link from "next/link"
import { getAllPosts } from "../lib/api"
import PostPreview from "../components/PostPreview"
import markdownToHtml from "../lib/markdownToHtml"

const Container = styled.div`
  height: 100vh;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`

const Card = styled.div`
  width: 1096px;
  margin-bottom: auto;
  margin-top: 50px;
  & > .bio {
    padding: 80px;
    display: flex;
    border-radius: 15px;
    position: relative;
  }

  & > .posts {
    padding: 0 80px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    & > div {
      margin-bottom: 20px;
      /* margin-right: 20px; */
    }
  }

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
  h1 {
    margin-top: 0;
  }
  p {
    margin-top: 20px;
    font-size: 1rem;
    line-height: 1.6;
    color: ${(p) => p.theme.text1};
  }
  @media (max-width: 1127px) {
    margin-right: 0;
    margin: 0 auto;
    h1,
    h2 {
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
      /* color: ${(p) => p.theme.title.color1}; */
      display: block;
      font-size: 2rem !important;
      /* position: relative; */
    }

    h1:nth-child(2) {
      top: 0;
      left: 3px !important;
      /* color: ${(p) => p.theme.title.color2}; */
      position: absolute;
    }

    h1:nth-child(3) {
      top: 3px !important;
      left: 0px;
      /* color: ${(p) => p.theme.title.color3}; */
      position: absolute;
    }

    h1:nth-child(4) {
      top: -3px !important;
      left: 0px;
      /* color: ${(p) => p.theme.title.color4}; */
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

  h2 {
    color: ${(p) => p.theme.text1};
    margin: 0;
  }
`

const Menu = styled.div`
  & > a {
    color: ${(p) => p.theme.text1};
    margin-right: 10px;
  }
`

export default function Home({ allPosts }) {
  ;({ allPosts })

  return (
    <Container>
      <Head>
        <link href="https://css.gg/mail.css" rel="stylesheet" />
      </Head>
      <Card>
        <div className="bio">
          <div className="border top-left"></div>
          <div className="border top-right"></div>
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
            <h2>Fullstack JavaScript Developer</h2>
            <p>
              I'm an Amsterdam-based <span></span>Software Engineer with more
              than 4 years of pressional experience specializing in React,
              TypeScript and Node. I currently work for{" "}
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
            <Menu>
              <a href="mailto:julianbetancourt10@gmail.com">
                <IoMdMail />
              </a>
              <a href="https://www.linkedin.com/in/julian-betancourt/">
                <IoLogoLinkedin />
              </a>
              <a href="https://twitter.com/juliian41">
                <IoLogoTwitter />
              </a>
              <a href="https://github.com/julianbetancourt/">
                <IoLogoGithub />
              </a>
              {/* <Link href="/blog">Contact</Link> */}
            </Menu>
          </Title>
        </div>
        <div className="posts">
          {allPosts.map((post) => {
            return <PostPreview key={post.slug} post={post} />
          })}
        </div>
      </Card>
    </Container>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "description",
    "categories",
    "slug",
  ])

  let parsedPosts = []
  for (const post of allPosts) {
    const description = await markdownToHtml(post.description || "")

    const newPost = { ...post, description }
    parsedPosts.push(newPost)
  }

  return {
    props: { allPosts: parsedPosts },
  }
}
