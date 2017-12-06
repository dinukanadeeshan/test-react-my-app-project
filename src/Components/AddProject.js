import React, { Component } from 'react';
import uuid from "uuid";

class AddProject extends Component {
  static defaultProps = {
    categories : ['Web design', 'Mobile Develepment', 'Web development']
  }


  constructor(){
      super();
      this.state = {
          newProjects: {}
      }
  }

  handleSubmit(e){
    if(this.refs.title.value !== ''){
        this.setState({
            newProjects: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }
        }, function () {
            this.props.addProject(this.state.newProjects);
        });
    }
    e.preventDefault();
  }

  render() {
    let categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>;
    });
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div>
          <label>Title</label><br />
          <input type="text" ref="title"/><br />
          <label>category</label><br />
          <select ref="category">
            {categoryOptions}
          </select><br />
          <input type="submit" value='submit'/>

        </div>
      </form>
    );
  }
}

export default AddProject;
