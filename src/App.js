import './App.css';
import {Route} from 'react-router-dom';
import {Fragment} from 'react';
import HomePage from './pages/HomePage';
import MyProfile from './pages/MyProfile';
import JournalistPage from './pages/JournalistPage';
import AddJournalist from './pages/AddJournalist';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import SearchResults from './pages/SearchResults';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
    <Route path="/" exact>
      <HomePage/>
    </Route>
    <Route path="/myprofile" exact >
      <MyProfile/>
    </Route>
    <Route path="/journalistpage" >
    { /*need to make dynamic*/ }
      <JournalistPage/>
    </Route>
    <Route path="/addjournalist" >
      <AddJournalist/>
    </Route>
    <Route path="/signup" exact>
      <SignUp/>
    </Route>
    <Route path="/signin" exact>
      <SignIn/>
    </Route>
    <Route path="/searchresultspage" exact>
      { /*need to make dynamic*/ }
      <SearchResults/>
    </Route>
    <Footer />
    </Fragment>
  );
}
export default App;
