import Head from "next/head"
import React from "react"
import { useRouter } from "next/router"
import { IoLogoTwitter } from "react-icons/io"
import styled from "styled-components"
import Nav from "../../components/Nav"
import { getAllPosts, getPostBySlug } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"

const Container = styled.div`
  max-width: 920px;
  width: 100%;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;

  .mdx-block {
    width: 80%;
  }

  img {
    max-width: 100%;
  }

  transition: all 0.3s ease-in-out;
  h1 {
    font-size: 2.3rem;
    color: ${(p) => p.theme.text2};
  }

  @media (max-width: 960px) {
    max-width: 100%none;
    .mdx-block {
      width: 100%;
    }

    p,
    h1,
    h2,
    table {
      margin-left: 20px;
      margin-right: 20px;
    }
  }
`

const Hr = styled.hr`
  background-color: ${(p) => p.theme.text1};
  border: 0;
  height: 1px;
  width: 80%;
  margin-right: 100%;
  display: block;
  @media (max-width: 960px) {
    margin-left: 20px;
  }
`

const Share = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  span {
    margin-right: 10px;
  }
  @media (max-width: 960px) {
    margin-left: 20px;
  }
`

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  console.log({ post, preview })
  return (
    <Container>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1566837945700-30057527ade0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
        />
        <meta name="twitter:creator" content="@juliian41" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.description} />
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <Nav />
      <h1>{post.title}</h1>
      <div
        className="mdx-block"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      <Hr />
      <Share>
        <span>Share on</span>
        <a
          href={`https://twitter.com/intent/tweet?url=https://julianbetancourt.co/blog/${post.slug}&text=${post.title}&via=juliian41`}
          aria-label="Share article on twitter"
          target="_blank"
        >
          <IoLogoTwitter />
        </a>
      </Share>
    </Container>
  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, ["content", "title"])
  const content = await markdownToHtml(post.content || "")
  const description = await markdownToHtml(post.description || "")
  return {
    props: {
      post: {
        ...post,
        slug: params.slug,
        content,
        description,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
