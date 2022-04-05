import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App(){
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;


/* const Task = (value) => {
  return (
    <li key={value}>{value}</li> // https://sentry.io/answers/unique-key-prop/ -> cada child deve ter a key prop
  );
}

const tarefas = ['estudar', 'trabalhar', 'tomar café', 'malhar']
// a classe no react tem métodos, o mais importante seria o render()

function App(){
  return (
    <ul>{tarefas.map(Task)}</ul>
  )
} */