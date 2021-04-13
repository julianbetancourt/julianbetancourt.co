import Head from "next/head"
import styled, { css } from "styled-components"
import {
  IoMdMail,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io"
import Link from "next/link"
import Image, { ImageProps } from "next/image"
import { getAllPosts } from "../lib/api"
import PostPreview from "../components/PostPreview"
import markdownToHtml from "../lib/markdownToHtml"
import {
  Container,
  Bio,
  BioBorders,
  BioCard,
  BioDescription,
  Card,
  Name,
  PhotoContainer,
  Posts,
  SemiTitle,
  SocialMedia,
} from "../styles"

export default function Home({ allPosts }) {
  return (
    <Container>
      <Head>
        <link href="https://css.gg/mail.css" rel="stylesheet" />
        <title>Julian Betancourt | Home</title>
      </Head>
      <Card>
        <BioCard>
          <BioBorders type="top-left" />
          <BioBorders type="top-right" />
          <PhotoContainer>
            <Image
              className="photo"
              src="/img.png"
              layout="responsive"
              objectFit="cover"
              width="100%"
              height="100%"
            />
          </PhotoContainer>
          <Bio>
            <Name>
              {Array(4)
                .fill(null)
                .map((_, index) => (
                  <h1 key={index}>
                    Julian <br />
                    Betancourt
                  </h1>
                ))}
            </Name>
            <SemiTitle>Fullstack JavaScript Developer</SemiTitle>
            <BioDescription>
              I'm an Amsterdam-based <span></span>Software Engineer with more
              than 4 years of professional experience specializing in React,
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
            </BioDescription>
            <SocialMedia>
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
            </SocialMedia>
          </Bio>
        </BioCard>
        <Posts>
          {allPosts.map((post) => {
            return <PostPreview key={post.slug} post={post} />
          })}
        </Posts>
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
