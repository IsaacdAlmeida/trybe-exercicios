import { createContext } from "react";

const TesteContext = createContext();

export default TesteContext;

// A const TesteContext retorna um objeto com um provider e um consumer

// <Provider /> e <Consumer /> são componentes
// Podemos passar para o createContext um estado inicial