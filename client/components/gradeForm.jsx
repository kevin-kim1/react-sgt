import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // id: '',
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSumbit(event) {
    event.preventDefault();
    const newGrade = {
      name: this.state.name,
      course: this.state.course,
      grade: this.state.grade
    };
    this.props.addNewGrade(newGrade);
    this.handleReset();
  }

  handleReset() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    const { name, course, grade } = this.state;
    return (
      <div className="col-sm-3 mt-1 pr-2">
        <h3>Add Grade</h3>
        <form id="form-section" className="pt-3" onSubmit={this.handleSumbit}>
          <div className="input-group mb-3">
            <p className="input-group-text fas fa-user"></p>
            <input name="name" type="text" className="form-control" value={name} onChange={this.handleChange} placeholder="Student Name" />
          </div>
          <div className="input-group mb-3">
            <p className="input-group-text fas fa-list-ul"></p>
            <input name="course" type="text" className="form-control" value={course} onChange={this.handleChange} placeholder="Student Course" />
          </div>
          <div className="input-group mb-3">
            <p className="input-group-text fas fa-graduation-cap"></p>
            <input name="grade" type="text" className="form-control" value={grade} onChange={this.handleChange} placeholder="Student Grade"/>
          </div>
          <button id="btn-form" type="submit" className="btn btn-success mr-2">Add</button>
          <button type="reset" className="btn btn-light btn-outline-secondary btn-cancel" onClick={this.handleReset}>Cancel</button>
        </form>
      </div>
    );
  }
}
