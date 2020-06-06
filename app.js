/**TODO:
 * La practica está organizada con 4 componentes:
 *  - El primero es ToDoList que simboliza todo lo que hay que mostrar en la GUI y su estado
 *      son las tareas que hay que mostrar
 * 
 *  - El segundo AddTask. Este se encarga de crear el botón de añadir tarea y gestionar su estado.
 *      Si está abierto se mostrará de una forma y si no pues de otra.
 * 
 *  - El tercero es Task. Representa la tarea en cuestión y al igual que addTask tiene un estado que dependiendo
 *      de como esté se muestra de una forma u otra
 * 
 *  - DisplayTasks no se si es necesario usarlo.
 * 
 *  
 * El problema de todo esto son las funciones que se pasan de un componente a otro. Creo que tiene que  ver
 * con el .bind de los cojones. (Leer en DisplayTasks para más info)
 * 
 * Addtask en teoría funciona bien.
 * 
 */


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

    /*Actualiza la GUI y el localStorage*/
    updateGUI(operation, task){
        let value = this.state.items //= JSON.parse(localStorage.getItem("tasks"))

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

        console.log("Update GUI: " + value)
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
        console.log("Render: " + this.state.items)

        return html`
            <h1>Lista de Tareas</h1>
            <div id="tasksContainer">
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
