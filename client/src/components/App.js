import { Route, Switch  } from 'react-router-dom';
import React,{Suspense} from 'react';
import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import LandingPage from './views/LadingPage/LandingPage'
import RegisterPage from './views/RegisterPage/RegisterPage';
import LoginPage from './views/LoginPage/LoginPage';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
<<<<<<< HEAD
      <div style={{height:"70%"}}>
=======
      <div>네비게이션~</div>
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
>>>>>>> 632805fa3da963a31fb3c9f3a7a017676d54662b
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
