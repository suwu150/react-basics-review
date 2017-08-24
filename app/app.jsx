/**
 * Created by jkwu on 17-8-19.
 */
import React from 'react';
import ReactDOM from 'react-dom';


import Profile from './Profile.jsx';
class App extends React.Component{
  constructor(props) {
    super(props);
  }
  componentWillMount = () => {
    this.setState({
      name: 'jkwu',
      age: 22
    })
  };

  render() {
    return (
      <div className="header">
      <h1>Jkwu,  Welcome You!!!!!</h1>
      <div>
        <Profile
          name={this.state.name}
          age={this.state.age}
        />
      </div>
    </div>)
  }
}

const app = document.createElement('div');
app.id = 'entry';
document.body.appendChild(app);
ReactDOM.render(<App/>, document.getElementById('entry'));