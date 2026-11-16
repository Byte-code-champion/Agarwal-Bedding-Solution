import { Helmet } from "react-helmet-async";

const BlogSchema = ({ blog }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: blog.image,
    author: {
      "@type": "Organization",
      name: "Agarwal Bedding",
      image: "/Productimage/bedsheet.webp"
    },
    publisher: {
      "@type": "Organization",
      name: "Agarwal Bedding",
      logo: {
        "@type": "ImageObject",
        url: "https://agarwaldirect.com/Sitelogo.png",
      },
    },
    datePublished: blog.date,
    description: blog.excerpt,
  };

  return (
    <Helmet>
      <title>{blog.title}</title>
      <meta name="description" content={blog.excerpt} />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default BlogSchema;