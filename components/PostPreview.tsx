import Link from "next/link"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  height: 100px;
  width: 437px;
  background: white;
  opacity: 0.5;
  padding: 1rem;
  border-radius: 5px;
`
const Image = styled.img`
  height: 100%;
  width: 100px;
  max-width: 100%;
  border-radius: 5px;
  margin-right: 25px;
`
const Content = styled.div``
const Meta = styled.div`
  .category {
    background: grey;
    padding: 5px 10px;
    border-radius: 5px;
    color: #fff;
    font-size: 0.8rem;
  }
`
const Title = styled.h3`
  margin-top: 1rem;
  font-weight: 300;
  font-size: 1rem;
`

function PostPreview({ post }) {
  console.log({ post })
  return (
    <Container>
      <Image src={post.banner} />
      <Content>
        <Meta>
          <span className="category">{post.categories[0]}</span>
          {/* <div className="time">{post.category}</div> */}
        </Meta>
        <Title>
          <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
            {post.title}
          </Link>
        </Title>
      </Content>
    </Container>
  )
}

export default PostPreview
