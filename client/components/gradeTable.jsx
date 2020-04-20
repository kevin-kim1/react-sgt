import React from 'react';
import Grade from './grade';

export default class GradeTable extends React.Component {
  render() {
    return (
      <div className="student-table mx-auto row">
        <table id="table-content" className="table table-borderless col-sm-12">
          <thead>
            <tr className="w-100">
              <th>Name</th>
              <th>Course</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody id="grade-table">
            <Grade />
          </tbody>
          {/* <p id="no-grades" className="hidden-msg">No Grades Recorded</p> */}
        </table>
      </div>
    );
  }
}
