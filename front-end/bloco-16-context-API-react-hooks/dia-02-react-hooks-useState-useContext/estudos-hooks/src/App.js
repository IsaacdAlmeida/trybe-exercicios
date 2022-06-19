import { Route, Switch, Link } from 'react-router-dom'
import NewQuestionPage from './pages/NewQuestionPage';
import QuestionLink from './pages/QuestionLink';

function App() {
  return (
    <div className="App">
      <header>
        <h3>
          <Link to="/">Questões</Link>
        </h3>
      </header>
      <div>
        <Switch>
          <Route exact path="/new-question" component={NewQuestionPage} />
          <Route exact path="/" component={QuestionLink} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
