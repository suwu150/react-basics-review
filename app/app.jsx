/**
 * Created by jkwu on 17-8-19.
 */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="header">
      <h1>Jkwu,  Welcome You!!!!!!%%5eyyyyee5!</h1>
    </div>)
  }
}

const app = document.createElement('div');
app.id = 'entry';
document.body.appendChild(app);
ReactDOM.render(<App/>, document.getElementById('entry'));