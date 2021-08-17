import { Route, Switch  } from 'react-router-dom';

import NavBar from './views/NavBar/NavBar';
import Footer from './views/Footer/Footer';
import LandingPage from './views/LadingPage/LandingPage'

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
