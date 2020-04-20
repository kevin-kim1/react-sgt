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
        sum += grades[i].grade;
      }
    } else {
      sum = '0';
    }
    return sum / gradesLen;
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
