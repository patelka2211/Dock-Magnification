let app_icons = document.querySelectorAll('.app-icons');
console.log(app_icons.length);
let main_dock = document.getElementById('app-dock');
main_dock.style.width = `${app_icons.length*80}px`;