import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { BlogPostPage, BlogPostContent, BlogPostTitle } from "../styles/blog";

const BlogPost = ({ pageContext }) => {
  const { Title, Date, PostMarkdown, Description, Tags, Image  } = pageContext;
  console.log(pageContext)
  return (
    <BlogPostPage>
      <BlogPostTitle>
      <h3>{Title}</h3>
      <p>Posted: {Date}</p>
      </BlogPostTitle>
      <GatsbyImage image={getImage(Image.localFiles[0])} alt={Title} />
      <p>{Description}</p>
      <BlogPostContent
        dangerouslySetInnerHTML={{
          __html: PostMarkdown.childMarkdownRemark.html,
        }}
      />
      <div>
        <h4>Tags:</h4>
        {Tags.map(tag => (
          <p key={tag}>{tag}</p>
        ))}
      </div>

    </BlogPostPage>
  );
};

export default BlogPost;