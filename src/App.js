import {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import pendown from './images/pendown.png';
import Posts from './components/Posts';
import Form from './components/Form';
import useStyles from './styles';
import {getPosts} from './Redux/actions/posts';
const App = () => {
  const [currentId, setCurrentId] = useState(0)
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  console.log(currentId, 'id')
  return (
     <Container maxwidth="lg">
       <AppBar className={classes.appBar} position="static" color="inherit">
         <Typography className={classes.heading} variant="h2" align="center">Pendown</Typography>
         <img className={classes.image} src={pendown} alt="pendown" height="60" />
       </AppBar>
       <Grow in>
         <Container>
          <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts   setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
         </Container>
       </Grow>
     </Container>
  )
};

export default App