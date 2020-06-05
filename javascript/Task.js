import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

export class Task extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            text: props.text,
            newText: props.text
        }
    }

    render() {
        if(this.state.isOpen){
            return html`
                <input type="text" onChange=${this.handleChange.bind(this)} value=${this.state.text} /> 
                <button onclick=${ this.onRemoveClick.bind(this) }> Eliminar </button>
                <button onclick=${ this.onCancelClick.bind(this) }> Cancelar </button>
                <button onclick=${ this.onAcceptClick.bind(this) }> Guardar </button>`
        } else {
            return html`<button onclick=${ this.taskClick.bind(this) }> ${this.state.text} </button>`
        }
    }

    handleChange(e){
        this.setState({newText: e.target.value})
    }

    
    onRemoveClick(e){
        this.props.onRemoveClick(this.state.text)
        this.setState({isOpen : false})
        e.preventDefault();
    }

    onAcceptClick(e){
        if(this.state.newText !== ""){
            this.props.onAcceptClick(this.state.newText)
            this.setState({isOpen: false})
            this.setState({text: this.state.newText})    
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