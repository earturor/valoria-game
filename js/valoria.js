// Scripts
// Arturo Rentería
// email: earturordr@outlook.com
const seccionInicio = document.getElementById('seccion-inicio')
const seccionPersonajes = document.getElementById('seccion-personajes')
const seccionBatalla = document.getElementById('seccion-batalla')

const botonInicio = document.getElementById('boton-inicio')
const botonIrABatalla = document.getElementById('boton-ir-a-batalla')
const botonReiniciar = document.getElementById('boton-reiniciar')

const contenedorPersonajes = document.getElementById('contenedor-de-personajes')
const contenedorAtaques = document.getElementById('contenedor-de-ataques')

const spanPersonajeJugador = document.getElementById('personaje-jugador')
const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanDañoJugador = document.getElementById('daño-jugador')
const spanDañoEnemigo = document.getElementById('daño-enemigo')
const spanVidasJugador = document.getElementById('vida-jugador')
const spanVidaEnemigo = document.getElementById('vida-enemigo')

let personajes = []
let opcionDePersonajes
let inputZoltar
let inputThorngrim
let inputSeraphine
let personajeJugador
let ataquesPersonaje
let botonMaldicionDeLasSombras
let botonBolaDeFuego
let botonInvocacionDeElementos
let botonGolpeDeFuria
let botonEspadaDeRayos
let botonCorteFinal
let botonBendicionDivina
let botonFlechasSagradas
let botonLlamaDivina
let botones = []
let vidaJugador = 2000
let vidaEnemigo = 2000


class Personaje {
    constructor(nombre, imagen, vida) {
        this.nombre = nombre
        this.imagen = imagen
        this.vida = vida
        this.ataques = []
    }
}

let zoltar = new Personaje('Zoltar', './assets/zoltar.jpeg', 1000)
let thorngrim = new Personaje('Thorngrim', './assets/thorngrim.jpeg', 1000)
let seraphine = new Personaje('Seraphine', './assets/seraphine.jpeg', 1000)

zoltar.ataques.push(
    {nombre: '☠', id: 'boton-maldicion-de-las-sombras'},
    {nombre: '🔥', id: 'boton-bola-de-fuego'},
    {nombre: '🌋', id: 'boton-invocacion-de-elementos'}
)

thorngrim.ataques.push(
    {nombre: '💪', id: 'boton-golpe-de-furia'},
    {nombre: '⚡', id: 'boton-espada-de-rayos'},
    {nombre: '🗡', id: 'boton-corte-final'}
)

seraphine.ataques.push(
    {nombre: '🍀', id: 'boton-bendicion-divina'},
    {nombre: '🏹', id: 'boton-flechas-sagradas'},
    {nombre: '🌟', id: 'boton-llama-divina'}
)

personajes.push(zoltar, thorngrim, seraphine)


function iniciarJuego() {
    seccionPersonajes.style.display = 'none'
    seccionBatalla.style.display = 'none'

    botonInicio.addEventListener('click', mostrarSeccionPersonajes)

    personajes.forEach((personaje) => {
        opcionDePersonajes = `
        <input type="radio" name="personaje" id=${personaje.nombre} />
        <label class="tarjeta-de-personajes" for=${personaje.nombre}>
            <p>${personaje.nombre}</p>
            <img src=${personaje.imagen} alt=${personaje.nombre} class="imagen-de-personajes">
        </label>
        `
        contenedorPersonajes.innerHTML += opcionDePersonajes

        inputZoltar = document.getElementById('Zoltar')
        inputThorngrim = document.getElementById('Thorngrim')
        inputSeraphine = document.getElementById('Seraphine')
    })

    botonIrABatalla.addEventListener('click', mostrarSeccionBatalla)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}


function mostrarSeccionPersonajes() {
    seccionInicio.style.display = 'none'
    seccionPersonajes.style.display = 'block'
    seccionBatalla.style.display = 'none'
}


