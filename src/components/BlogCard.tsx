import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface Blog {
  slug: string;
  title: string;
  content: object[];
  image: string;
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <Card className="group bg-transparent">
        <CardHeader>
          <Image
            src={blog.image}
            alt={blog.title}
            width={500}
            height={300}
            className="rounded-t-lg"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="group-hover:text-primary my-4">
            {blog.title}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
