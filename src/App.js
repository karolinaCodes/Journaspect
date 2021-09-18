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

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

function Header() {
  return (
    <header id='site-header'>
      <h1 id='site-logo'>Cut Thru</h1>
      <form>
        <label htmlFor='search' hidden>Search: </label>
        <input type='text' required></input>
        <button type='submit'>Search</button>
      </form>
      <a href='/sign-in'>Sign In</a>
    </header>
  );
}

export default App;
