import React from 'react';
import Grade from './grade';

export default function GradeTable(props) {
  const gradesArr = props.grades;
  const rows = gradesArr.map(grade => <Grade key={grade.id} grade={grade} deleteAGrade={props.deleteAGrade}/>);
  return (
    <div className=" col-sm-9">
      <table id="table-content" className="table table-borderless">
        <thead>
          <tr className="w-100">
            <th>Name</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody id="grade-table">
          {/* {gradesArr.length ? rows : <tr className='hide-row'></tr>} */}
          {rows}
        </tbody>
      </table>
      <h5 className={`${!gradesArr.length ? 'hidden-msg' : 'hide-row'}`}>No Grades Recorded</h5>
    </div>
  );
}
