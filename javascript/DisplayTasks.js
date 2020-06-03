import { html, render, Component } from 'https://unpkg.com/htm/preact/standalone.module.js'

export class DisplayTasks extends Component {


    render(){

        return html`
            <div id=${i}>
                <${Task} updateParent=${this.updateGUI} keyLocalStorage=${indexes[i]} />
            </div>`


    }


}