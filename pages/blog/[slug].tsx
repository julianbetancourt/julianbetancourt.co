import React from "react"
import styled from "styled-components"
import Nav from "../../components/Nav"
import { getAllPosts, getPostBySlug } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"

const Container = styled.div`
  height: 100vh;
  max-width: 920px;
  margin: 50px auto 0;
  /* display: flex;
  disp
  align-items: center;
  justify-content: center; */
  transition: all 0.3s ease-in-out;
  /* background: pink; */
  h1 {
    font-size: 2.3rem;
    color: ${(p) => p.theme.text2};
  }
`

export default function Post({ post, morePosts, preview }) {
  console.log({ post, morePosts, preview })
  return (
    <Container>
      <Nav />
      <div className="max-w-2xl mx-auto">
        <h1>{post.title}</h1>
        <div
          // className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </Container>
  )
}

export async function getStaticProps({ params }) {
  console.log("params ->", params)
  const post = getPostBySlug(params.slug, ["content", "title"])
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])
  // console.log("================", posts)
  return {
    paths: posts.map((post) => {
      return {
        // console.log()
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
