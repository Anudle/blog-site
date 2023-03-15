import PostGrid from "../ posts/post-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  return <section classeName={classes.latest}>
    <h2>Featured Posts</h2>
    <PostGrid posts={props.posts}></PostGrid>
  </section>;
}

export default FeaturedPosts
