import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grades: []
    };
  }

  componentDidMount() {
    this.getAllGrades();
  }

  getAllGrades() {
    fetch('/api/grades')
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          grades: data
        }));
        console.log(this.state.grades);
      });
    console.log(this.state.grades);
  }

  renderAllGrades() {
    // this.state.grades.map((grade, index) => {
    return (
      <tr key="1">
        <td>321321</td>
        <td>12312</td>
        <td>321321</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <div id="student-table-header" className="row mx-auto">
          <h2 className="col-sm-9 mt-2 mb-1">Student Grade Table</h2>
          <h5 className="col-sm-3 mt-3 mb-1 pt-1">Average Grade <span id="grade-average" className="badge badge-secondary">34</span></h5>
        </div>
        <hr></hr>
        <div className="student-table mx-auto row">
          <table id="table-content" className="table table-borderless col-sm-9">
            <thead>
              <tr className="w-100">
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody id="grade-table">
              {this.renderAllGrades()}
            </tbody>
            {/* <p id="no-grades" className="hidden-msg">No Grades Recorded</p> */}
          </table>
          <div className="col-sm-3 mt-1 pr-2">
            <h3>Add Grade</h3>
            <form id="form-section" className="pt-3">
              <div className="input-group mb-3">
                <p className="input-group-text fas fa-user"></p>
                <input name="name" type="text" className="form-control" placeholder="Student Name" />
              </div>
              <div className="input-group mb-3">
                <p className="input-group-text fas fa-list-ul"></p>
                <input name="course" type="text" className="form-control" placeholder="Student Course" />
              </div>
              <div className="input-group mb-3">
                <p className="input-group-text fas fa-graduation-cap"></p>
                <input name="grade" type="text" className="form-control" placeholder="Student Grade" />
              </div>
              <button id="btn-form" type="submit" className="btn btn-success mr-2">Add</button>
              <button type="submit" className="btn btn-light btn-outline-secondary btn-cancel">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
