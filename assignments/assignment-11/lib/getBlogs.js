export default async function getBlogs() {
  const res = await fetch(`/blogs/api`);

  if (!res.ok) {
    throw new Error("error fetching Posts");
  }
  //   console.log(res.json(), "response");
  return res.json();
}
