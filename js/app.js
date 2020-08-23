/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
const section3 = document.querySelector('#section3')
const section4 = document.querySelector('#section4')
const section5 = document.querySelector('#section5')
const navbar = document.querySelector('#navbar__list')
const all = document.querySelectorAll('section')
let counter = all.length

/**
 * End Global Variables

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
document.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < counter; i++) {
    const data = all[i].getAttribute('data-nav')
    const list = document.createElement('li')
    const link = document.createElement('a')
    const sectionName = document.createTextNode(data)
    link.appendChild(sectionName)
    link.href = '#section' + (i + 1)
    list.appendChild(link)
    navbar.appendChild(list)
  }
})

// Scroll to section on link click

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      })
    })
  })
})

// Set sections as active

document.addEventListener('scroll', function (e) {
  const viewport = window.scrollY
  if (viewport >= 471 && viewport < 1041) {
    removeClasses()
    removeNav()
    section1.classList.add('your-active-class')
  }

  if (viewport >= 1041 && viewport < 1612) {
    removeClasses()
    section2.classList.add('your-active-class')
  }
  if (viewport >= 1612 && viewport < 2182) {
    removeClasses()
    section3.classList.add('your-active-class')
  }
  if (viewport >= 2182 && viewport < 2752) {
    removeClasses()
    section4.classList.add('your-active-class')
  }
  if (viewport >= 2752 && viewport < 3322) {
    removeClasses()
    section5.classList.add('your-active-class')
  }
})

//method to remove all classes
function removeClasses() {
  section1.classList.remove('your-active-class')
  section2.classList.remove('your-active-class')
  section3.classList.remove('your-active-class')
  section4.classList.remove('your-active-class')
  section5.classList.remove('your-active-class')
}

//method to highlight nav links while scrolling
$(document).ready(function () {
  $(document).on('scroll', onScroll)

  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault()
    $(document).off('scroll')

    $('a').each(function () {
      $(this).removeClass('active')
    })
    $(this).classList.add('active')

    var target = this.hash,
      menu = target
    $target = $(target)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        'swing',
        function () {
          window.location.hash = target
          $(document).on('scroll', onScroll)
        }
      )
  })
})

function onScroll(event) {
  var scrollPos = $(document).scrollTop()
  $('a').each(function () {
    var currLink = $(this)
    var refElement = $(currLink.attr('href'))
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $('a').removeClass('active')
      currLink.addClass('active')
    } else {
      currLink.removeClass('active')
    }
  })
}