function mostrarSeccionBatalla() {
    seccionInicio.style.display = 'none'
    seccionPersonajes.style.display = 'none'
    seccionBatalla.style.display = 'block'
    
    if (inputZoltar.checked) {
        imagenJugador = `<p>${zoltar.nombre}</p><img src=${zoltar.imagen} alt=${zoltar.nombre} class="imagen-de-personajes">`
        spanPersonajeJugador.innerHTML = imagenJugador
        personajeJugador = inputZoltar.id        
    } else if (inputThorngrim.checked) {
        imagenJugador = `<p>Thorngrim</p><img src=${thorngrim.imagen} alt=${thorngrim.nombre} class="imagen-de-personajes">`
        spanPersonajeJugador.innerHTML = imagenJugador
        personajeJugador = inputThorngrim.id
    } else if (inputSeraphine.checked) {
        imagenJugador = `<p>Seraphine</p><img src=${seraphine.imagen} alt=${seraphine.nombre} class="imagen-de-personajes">`
        spanPersonajeJugador.innerHTML = imagenJugador
        personajeJugador = inputSeraphine.id
    } else {
        alert("Selecciona un personaje")
        mostrarSeccionPersonajes()
    }
    
    extraerAtaques(personajeJugador)
    seleccionarPersonajeEnemigo()
}


function mostrarSeccionInicio() {
    seccionInicio.style.display = 'block'
    seccionPersonajes.style.display = 'none'
    seccionBatalla.style.display = 'none'
}


function extraerAtaques(personajeJugador) {
    let ataques
    for (let index = 0; index < personajes.length; index++) {
        if (personajeJugador === personajes[index].nombre) {
            ataques = personajes[index].ataques
        }
    }
    mostrarAtaques(ataques)
}


function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesPersonaje = `
        <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `
        contenedorAtaques.innerHTML += ataquesPersonaje
    })

    botonMaldicionDeLasSombras = document.getElementById('boton-maldicion-de-las-sombras')
    botonBolaDeFuego = document.getElementById('boton-bola-de-fuego')
    botonInvocacionDeElementos = document.getElementById('boton-invocacion-de-elementos')
    
    botonGolpeDeFuria = document.getElementById('boton-golpe-de-furia')
    botonEspadaDeRayos = document.getElementById('boton-espada-de-rayos')
    botonCorteFinal = document.getElementById('boton-corte-final')

    botonBendicionDivina = document.getElementById('boton-bendicion-divina')
    botonFlechasSagradas = document.getElementById('boton-flechas-sagradas')
    botonLlamaDivina = document.getElementById('boton-llama-divina')

    botones = document.querySelectorAll('.BAtaque')
}


