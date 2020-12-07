import Link from "next/link"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.text2};
  h2 {
    margin-right: auto;
    a {
      text-decoration: none;
    }
  }

  .menu-links {
    a {
      margin-left: 20px;
    }
  }
`

export default function Nav() {
  return (
    <Container>
      <h2>
        <Link href="/">Julian Betancourt</Link>
      </h2>
      <div className="menu-links">
        <Link href="/">Blog</Link>
      </div>
    </Container>
  )
}
