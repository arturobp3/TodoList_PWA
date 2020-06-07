import { html, render, Component } from './preact'

export class Task extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            task: props.task,
            newText: props.task.text
        }
    }

    render() {
        if(this.state.isOpen){
            return html`
                <div class="tasks">
                    <input id="addTaskText" onChange=${this.handleChange.bind(this)} value=${this.state.task.text} /> 
                    <div class="buttons">
                        <button onclick=${ this.onRemoveClick.bind(this) }> Eliminar </button>
                        <button onclick=${ this.onCancelClick.bind(this) }> Cancelar </button>
                        <button onclick=${ this.onAcceptClick.bind(this) }> Guardar </button>
                    </div>
                </div>`
        } else {
            return html`
                <div class="tasks">
                    <button class="task" onclick=${ this.taskClick.bind(this) }> ${this.state.task.text} </button>
                </div>`
        }
    }

    handleChange(e){
        this.setState({newText: e.target.value})
    }
    
    onRemoveClick(e){
        this.props.onRemoveClick(this.state.task)
        this.setState({isOpen : false})
        e.preventDefault();
    }

    onAcceptClick(e){
        if(this.state.newText !== "" && this.state.newText !== this.state.task.text){
            let newTask = {id: this.state.task.id, text: this.state.newText}
            this.props.onSaveClick(newTask)
            this.setState({isOpen: false, task: newTask})
        } else {
            this.setState({isOpen: false})
        }
        e.preventDefault();
    }

    onCancelClick(e){
        this.setState({isOpen: false})
        e.target.value = this.state.text
        e.preventDefault();
    }

    taskClick(e) {
        e.preventDefault()

        this.setState({isOpen : !this.state.isOpen})
    }
}