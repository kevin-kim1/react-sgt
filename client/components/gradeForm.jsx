import React from 'react';

export default class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      course: '',
      grade: ''
    };
  }
}
