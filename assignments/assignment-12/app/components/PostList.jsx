import Image from "next/image";
import Link from "next/link";
import { cx, imageBlurData } from "@/utils/all";
import { parseISO, format } from "date-fns";
// import { PhotographIcon } from "@heroicons/react/outline";
// import CategoryLabel from "@components/blog/category";

export default function PostList({ post, aspect }) {
  //   const imageProps = post?.mainImage ? GetImage(post.mainImage) : null;

  return (
    <>
      <div className="cursor-pointer link-effect">
        <div
          className={cx(
            "relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800   hover:scale-105",
            aspect === "landscape" ? "aspect-video" : "aspect-square"
          )}
        >
          <Link href={`/blogs/${post.id}`}>
            <Image
              src={post.img}
              blurDataURL={imageBlurData}
              alt={"Thumbnail"}
              placeholder="blur"
              width={400}
              height={400}
              layout="responsive"
              objectFit="cover"
              className="transition-all"
            />
          </Link>
        </div>
        <h2 className="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
          <Link href={`/blogs/${post.id}`}>
            <span className="link-underline link-underline-blue">
              {post.title}
            </span>
          </Link>
        </h2>

        <div className="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
          <span className="text-xs text-gray-300 dark:text-gray-600">
            &bull;
          </span>
          <time
            className="text-sm"
            dateTime={post?.updated_at || post.created_at}
          >
            {format(
              parseISO(post?.updated_at || post.created_at),
              "MMMM dd, yyyy"
            )}
          </time>
        </div>
      </div>
    </>
  );
}
