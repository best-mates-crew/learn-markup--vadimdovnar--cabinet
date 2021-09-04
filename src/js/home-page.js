
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