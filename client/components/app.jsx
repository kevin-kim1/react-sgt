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
    const grades = this.state.grades;
    const gradesLen = grades.length;
    let sum = 0;
    if (gradesLen) {
      for (let i = 0; i < gradesLen; i++) {
        sum += parseInt(grades[i].grade);
      }
    } else {
      sum = 'N/A';
    }
    return parseInt(sum / gradesLen);
  }

  render() {
    return (
      <div>
        <Header avg={this.getAverageGrade()} />
        <hr></hr>
        <GradeTable grades={ this.state.grades } />
      </div>
    );
  }
}

export default App;
