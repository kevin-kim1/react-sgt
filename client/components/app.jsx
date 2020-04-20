import React from 'react';
import Header from './header';
import GradeTable from './gradeTable';
import GradeForm from './gradeForm';

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
      sum = '0';
    }
    return parseInt(sum / gradesLen);
  }

  addNewGrade(grade) {
    fetch('/api/grades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(grade)
    }).then(res => res.json())
      .then(grade => {
        const newGrade = this.state.grades.concat(grade);
        this.setState({ grades: newGrade });
      });
  }

  render() {
    return (
      <div>
        <Header avg={this.getAverageGrade()} />
        <hr></hr>
        <div className='d-flex'>
          <GradeTable grades={this.state.grades} />
          <GradeForm addNewGrade={this.addNewGrade} />
        </div>
      </div>
    );
  }
}

export default App;
