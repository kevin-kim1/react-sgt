import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  const gradesArr = props.grades;
  const rows = gradesArr.map(grade => <Grade key={grade.id} grade={grade} />);
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
          {rows}
        </tbody>
      </table>
    </div>
  );
}
