const iconMenuElement = document.getElementById('icon-menu');
const menuElement = document.getElementById('menu');

function handleMenu() {
  if (menuElement.classList.contains('show')) {
    menuElement.classList.remove('show');
  } else {
    menuElement.classList.add('show');
  }
}

iconMenuElement.addEventListener('click', handleMenu);
