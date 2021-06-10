// --------------------------------------------
//  variables
// --------------------------------------------

const main = document.querySelector('main')
const faces = document.querySelectorAll('.face')
const letters = document.querySelectorAll('.super-mario-font')
const switchBrothers = document.querySelector('.switch-brothers')
const mediaQuery = window.matchMedia('(max-width: 768px)')

// --------------------------------------------
//  functions
// --------------------------------------------

const moveEyes = event => {
  faces.forEach(face => {
    const eyes = [...face.querySelectorAll('.eye')]

    eyes.forEach(eye => {
      const pupil = eye.querySelector('.inner')

      if (mediaQuery.matches) {
        const mouseX = -(window.innerWidth / 2 - event.pageX) / 60
        const mouseY = -(window.innerHeight / 2 - event.pageY) / 40

        pupil.style.transform = `translateY(${mouseY}px) translateX(${mouseX}px)`
      } else {
        const mouseX = -(window.innerWidth / 2 - event.pageX) / 100
        const mouseY = -(window.innerHeight / 2 - event.pageY) / 25

        pupil.style.transform = `translateY(${mouseY}px) translateX(${mouseX}px)`
      }
    })
  })
}

const moveFace = event => {
  faces.forEach(face => {
    if (mediaQuery.matches) {
      const mouseX = -(window.innerWidth / 2 - event.pageX) / 300
      const mouseY = -(window.innerHeight / 2 - event.pageY) / 200

      face.style.transform = `skewY(${mouseY}deg) skewX(${mouseX}deg)`
    } else {
      const mouseX = -(window.innerWidth / 2 - event.pageX) / 300
      const mouseY = -(window.innerHeight / 2 - event.pageY) / 200

      face.style.transform = `skewY(${mouseY}deg) skewX(${mouseX}deg)`
    }
  })
}

// --------------------------------------------
//  execution
// --------------------------------------------

// add mouse and touch event listeners
main.addEventListener('mousemove', event => { moveEyes(event) })
main.addEventListener('mousemove', event => { moveFace(event) })
main.addEventListener('touchmove', event => { moveEyes(event) })
main.addEventListener('touchmove', event => { moveFace(event) })

// add click event on faces and toggle class for red nose
faces.forEach(face => {
  face.addEventListener('click', _ => {
    const redNose = face.querySelector('.red-nose')
    redNose.classList.add('clicked')

    setTimeout(function () { redNose.classList.remove('clicked') }, 900)
  })
})

// bounce letters after set time
setTimeout(
  function () {
    letters.forEach(letter => {
      letter.classList.add('bounce')
    })
  },
  3500
)

// toggle between mario and luigi
switchBrothers.addEventListener('click', event => {
  const currentInput = event.target.closest('input')

  if (currentInput) {
    const currentFace = document.querySelector(`.${currentInput.id}`)
    const brothers = [...document.querySelectorAll('[data-brother]')]

    brothers.forEach(brother => { brother.style.display = 'none' })

    if (currentInput.id === currentFace.className) {
      currentFace.style.display = 'flex'
    }
  }
})
