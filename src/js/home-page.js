
// ------this logic allows you to expand and collapse the menu lists in the sitebar when you click on the bird-----
let elementsOpenAndClose = document.querySelectorAll(".sidebar-menu-sibtitle__img");

for (let i = 0; i < elementsOpenAndClose.length; i++) {
    elementsOpenAndClose[i].addEventListener('click', (e) => { 
        e.target.parentElement.nextElementSibling.classList.toggle('hiden'); 
        e.target.classList.toggle('sidebar-menu-sibtitle__img_reverse');
    });
}
// -------------------------------------------------------------------------------


// ---------------------this logic hides the sidebar------------------------
let sidebarFooter = document.querySelector('#sidebar-footer');

sidebarFooter.onclick = function() {
    let sidebar = document.querySelector('#sidebar');
    let contentBox = document.querySelector('#content')
    if (!sidebar.classList.contains('hiden')) {
        sidebar.classList.add('hiden');
        contentBox.classList.add('content_max');
    }
}
// ----------------------this logic hides the sidebar------------------------


let sidebarMenuLink = document.querySelectorAll('.sidebar-menu-list__link');

for (let i = 0; i < sidebarMenuLink.length; i++) {
    sidebarMenuLink[i].addEventListener('mouseover', changesColorToLight)
    sidebarMenuLink[i].addEventListener('mouseout', changesColorToDark)
}

let count = 0;
function changesColorToLight(e) {
    let elem = initElem(e);
    let newSrc = elem.src.replace('.svg', '1.svg');
    elem.src = newSrc;
    // count++;
    // if (e.target.firstElementChild.tagName.toLowerCase() === 'img' || count === 1) {
    //     console.log(e.target.firstElementChild.tagName.toLowerCase());
    //     let newSrc = e.target.firstElementChild.src.replace('.svg', '1.svg');
    //     e.target.firstElementChild.src = newSrc;
    //     e.target.removeEventListener('mouseout', changesColorToDark);
    //     // e.target.removeEventListener('mouseover', changesColorToLight);
    // } else {count > 1} {
    //     console.log(count);
    //     e.target.addEventListener('mouseout', changesColorToDark);
    // }
    // count = 0;
}

function changesColorToDark(e) {
    let elem = initElem(e);
    let newSrc = elem.src.replace('1.svg', '.svg');
    elem.src = newSrc;
    
    
    // count++;
    // if (e.target.firstElementChild.tagName.toLowerCase() === 'img' || count > 1) {
    //     console.log(count);
    //     // e.target.addEventListener('mouseover', changesColorToLight);
    //     // e.target.addEventListener('mouseout', changesColorToDark);
    //     let newSrc = e.target.firstElementChild.src.replace('1.svg', '.svg');
    //     console.log(newSrc);
    //     e.target.firstElementChild.src = newSrc;
    // } 
    // else if (e.target.previousElementSibling.tagName.toLowerCase() === 'a') {
    //     e.target.parentElement.addEventListener('mouseover', changesColorToLight);
    //     let newSrc = e.target.previousElementSibling.src.replace('1.svg', '.svg');
    //     console.log(newSrc);
    //     e.target.previousElementSibling.src = newSrc;
    // }
}

function initElem(e) {
    let elem;
    if (e.target.tagName.toLowerCase() === 'li') {
        elem = e.target.firstElementChild;
        return elem;
    } else if (e.target.tagName.toLowerCase() === 'a'){
        elem = e.target.previousElementSibling;
        return elem;
    } else if (e.target.tagName.toLowerCase() === 'img') {
        elem = e.target;
        return elem;
    }
}