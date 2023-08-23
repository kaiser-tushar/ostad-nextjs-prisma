import Image from "next/image";
import Container from "@/components/container";
import { getNewestBlog } from "@/data/newestBlogs";
import PostList from "@/components/PostList";

export default async function Home() {
  const data = await getNewestBlog();

  return (
    <Container>
      <h3>Read Our Newest Blogs</h3>
      <div className="grid gap-10 lg:gap-10 md:grid-cols-2 ">
        {data.map((post) => (
          <PostList key={post.id} post={post} aspect="landscape" />
        ))}
      </div>
    </Container>
  );
}
