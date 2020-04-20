import React from 'React';

export default class Header extends React.Component {
  render() {
    return (
      <div id="student-table-header" className="row mx-auto">
        <h2 className="col-sm-9 mt-2 mb-1">Student Grade Table</h2>
        <h5 className="col-sm-3 mt-3 mb-1 pt-1">Average Grade <span id="grade-average" className="badge badge-secondary">34</span></h5>
      </div>
    );
  }
}
