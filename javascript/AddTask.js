import { html, render, Component } from './preact'

export class AddTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            name: props.name,
            task: "",
            updateParent: props.updateParent,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        if(this.state.isOpen){
            return html`
                <button class="addTask"> ${this.state.name} </button>
                <input id="addTaskText" type="text" onChange=${this.handleChange} placeholder="Escribe aquí tu tarea" />
                <div class="addbuttons">
                    <button class="buttons" onclick=${ this.onCancelClick.bind(this) }> Cancelar </button>
                    <button class="buttons" onclick=${ this.onAcceptClick.bind(this) }> Guardar </button>
                </div>`
        } else {
            return html`<button class="addTask" onclick=${ this.addTaskClick.bind(this) }> ${this.state.name} </button>`
        }
    }

    handleChange(e){
        this.setState({task: e.target.value})
    }

    onAcceptClick(e){
        if(this.state.task !== ""){
            this.state.updateParent("add", this.state.task)
            this.setState({isOpen : false})
        }
    }

    onCancelClick(e){
        this.setState({isOpen : false})
    }

    addTaskClick(e) {
        e.preventDefault()
        
        this.setState({isOpen : !this.state.isOpen})
    }
}