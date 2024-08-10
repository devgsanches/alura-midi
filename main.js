const teclaPom = document.querySelector('.tecla_pom')
const teclaClap = document.querySelector('.tecla_clap')
const teclaTim = document.querySelector('.tecla_tim')
const teclaPuff = document.querySelector('.tecla_puff')
const teclaSplash = document.querySelector('.tecla_splash')
const teclaToim = document.querySelector('.tecla_toim')
const teclaPsh = document.querySelector('.tecla_psh')
const teclaTic = document.querySelector('.tecla_tic')
const teclaTom = document.querySelector('.tecla_tom')


function somTeclaPom() {
  document.querySelector('#som_tecla_pom').play()
}

function somTeclaClap() {
  document.querySelector('#som_tecla_clap').play()
}

function somTeclaTim() {
  document.querySelector('#som_tecla_tim').play()
}

function somTeclaPuff() {
  document.querySelector('#som_tecla_puff').play()
}

function somTeclaSplash() {
  document.querySelector('#som_tecla_splash').play()
}

function somTeclaToim() {
  document.querySelector('#som_tecla_toim').play()
}

function somTeclaPsh() {
  document.querySelector('#som_tecla_psh').play()
}

function somTeclaTic() {
  document.querySelector('#som_tecla_tic').play()
}

function somTeclaTom() {
  document.querySelector('#som_tecla_tom').play()
}

teclaPom.addEventListener('click', somTeclaPom)
teclaClap.addEventListener('click', somTeclaClap)
teclaTim.addEventListener('click', somTeclaTim)
teclaPuff.addEventListener('click', somTeclaPuff)
teclaSplash.addEventListener('click', somTeclaSplash)
teclaToim.addEventListener('click', somTeclaToim)
teclaPsh.addEventListener('click', somTeclaPsh)
teclaTic.addEventListener('click', somTeclaTic)
teclaTom.addEventListener('click', somTeclaTom)

