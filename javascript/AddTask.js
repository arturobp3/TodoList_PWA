import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

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
                <button> ${this.state.name} </button>
                <input type="text" onChange=${this.handleChange} placeholder="Escribe aquí tu tarea" />
                <button onclick=${ this.onAcceptClick.bind(this) }> Guardar </button>
                <button onclick=${ this.onCancelClick.bind(this) }> Cancelar </button>`
        } else {
            return html`<button onclick=${ this.addTaskClick.bind(this) }> ${this.state.name} </button>`
        }
    }

    handleChange(e){
        this.setState({task: e.target.value})
    }

    onAcceptClick(e){
        if(this.state.task !== ""){
            localStorage.setItem(localStorage.length.toString(), this.state.task)
            this.state.updateParent(localStorage.length)
            this.setState({isOpen : false})
        }
    }

    onCancelClick(e){
        this.setState({isOpen : false})
    }

    addTaskClick(e) {
        e.preventDefault()
        switch(this.state.isOpen) {
            case true:
                this.setState({isOpen : false})
                break
            case false:
                this.setState({isOpen : true})
                break
        }
    }
}