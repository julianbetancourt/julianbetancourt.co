import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "_posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []): any {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)
  console.log({ content, data })

  const items = {}

  // Ensure only the minimal needed data is exposed
  console.log(fields)
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    // if (field ===)

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts: any = slugs.map((slug) => getPostBySlug(slug, fields))
  // sort posts by date in descending order
  // ts-lint-disable next-line
  // .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
}
