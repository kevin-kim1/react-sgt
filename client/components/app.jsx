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
    let avg;
    let sum;
    if (grades.length) {
      for (let i = 0; i < gradesLen; i++) {
        sum += grades.grade;
        avg = sum / gradesLen;
      }
    } else {
      avg = 'N/A';
    }
    return avg;
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
