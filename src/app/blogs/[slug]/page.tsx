import blogs from "@/lib/blogs.json";
import Image from "next/image";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

const BlogDetailsPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div className="container mx-auto py-12 px-4">Blog not found</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      {blog.image && (
        <Image
          src={blog.image}
          alt={blog.title}
          width={600}
          height={300}
          className="rounded-lg mb-8"
        />
      )}

      <div className="prose lg:prose-xl dark:prose-invert">
        {blog.content.map((element, index) => {
          switch (element.type) {
            case "paragraph":
              return (
                <p key={index} className="py-2">
                  {element.text}
                </p>
              );
            case "heading":
              return (
                <h2 key={index} className="py-2 text-xl">
                  {element.text}
                </h2>
              );
            case "list":
              return (
                <ul key={index} className="py-2">
                  {element.items?.map((item, i) => (
                    <li key={i} className="pl-2 list-disc list-inside">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default BlogDetailsPage;
