import BlogCard from "@/components/BlogCard";
import blogs from "@/lib/blogs.json";

const Blog = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-center font-extrabold text-4xl my-16">Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
