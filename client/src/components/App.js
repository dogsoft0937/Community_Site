import { Route, Switch  } from 'react-router-dom';
import React,{Suspense} from 'react';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import LandingPage from './views/LadingPage/LandingPage'
import RegisterPage from './views/RegisterPage/RegisterPage';
import LoginPage from './views/LoginPage/LoginPage';


function App() {
  return (
    <Suspense fallback={(<div>Loading... branchtest</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage}/>
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
