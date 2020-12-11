import Head from "next/head"
import React from "react"
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
    padding: 0 40px;
    .mdx-block {
      width: 100%;
    }
  }
`

export default function Post({ post, morePosts, preview }) {
  return (
    <Container>
      <Head>
        <title>{post.title}</title>
        <meta property="og:title" content={post.title} />
        <script async src="https://platform.twitter.com/widgets.js"></script>
      </Head>
      <Nav />
      <h1>{post.title}</h1>
      <div
        className="mdx-block"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
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
