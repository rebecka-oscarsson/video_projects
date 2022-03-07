import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
export {default as SearchBox} from './components/SearchBox'
export {default as Header} from "./components/Header"
export {default as Hero} from "./components/Hero"
export {default as Card} from "./components/Card"
export {default as Label} from "./components/Label"
export {default as ProjectListHeadline} from "./components/ProjectListHeadline"
export {default as Main} from "./components/Main"
export {default as useFetch} from "./hooks/useFetch"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
