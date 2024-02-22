import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="">
        <div className="">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
