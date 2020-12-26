import useStyles from './styles';
import Post from './Post';
import {useSelector} from 'react-redux';
const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts, 'posts')
  return (
    <>
    <h1>Posts</h1>
    <Post />
    <Post />
    </>
  )
};

export default Posts;