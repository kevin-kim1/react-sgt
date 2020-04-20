import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    fetch('./api/grades')
      .then(response => response.json())
      .then(grades => this.setState({ grades }))
      .catch(error => console.error('Request is not working:', error));
  }

  getAverageGrade() {

  }

  render() {
    return (
      <div>
        <Header />
        <hr></hr>
        <GradeTable grades={ this.state.grades } />
      </div>
    );
  }
}

export default App;
