import React from "react"
import styled from "styled-components"
import Nav from "../components/Nav"
import PostPreview from "../components/PostPreview"
import { getAllPosts } from "../lib/api"

const Container = styled.div`
  height: 100vh;
  max-width: 920px;
  margin: 50px auto 0;
  transition: all 0.3s ease-in-out;
  h1 {
    font-size: 2.3rem;
    color: ${(p) => p.theme.text2};
  }
`

export default function Blog({ allPosts }) {
  return (
    <Container>
      <Nav />
      <h1>Blog</h1>
      {allPosts.map((post) => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Container>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "description",
    "banner",
    "categories",
  ])

  return {
    props: { allPosts },
  }
}
