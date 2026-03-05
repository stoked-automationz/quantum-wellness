import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllPosts(): BlogPostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostMeta(slug))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostMeta(slug: string): BlogPostMeta | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    category: data.category || "General",
    tags: data.tags || [],
    image: data.image,
  };
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content: markdownContent } = matter(fileContents);

  const processedContent = await remark().use(html).process(markdownContent);
  const content = processedContent.toString();

  return {
    slug,
    title: data.title || "",
    date: data.date || "",
    description: data.description || "",
    category: data.category || "General",
    tags: data.tags || [],
    image: data.image,
    content,
  };
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.map((post) => post.category))];
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  return [...new Set(posts.flatMap((post) => post.tags))];
}
