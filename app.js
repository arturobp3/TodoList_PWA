import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'
import { AddTask } from './javascript/AddTask.js'
import { Task } from './javascript/Task.js'
import { DisplayTasks } from './javascript/DisplayTasks.js';



class ToDoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            needsUpdate: true,
            length: localStorage.length,
            items: []
        }
        this.updateGUI = this.updateGUI.bind(this);
    }

    updateGUI(value){
        //this.setState({length: value})
        //TODO: actualizar una lista items
    }

    /*createTasks = () =>{
        let items = []
        let count = 0
        let indexes = Object.keys(localStorage).sort()

        console.log("Longitud: " + this.state.length)
        for (let i = 0; i < this.state.length; i++) {
            console.log("Iteracion: " + i)
            console.log("Valor: " + localStorage.getItem(indexes[i]))
            console.log("Clave: " + indexes[i])
            console.log("Array: " + Object.keys(localStorage))
            console.log(Object.keys(localStorage).sort())

            items.push(html`<div id=${i}><${Task} updateParent=${this.updateGUI} keyLocalStorage=${indexes[i]} /></div>`)
    
            console.log(count)
            console.log("------------------------------")

        }

        console.log("-------------FIN--------------")
        return items
    }*/

    render(){
        console.log("Render")
        return html`
            <h1>Lista de Tareas</h1>
            <div id="tasksContainer">
                <div id="areaSup">
                    <${AddTask} updateParent=${this.updateGUI} name="Añadir tarea" />
                </div>
                <div id="areaInf">
                    <${DisplayTasks} updateParent=${this.updateGUI} items=${this.state.items} />
                    <!--${this.createTasks}-->
                </div>
            </div>` 
    }
}

   
render(html`<${ToDoList} />`, document.body)
