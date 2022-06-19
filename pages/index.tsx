import Head from "next/head"
import {
  IoMdMail,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io"
import Image from "next/image"
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
        <title>Julian Betancourt | Home</title>
      </Head>
      <Card>
        <BioCard>
          <BioBorders type="top-left" />
          <BioBorders type="top-right" />
          <PhotoContainer>
            <Image
              className="photo"
              src="/img.jpeg"
              layout="responsive"
              objectFit="cover"
              width="100%"
              height="100%"
              onDragStart={() => false}
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
              I'm an Europe-based <span></span>Software Engineer with more
              than 5 years of professional experience specializing in React,
              TypeScript and Node.js. I currently work for{" "}
              <a href="https://twilio.com" target="_blank">
                Twilio
              </a>{" "}
              as a Senior Software Engineer.
            </BioDescription>
            <SocialMedia>
              <a
                href="mailto:julianbetancourt10@gmail.com"
                aria-label="Email me"
              >
                <IoMdMail />
              </a>
              <a
                href="https://tinyurl.com/ynya4yhs"
                aria-label="Visit my LinkedIn"
              >
                <IoLogoLinkedin />
              </a>
              <a
                href="https://tinyurl.com/ynya4yhs"
                aria-label="Visit my Twitter"
              >
                <IoLogoTwitter />
              </a>
              <a
                href="https://tinyurl.com/ne8vtbe"
                aria-label="Visit my Github"
              >
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
