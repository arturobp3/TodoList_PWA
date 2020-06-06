
import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'
import { AddTask } from './javascript/AddTask.js'
import { Task } from './javascript/Task.js' 

class ToDoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items
        }

        if(JSON.parse(localStorage.getItem("tasks")) === null){
            localStorage.setItem("tasks", JSON.stringify([]))
        } else {
            this.state.items = JSON.parse(localStorage.getItem("tasks"))
        }
    }

    updateGUI(operation, task){
        let value = this.state.items

        if(operation === "add"){
            let newTask = {id: this.generateKey(task), text: task}

            value.push(newTask)
        } else if (operation === "delete"){
            value = this.state.items.filter((_item) => {
                return _item.id != task.id
            })
        } else if (operation === "update") {
            value.find(_item => _item.id == task.id).text = task.text
        }

        localStorage.setItem("tasks", JSON.stringify(value))
        this.setState({items: value})
    }


    onRemoveClick(textToBeRemoved){
        this.updateGUI("delete", textToBeRemoved)
    }

    onSaveClick(taskToUpdate){
        if(taskToUpdate.text !== ""){
            this.updateGUI("update", taskToUpdate)
        }
    }

    onCancelClick(e){

    }

    render(){

        if(!Array.isArray(this.state.items)) {
            this.state.items = []
        }

        return html`
            <div id="tasksContainer">
                <h1>Lista de Tareas</h1>
                <div id="areaSup">
                    <${AddTask} updateParent=${this.updateGUI.bind(this)} name="Añadir tarea" />
                </div>
                <div id="areaInf">
                    ${this.state.items.map( todo => (
                        this.renderTask(todo)
                    ))}
                </div>
            </div>`
    }

    renderTask(task) {
        return html`
        <div key=${task.id}>
            <${Task}
                onRemoveClick=${ this.onRemoveClick.bind(this, task) }
                onSaveClick=${ this.onSaveClick.bind(this) }
                onCancelClick=${ this.onCancelClick.bind(this, task.text) } 
                task=${task}
            /> 
        </div>
        `
    }

    generateKey = (task) => {
        return `${ task }_${ new Date().getTime() }`};
}

   
render(html`<${ToDoList} items=[]/>`, document.body)
