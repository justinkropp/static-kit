import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div>
      <div className="">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="">
        <DateFormatter dateString={date} />
      </div>
      <p className="">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
}
