import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.less';
import goo from './dl1.png';
// import logoSvg from './icons/google_logo.svg'

function App () {
  return (
    <div className = "box selected" >
       hello ,world
       <img src={goo}></img>
    </div>
  );
}

console.log('Running App version' + process.env.ENV_TYPE);

ReactDOM.render(<App/>, document.getElementById('app'))
