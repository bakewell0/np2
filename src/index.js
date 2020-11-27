import React from 'react';
import ReactDOM from 'react-dom';
// import './style/index.less';
import './style/index.stylus';

function App () {
  return (
    <div className =                   "box selected" >
       hello ,world
    </div>
  );
}

ReactDOM.render(<App/>, document.getElementById('app'))
