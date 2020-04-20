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
  }

  render() {
    const { name, course, grade } = this.state;
    return (
      <div className="col-sm-3 mt-1 pr-2">
        <h3>Add Grade</h3>
        <form id="form-section" className="pt-3">
          <div className="input-group mb-3">
            <p className="input-group-text fas fa-user"></p>
            <input name="name" type="text" className="form-control" value={name} placeholder="Student Name" />
          </div>
          <div className="input-group mb-3">
            <p className="input-group-text fas fa-list-ul"></p>
            <input name="course" type="text" className="form-control" value={course} placeholder="Student Course" />
          </div>
          <div className="input-group mb-3">
            <p className="input-group-text fas fa-graduation-cap"></p>
            <input name="grade" type="text" className="form-control" value={grade} placeholder="Student Grade"/>
          </div>
          <button id="btn-form" type="submit" className="btn btn-success mr-2">Add</button>
          <button type="submit" className="btn btn-light btn-outline-secondary btn-cancel">Cancel</button>
        </form>
      </div>
    );
  }
}
