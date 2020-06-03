import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

export class Task extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            keyLocalStorage: props.keyLocalStorage,
            text: localStorage.getItem(props.keyLocalStorage),
            updateParent: props.updateParent,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        if(this.state.isOpen){
            return html`
                <input type="text" value=${this.state.text} onChange=${this.handleChange} />
                <button onclick=${ this.onRemoveClick.bind(this) }> Eliminar </button>
                <button onclick=${ this.onCancelClick.bind(this) }> Cancelar </button>
                <button onclick=${ this.onAcceptClick.bind(this) }> Guardar </button>`
        } else {
            return html`<button onclick=${ this.taskClick.bind(this) } > ${this.state.text} </button>`
       }
    }

    handleChange(e){
        this.setState({text: e.target.value})
    }

    onRemoveClick(e){
        localStorage.removeItem(this.state.keyLocalStorage)
        this.state.updateParent(localStorage.length)
        this.setState({isOpen : false})
    }

    onAcceptClick(e){

        if(this.state.text !== ""){
            localStorage.setItem(this.state.keyLocalStorage, this.state.text)
            this.state.updateParent(localStorage.length)
            this.setState({isOpen : false})
        }
    }

    onCancelClick(e){
        this.state.text = localStorage.getItem(this.state.keyLocalStorage)
        this.setState({isOpen : false})
    }

    taskClick(e) {
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