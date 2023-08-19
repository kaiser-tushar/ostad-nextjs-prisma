import React from "react";
import styles from "./SingleBlogPage.module.css";
import blogData from "@/data/blogData.json";

export default function SingleBlog({ params }) {
  const blogContent = blogData.posts?.find((item) => item.id == params.id);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.blogPost}>
        <h1 className={styles.title}>{blogContent.title}</h1>
        <div className={styles.info}>
          <p className={styles.author}>{blogContent.author}</p>
          <p className={styles.date}>{blogContent.date}</p>
        </div>
        <div className={styles.content}>{blogContent.content}</div>
      </div>
    </div>
  );
}