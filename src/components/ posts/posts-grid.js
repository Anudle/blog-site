import classes from './post-grid.module.css'
import PostItem from './post-item';
function PostGrid(props) {
  const { post } = props;
  return <ul>
    {post.map((post, idx) => <PostItem key={idx}></PostItem>)}
  </ul>;
}

export default PostGrid;
