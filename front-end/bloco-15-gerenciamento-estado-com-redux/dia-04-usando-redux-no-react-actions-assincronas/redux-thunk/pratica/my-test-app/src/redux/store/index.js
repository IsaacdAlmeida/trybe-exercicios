import { createStore, applyMiddleware } from 'redux'; // Agora importamos o applyMiddleware
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // importar o thunk do redux-thunk
import rootReducer from '../reducers'

// const store = createStore(rootReducer, applyMiddleware(thunk)); // dentro da create store a gente chama o applyMiddleware passando o thunk como parâmetro
// Para usar com o compositeWithDevTools fica da seguinte forma: 

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default store;