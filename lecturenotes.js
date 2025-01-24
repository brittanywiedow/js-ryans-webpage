//Lecture notes were getting long for the site.js file so I moved them to this file


/*
Selecting Elements by Tag video=
setTimeout(() => {
    const h1 = document.querySelector('h1')
    h1.textContent = 'Hi there'
    h1.style.textDecoration = 'underline'
    h1.style.fontWeight = 'bold'
}, 3000)
*/

/*
Exercise 1: Modify "Main Content Section" to red and store the element in a variable called "mainContentSection"=
const mainContentSection = document.querySelector('h2')
mainContentSection.style.color = 'red'
*/

/*
Selecting Elements by ID and Class video=
NOTE: querySelector gives more options so getElementById is faster but not preferred
const aboutA = document.getElementById('#about')
aboutA.style.color = 'orange'

ID = #
Class = .

querySelector only grabs the FIRST one it finds

const aboutA = document.querySelector('#about')
aboutA.style.color = 'orange'

const contactA = document.querySelector('#contact')
contactA.style.color = 'cornflowerblue'

const activeA = document.querySelector('.active')
activeA.style.color = 'lightyellow'
*/

/*
Combining Selectors video=
NOTE: By adding a tag in front of #about, it will only select the a tag with the id of about but this is not how Ryan does this because tags could change (for example, changing a tag to button)

NOTE: This is helpful in the case of the class active because there could be multiple active classes on the page and what if we want the second one (h2.active) and not the first one that is grabbed by default (a.active) 
const activeA = document.querySelector('h2.active')
activeA.style.color = 'cornflowerblue'

NOTE: Combining selectors can help look for things, for example if we wanted to find the active class within the section we would use "section " (note the space after section) and to be more specific and only select the thing DIRECTLY inside the section then we would use a > to select the direct child of the section

const aboutA = document.querySelector('a#about')
aboutA.style.color = 'orange'

const active = document.querySelector('section > .active')
active.style.color = 'cornflowerblue'

We can narrow the search of .querySelector by changing "document" to the tag we want it to look at, for example "section", "main", "footer", etc.

const span = document.querySelector('section span')     TO
const span = section.querySelector('span')
*/

/*
QuerySelectorAll video=
const activeElements = document.querySelectorAll('.active')

//add border
//activeElements.forEach(el => el.style.border = '1px solid red')
//Cant just say activeElements.style.border = '1px solid red' because it is a list/group of elements and not just one element, so we need to be more specific as to which element we want to add the border to

For loop:
for (let i =0; i < activeElements.length; i++) {
    activeElements[i].style.border = '1px solid red'
}
*/

/*
Exercise 2: Underline the link in the footer "Fork this project on GitHub." (style.textDecoration = underline) two sepearate ways.
1- through site.js only, don't change the html
2- add id/class to something in the footer and then access it via the id or class

#1
const forkA = document.querySelector('footer a')
forkA.style.textDecoration = 'underline'

#2
const forkA = document.querySelector('#fork')
forkA.style.textDecoration = 'underline'
*/

/*
Selecting the Body and Title Elements video=
If you wanted to select everything within the body you could use querySelector('body') but it is not necessary because you can just use document.body
similarly, if you wanted to select the title you could use querySelector('title') but you can just use document.title

document.body.style.backgroundColor = 'lightgray'
document.title = "Ryan's website"
*/

/*
Selecting Parent and Ancestor Elements video=
How to access things around an element for example, 
A user mouses over/clicks on something and we want something around that element to happen.

const contact = document.querySelector('#contact')

//When user mouses over the contact link, change the background color to green
contact.addEventListener('mouseover',() => {
    document.body.style.backgroundColor = 'green'   
})

*NOTE
In the video, Ryan used a console.log to check the parentElement and the consoel returned the nav bar. Super cool to keep in  mind. 
console.log(contact.parentElement)


const contact = document.querySelector('#contact')
//What if we just want the parent element to change? (In this case, the nav bar)
contact.addEventListener('mouseover',() => {
    contact.parentElement.style.backgroundColor = 'lightblue'
})

const contact = document.querySelector('#contact')
//What if we wanted the thing around it to change? method = closest, it looks outward so its like query selector but backwards, instead of searching inside the element, it searches outward from the element

contact.closest('nav').style.backgroundColor = 'lightblue'
*/
