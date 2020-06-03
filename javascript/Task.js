import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

export class Task extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            text: props.text,
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

    /*TODO: Funciona mal. la idea aquí sería tener el texto que se muestra y luego otro campo
    * para lo que se está escribiendo. Si no el cancelar cambia el texto del botón
    */
    handleChange(e){
        this.setState({text: e.target.value})
    }


    //TODO: No se borra apropiadamente. Me vale verga el hombre que inventó JS y los bind
    onRemoveClick(e){
        //this.state.updateParent("delete", this.state.text)
        this.props.onRemoveClick(this.state.text)
        this.setState({isOpen : false})
        e.preventDefault();
    }

    onAcceptClick(e){
        if(this.state.text !== ""){
            this.props.onAcceptClick(this.state.text)
            this.setState({isOpen : false})
        }
        e.preventDefault();
    }

    onCancelClick(e){
        this.setState({isOpen : false})
        e.preventDefault();
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