import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-500">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-60 object-cover"
      />

      <div className="p-6">
        <h2 className="text-[20px] font-semibold mb-3">
          {blog.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {blog.excerpt}
        </p>

        <Link
          to={`/blog/${blog.slug}`}
          className="text-[#ee6124] font-semibold"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;