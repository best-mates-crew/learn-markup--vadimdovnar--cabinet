
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


// --------this logic allows you to change the behavior of list items and change their state to active when hovering and deactivate when focus is lost------
let sidebarMenuLink = document.querySelectorAll('.sidebar-menu-list__link');

for (let i = 0; i < sidebarMenuLink.length; i++) {
    sidebarMenuLink[i].addEventListener('mouseover', changesColorToLight);
    sidebarMenuLink[i].addEventListener('mouseout', changesColorToDark);
}


function changesColorToLight(e) {
    let elem = initElem(e);
    let newSrc = elem.src.replace('.svg', '1.svg');
    elem.src = newSrc;
}

function changesColorToDark(e) {
    let elem = initElem(e);
    let newSrc = elem.src.replace('1.svg', '.svg');
    elem.src = newSrc;
}

function initElem(e) {
    let elem;
    
    switch(e.target.tagName.toLowerCase()) {
        case 'li':
            elem = e.target.firstElementChild;
            break;
        case 'a':
            elem = e.target.previousElementSibling;
            break;
        case 'img' :
            elem = e.target;
            break;
        default:
            break
    }
    return elem;
}
// --------------------------------------------------------------------------------------