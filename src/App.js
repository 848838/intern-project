import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MainContent from './MainContent';
import Main from './Main';
import Footer from './Footer';
import SignUpcontent from './SignUpcontent';
import SignupMain from './SignupMain';
// redering files from here on server
function App() {
  return (
    <>
      <Navbar /> 
      <MainContent />
      <Main />
      <SignUpcontent/>
      <SignupMain/>
      <Footer />
    </>
  );
}

export default App;
