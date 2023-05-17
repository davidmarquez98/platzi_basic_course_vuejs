Vue.component("counter",{
    data(){
        return{
            counter: 0
        }
    },
    template:`
    <div>
        <slot name="message"></slot>
        <button @click="counter++">Click Me!</button>
        <span>Contador: {{ counter }}</span>
    </div>
    `
})

new Vue({
    el: '#app',
    data(){
        return{
            text: 'Contador'
        }
    }
})