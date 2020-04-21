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
    this.addNewGrade = this.addNewGrade.bind(this);
    this.deleteAGrade = this.deleteAGrade.bind(this);
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

  deleteAGrade(userId) {
    const newGrades = this.state.grades;
    fetch(`/api/grades/${userId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => {
        for (let i = 0; i < newGrades.length; i++) {
          if (newGrades[i].id === userId) {
            newGrades.splice(i);
          }
        }
        this.setState({
          grades: newGrades
        });
      });
  }

  render() {
    return (
      <div>
        <Header avg={this.getAverageGrade()} />
        <hr></hr>
        <div className='d-flex'>
          <GradeTable grades={this.state.grades} deleteAGrade={this.deleteAGrade} />
          <GradeForm addNewGrade={this.addNewGrade} />
        </div>
      </div>
    );
  }
}

export default App;
