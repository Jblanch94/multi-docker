import './App.css';
import Fib from './Fib';
import OtherPage from './OtherPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Home</Link>
        <Link to="/otherpage">Other Page</Link>
        <Route path="/" exact component={Fib} />
        <Route path="/otherpage" exact component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
