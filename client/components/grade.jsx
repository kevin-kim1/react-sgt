import React from 'react';

export default function Grade(props) {
  const grade = props.grade;
  return (
    <tr>
      <td>{grade.name}</td>
      <td>{grade.course}</td>
      <td>{grade.grade}</td>
      <td>
        <button type='button' className='btn btn-danger' onClick={() => props.deleteAGrade(grade.id)} >Delete</button>
      </td>
    </tr>
  );
}
