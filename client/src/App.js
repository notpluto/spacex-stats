import React from 'react';
import ApolloClient  from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Launches from './components/Launches';
import Launch from './components/Launch';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const client = new ApolloClient({
  uri: "http://localhost:5000/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div className="container">
        <h1 style={{margin: "2rem auto", textAlign: "center", letterSpacing:"1px"}}>SpaceX</h1>
        <Route exact path="/" component={Launches} />
        <Route exact path="/launch/:flight_number" component={Launch} />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
