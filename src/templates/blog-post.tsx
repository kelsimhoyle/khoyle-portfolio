import React from "react";

const BlogPost = ({ pageContext }) => {
  const { Title, Date, PostMarkdown } = pageContext;
  return (
    <div>
      <h3>{Title}</h3>
      <p>{Date}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: PostMarkdown.childMarkdownRemark.html,
        }}
      />

    </div>
  );
};

export default BlogPost;