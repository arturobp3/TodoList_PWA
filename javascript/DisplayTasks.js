import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'
import { Task } from './Task.js'


/**TODO:
 * Si en esta clase, en vez de llamar a Task como ahora, se ponen los ifs que hay en Task y se pone 
 * .bind(null, todo), como está escrito en el primer bloque comentado abajo, funcionaría bien
 * el eliminar un elemento. El problema sería que no se podría controlar el estado de un boton
 * en especifico CREO.
 * 
 * Entonces hay un dilema: 
 *  - Si se pone como he escrito arriba, funciona pero no se controla el estado
 * de un boton en especifico, y se abren todos a la vez.
 * 
 *  - Si se pone como aquí, el tema de las funciones o los bind peta y la interfaz no se actualiza bien.
 * 
 */


export class DisplayTasks extends Component {
    
    render(){
        return this.props.items.map( todo => (
            html`<${Task} 
                    onRemoveClick=${ this.props.onRemoveClick.bind(null, todo) }
                    onAcceptClick=${ this.props.onCancelClick.bind(null, todo) }
                    onCancelClick=${ this.props.onAcceptClick.bind(null, todo) } 
                    text=${todo} 
                />`
        ))
    }
}

/*

            html`<div>
                    <input type="text" value=${todo} />
                    <button onclick=${ this.props.onRemoveClick.bind(null, todo) }> Eliminar </button>
                    <button onclick=${ this.props.onCancelClick.bind(null, todo) }> Cancelar </button>
                    <button onclick=${ this.props.onAcceptClick.bind(null, todo) }> Guardar </button>
                </div>`
                
                
                <${Task} 
                    onRemoveClick=${ this.props.onRemoveClick.bind(null, todo) }
                    onAcceptClick=${ this.props.onCancelClick.bind(null, todo) }
                    onCancelClick=${ this.props.onAcceptClick.bind(null, todo) } 
                    text=${todo}   />`*/