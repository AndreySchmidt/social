import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar.jsx';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter} from 'react-router-dom';

const App = (props) => {
  return (<BrowserRouter>
    <Provider store = {store}>
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <Dialogs data = {props.state.profilePage.dialogs} />
        <Profile data = {props.state.profilePage.posts} />
      </div>
      <Footer />
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
