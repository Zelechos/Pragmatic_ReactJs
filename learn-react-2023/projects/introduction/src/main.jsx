import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css';

const d = document;
const element = d.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
<React.Fragment>
  <App/>
</React.Fragment>
);
