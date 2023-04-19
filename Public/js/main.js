const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}



const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Emiliano Fernandez',
    position: 'CEO',
    photo:
    '/Asset/img/perfil.png',
    text:
    "Tras 15 años de experiencia en el ámbito informático y luego de haber co-creado WIZTECH, PolygonTech y varios proyectos chicos, decido aventurarme nuevamente en la creación de una nueva marca donde pueda volver a destacarme por lo que mejor se hacer y donde pueda ser yo mismo enteramente.",
  },
  {
    name: 'Emiliano Soria',
    position: 'Web Developer',
    photo:
      '/Asset/img/perfil.png',
    text:
    "Diseñamos espacios de trabajo limpios, rápidos, estéticos y eficientes. Para impulsar su negocio con todo el potencial del Marketing Digital.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)