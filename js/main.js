//Vanilla JavaScript
/* const input = document.querySelector('input');
const h1 = document.querySelector('h1');

input.addEventListener('keyup', () => h1.innerHTML = input.value); */

//Vue.js

const vm = new Vue({
    el: 'main',
    data: {
        conectado: false,
        mensaje: 'hola',
        laborales: ['Lunes','Martes','Miercoles','Jueves','Viernes'],
        tareas: [{nombre: 'Hacer algo', prioridad: 'alta'},
            {nombre: 'Estudiar', prioridad: 'media'},
            {nombre: 'Ir al centro', prioridad: 'baja'},
        ],
    }
});