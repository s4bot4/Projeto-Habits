const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
const day = "01/01"
// const data = {
//   run: ["01-01", "01-02", "01-06", "01-07", "01-08"],
// }
button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today =  new Date().toLocaleDateString('pt-br').slice(0, 5)
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists) {
    alert("Erro! Dia já adicionado ")
    return
  }
    alert("Dia adicionado com sucesso!")
    nlwSetup.addDay(today)
}

function save() {
  const stored = localStorage.setItem('NLW', JSON.stringify(nlwSetup.data))
 console.log(stored)
}

const data = JSON.parse(localStorage.getItem('NLW')) || {}



nlwSetup.setData(data)
nlwSetup.load()