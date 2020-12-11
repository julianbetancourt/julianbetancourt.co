import Link from "next/link"
import styled from "styled-components"
import markdownToHtml from "../lib/markdownToHtml"

const Container = styled.div`
  display: flex;
  min-height: 120px;
  width: 437px;
  background: ${(p) => p.theme.postPreview};
  /* opacity: 0.5; */
  padding: 1rem;
  border-radius: 5px;
  /* border: 1px solid; */
`

const Content = styled.div``
const Title = styled.div`
  display: flex;
  font-weight: 300;
  font-size: 1rem;
  a {
    margin-right: 1rem;
  }
  h3 {
    margin: 0;
    font-weight: 500;
    width: 70%;
  }
  .category {
    background: grey;
    padding: 5px 5px;
    border-radius: 5px;
    color: #fff;
    font-size: 0.8rem;
    font-weight: 300;
    align-self: baseline;
  }
`

function PostPreview({ post }) {
  // const description = markdownToHtml(post.description)
  // ({ post, description })
  return (
    <Container>
      <Content>
        <Title>
          <h3>
            <Link as={`/blog/${post.slug}`} href="/blog/[slug]">
              {post.title}
            </Link>
          </h3>
          <span className="category">{post.categories[0]}</span>
        </Title>
        <div
          // className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: post.description }}
        />
        {/* {description} */}
      </Content>
    </Container>
  )
}

export default PostPreview
