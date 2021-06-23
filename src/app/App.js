import './App.css'
import './Buttons.css'
import './Page.css'
import './AdPage.css'
import './UserData.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './components/Navbar/Navbar.css'
import './components/Aside/Aside.css'
import Content from './components/Content/Content'
// import Navbar from './components/Navbar.jsx';
// import Profile from './components/Profile';
// import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
