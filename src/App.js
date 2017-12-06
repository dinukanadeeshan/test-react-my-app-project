import React, {Component} from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './Components/Projects'
import logo from './logo.svg';
import './App.css';
import AddProject from "./Components/AddProject";

class App extends Component {

    constructor() {
        super();
        this.state = {
            projects: []
        }
        this.myvar = {}
    }

    componentWillMount() {
        this.myvar = {name : 'hello'}
        this.setState({
            projects: [
                {
                    id: uuid.v4(),
                    title: 'Business website',
                    category: 'Web design'
                },
                {
                    id: uuid.v4(),
                    title: 'Social App',
                    category: 'Mobile Develepment'
                },
                {
                    id: uuid.v4(),
                    title: 'Shopping cart',
                    category: 'Web Develepment'
                }
            ]
        });

        console.log('this is the end of the componentWillMount()')
    }

    componentDidMount(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            dataType: 'json',
            cache: false,
            success: function(data){
                console.log(data)
            }.bind(this),
            error: function(xhr, states, err){
                console.log(err)
            }.bind(this)

        })
    }

    handleAddProject(project) {
        console.log(project)
        let projects = this.state.projects;
        projects.push(project)
        this.setState({
            projects: projects
        })
        // console.log(this.state)

    }


    deleteProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);
        projects.splice(index,1);
        this.setState({projects: projects})
    }
    render() {
       // console.log(this.myvar)
        console.log('render() is called...')
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <AddProject addProject={this.handleAddProject.bind(this)}/>
                <hr/>
                <Projects onDelete={this.deleteProject.bind(this)} msg="Hello world" projects={this.state.projects}/>
            </div>
        );
    }
}

export default App;
