import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import PostView from './components/PostView';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <section className="section container content">
          <Route exact path="/" component={PostList} />
          <Route path="/:slug" component={PostView} />
        </section>
      </div>
    </Router>
  );
}

export default App;
