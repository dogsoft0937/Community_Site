import { Route, Switch  } from 'react-router-dom';
import React,{Suspense} from 'react';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import LandingPage from './views/LadingPage/LandingPage'
import RegisterPage from './views/RegisterPage/RegisterPage';
import LoginPage from './views/LoginPage/LoginPage';
import PostListPage from './views/PostListPage/PostListPage';
import DetailPostPage from './views/DetailPostPage/DetailPostPage';
import WritePage from './views/WritePage/WritePage';
import auth from '../hoc/auth'
function App() {
  return (
    <Suspense fallback={(<div>Loading... branchtest</div>)}>
      <NavBar />
      <div style={{height:"100%" }}>
        <Switch>
          <Route exact path="/" component={auth(LandingPage,null)} />
          <Route exact path="/register" component={auth(RegisterPage,false)} />
          <Route exact path="/login" component={auth(LoginPage,false)}/>
          <Route exact path="/write" component={auth(WritePage,true)}/>
          <Route exact path="/post_list" component={auth(PostListPage,false)}/>
          <Route exact path="/detail_post" component={auth(DetailPostPage,false)}/>
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
