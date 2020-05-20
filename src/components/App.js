import { HashRouter as Router, Route } from 'react-router-dom'
import React from 'react';
import './App.css';
import Title from '../components/Title';
import DogList from '../components/DogList';
import DogSpace from '../components/DogSpace';
import Footer from '../components/Footer.js';
import About from './About'
import DogDetails from '../components/DogDetails'

function App() {
  return (
    <Router>
    <div className="App">
      <Title />
      <Route exact path="/" component={DogList}/>
      <Route path="/about" component={About} />
      <Route path="/details/:id" component={DogDetails} />

      {/* <DogList />
      <DogSpace />
      <DogSpace />
      <DogSpace />
      <DogSpace /> */}
      <Footer />
    </div>
    </Router>
  );
}
// function DogSpace() {
//   return (
//     <div>
//       <DogSpace />
//       <DogSpace />
//       <DogSpace />
//       <DogSpace />
//     </div>
//   )
// }

export default App;




// function Heading() {
//   // return <h1>Hello World</h1>
//   const str = 'Foo Bar'
//   return <h1>{str}</h1>
// }
// <header className="App-header">
// <Heading />
// {/* <h2>foo bar</h2> */}
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header>