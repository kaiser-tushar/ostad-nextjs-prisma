import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import blogData from "@/data/blogData.json";
export default async function Blogs() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogGrid}>
        {blogData.posts.map((blog) => (
          <Link
            className={styles.blogCard}
            key={blog.id}
            href={`/blogs/${blog.id}`}
          >
            <div>
              <h2>{blog.title}</h2>
              <p className={styles.textTruncate}>{blog.content}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}