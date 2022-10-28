import { AddPostForm } from './features/posts/AddPostForm'
import { PostsList } from './features/posts/PostsList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { EditPostForm } from './features/posts/EditPostForm'
import { Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Link to="/">Posts</Link>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <>
                <AddPostForm />
                <PostsList />
              </>
            )}
          />
          <Route exact path="/editPost/:postId" component={EditPostForm} />
          <Route exact path="/posts/:postId" component={SinglePostPage} />
          <Redirect to="/" />
        </Switch>
    </Router>    
  );
}
export default App;
