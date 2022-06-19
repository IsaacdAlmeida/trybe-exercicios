import { Route, Switch, Link } from 'react-router-dom'
import NewQuestionPage from './pages/NewQuestionPage';
import QuestionLink from './pages/QuestionLink';
import QuestionsProvider from './context/QuestionsProvider';

function App() {
  return (
    <QuestionsProvider>
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
    </QuestionsProvider>
  );
}

// dessa forma o contexto é provido para toda a aplicação

export default App;