function secuenciaAtaque(personajeAleatorio) {   
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            let ataquesZoltar = [aleatorio(50, 250), aleatorio(100, 200), aleatorio(150, 180)]
            let ataquesThorngrim = [aleatorio(50, 250), aleatorio(100, 200), aleatorio(150, 180)]
            let ataquesSeraphine = [aleatorio(50, 250), aleatorio(100, 200), aleatorio(150, 180)]
            ataqueEnemigo = ataqueAleatorioEnemigo(personajeAleatorio)
            mensajeAtaqueEnemigo = 'Ataque del enemigo hace ' + ataqueEnemigo + ' de daño'
            if (e.target.textContent === '☠') {         
                spanDañoJugador.innerHTML = 'Maldición de las sombras ☠ hace ' + ataquesZoltar[0] + ' de daño.'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaEnemigo -= ataquesZoltar[0]
            } else if (e.target.textContent === '🔥') {
                spanDañoJugador.innerHTML = 'Bola de fuego 🔥 hace ' + ataquesZoltar[1] + ' de daño.'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaEnemigo -= ataquesZoltar[1]
            } else if (e.target.textContent === '🌋') { 
                spanDañoJugador.innerHTML = 'Invocación de los elementos 🌋 hace ' + ataquesZoltar[2]  + ' de daño.'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaEnemigo -= ataquesZoltar[2]
            } else if (e.target.textContent ==='💪') {
                spanDañoJugador.innerHTML = 'Golpe de furia 💪 hace ' + ataquesThorngrim[0] + ' de daño'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaEnemigo -= ataquesThorngrim[0]
            } else if (e.target.textContent ==='⚡') {
                spanDañoJugador.innerHTML = 'Espada de rayos ⚡ hace ' + ataquesThorngrim[1] + ' de daño'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaEnemigo -= ataquesThorngrim[1]
            } else if (e.target.textContent ==='🗡') {
                spanDañoJugador.innerHTML = 'Corte final 🗡 hace ' + ataquesThorngrim[2] + ' de daño'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaEnemigo -= ataquesThorngrim[2]                
            } else if (e.target.textContent ==='🍀') {
                spanDañoJugador.innerHTML = 'Bendición divina 🍀 te cura ' + ataquesSeraphine[0] + ' de vida'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaJugador += ataquesSeraphine[0]
            } else if (e.target.textContent ==='🏹') {
                spanDañoJugador.innerHTML = 'Flechas sagradas 🏹 hace ' + ataquesSeraphine[1] + ' de daño'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaEnemigo -= ataquesSeraphine[1]
            } else if (e.target.textContent ==='🌟') {
                spanDañoJugador.innerHTML = 'Llama divina 🌟 hace ' + ataquesSeraphine[2] + ' de daño'
                spanDañoEnemigo.innerHTML = mensajeAtaqueEnemigo
                vidaEnemigo -= ataquesSeraphine[2]
                
            }
            vidaJugador -= ataqueEnemigo            
            spanVidaEnemigo.innerHTML = vidaEnemigo
            spanVidasJugador.innerHTML = vidaJugador
            

            if (vidaEnemigo <= 0) {
                contenedorAtaques.style.display = 'none'
                spanVidaEnemigo.innerHTML = 'PERDEDOR'
                spanVidasJugador.innerHTML = 'GANADOR'
                spanDañoEnemigo.innerHTML = '😵‍💫'
                spanDañoJugador.innerHTML = '¡Haz ganado la batalla!'
            } else if (vidaJugador <= 0) {
                contenedorAtaques.style.display = 'none'
                spanVidaEnemigo.innerHTML = 'GANADOR'
                spanVidasJugador.innerHTML = 'PERDEDOR'
                spanDañoEnemigo.innerHTML = '😈'
                spanDañoJugador.innerHTML = '¡Haz perdido la batalla!'
            } else if (vidaEnemigo == 0 || vidaJugador == 0) {
                contenedorAtaques.style.display = 'none'
                spanVidaEnemigo.innerHTML = 0
                spanVidasJugador.innerHTML = 0
                spanDañoEnemigo.innerHTML = '😑'
                spanDañoJugador.innerHTML = '¡Es un empate!'
            }
        })
    })
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function seleccionarPersonajeEnemigo() {
    let personajeAleatorio = aleatorio(0, personajes.length - 1)

    spanPersonajeEnemigo.innerHTML = `<p>${personajes[personajeAleatorio].nombre}</p><img src=${personajes[personajeAleatorio].imagen} alt=${personajes[personajeAleatorio].nombre} class="imagen-de-personajes">`     

    secuenciaAtaque(personajeAleatorio)
}


function ataqueAleatorioEnemigo(personajeAleatorio) {
    let ataquesZoltar = [aleatorio(50, 250), aleatorio(100, 200), aleatorio(150, 180)]
    let ataquesThorngrim = [aleatorio(50, 250), aleatorio(100, 200), aleatorio(150, 180)]
    let ataquesSeraphine = [aleatorio(50, 250), aleatorio(100, 200), aleatorio(150, 180)]
    if (personajeAleatorio == 0) {
        ataqueEnemigo = ataquesZoltar[aleatorio(0, 2)]
    } else if (personajeAleatorio == 1) {
        ataqueEnemigo = ataquesThorngrim[aleatorio(0, 2)]
    } else if (personajeAleatorio == 2) {
        ataqueEnemigo = ataquesSeraphine[aleatorio(0, 2)]
    }
    return ataqueEnemigo
}


function reiniciarJuego() {
    location.reload()
}

window.addEventListener('load', iniciarJuego)