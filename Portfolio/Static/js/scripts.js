window.addEventListener('scroll', function() {
  var button = document.querySelector('.top-btn');
  if (window.scrollY > 200) { // Ajusta este valor según sea necesario para determinar cuándo mostrar el botón
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});


  function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  }

  function toggleMenu() {
    var sidebar = document.getElementById('sidebar');
    var menuButton = document.querySelector('.menu');
    sidebar.classList.toggle('active');
    menuButton.classList.toggle('hidden');
  }

 
