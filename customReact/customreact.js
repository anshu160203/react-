// react har element se tree bnane ki koshish krta hai


// designing customRender
function customRender(reactElement , container) {
    /*
    //sabse pehle DOM element lenge ya create kre ge 
    const domElement = document.createElement(reactElement.type)// element to hogya create
    // injecting a innerHTML
    domElement.innerHTML = reactElement.children
    // 2 kaam hogya element create hogya aur uske aandr uska children add hogya
    // abb isme attributes bhi set krne pde ge
    domElement.setAttribute('href', reactElement.props.href)// ek element set
    domElement.setAttribute('target', reactElement.props.target)// dusra element set

    // abb mainContainer ko isme add kre ge
    container.appendChild(domElement)
    */

    // version 2 of same code 
   const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}


const reactElement = {
    type : 'a', // type btata hh ki elemnent kis type ka hai
    props : { // ye properties btata hai, props ek object hota hai
        href : 'https://google.com', // key value pair, iss se links add kr skte hai
        target : '_blank'
    } , // props ke aandr jitni chahe utni properties add kri jaa skti hai
    children : 'Click me to visit google' // ye hmne ek element bnaya
}


const mainContainer = document.querySelector('#root')

// customRender is just a name of method it can be anything
customRender(reactElement, mainContainer)// injecting one element into another