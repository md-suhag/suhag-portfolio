import blogs from "@/lib/blogs.json";
import Image from "next/image";

export const generateStaticParams = async () => {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
};

const BlogDetailsPage = ({ params }: { params: { slug: string } }) => {
  const blog = blogs.find((blog) => blog.slug === params.slug);

  if (!blog) {
    return <div className="container mx-auto">Blog not found</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <Image
        src={blog.image}
        alt={blog.title}
        width={600}
        height={300}
        className="rounded-lg mb-8"
      />
      <div className="prose lg:prose-xl dark:prose-invert">
        {blog.content.map((element, index) => {
          if (element.type === "paragraph") {
            return (
              <p key={index} className="py-2">
                {element.text}
              </p>
            );
          } else if (element.type === "heading") {
            return (
              <h2 className="py-2 text-xl" key={index}>
                {element.text}
              </h2>
            );
          } else if (element.type === "list") {
            return (
              <ul key={index} className="py-2">
                {element?.items?.map((item, i) => (
                  <li className="pl-2 list-disc list-inside" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
