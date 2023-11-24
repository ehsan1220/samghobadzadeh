      document.addEventListener('DOMContentLoaded', function () {
        const mainMenu = document.querySelector('.mainMenu');
        const closeMenu = document.querySelector('.closeMenu');
        const openMenu = document.querySelector('.openMenu');
        const menuLinks = document.querySelectorAll('.mainMenu a');
    
        openMenu.addEventListener('click', show);
        closeMenu.addEventListener('click', close);
    
        menuLinks.forEach(link => {
          link.addEventListener('click', close);
        });
        function show() {
          mainMenu.style.display = 'flex';
          mainMenu.style.top = '0';
        }
        function close() {
          mainMenu.style.top = '-100%';
        }
      });
      document.querySelectorAll('.dream img').forEach(Image => {
        Image.onclick = () => {
          document.querySelector('.popup-image').style.display = 'block';
          document.querySelector('.popup-image img').src = Image.getAttribute('src');
        };
      });
      document.querySelector('.popup-image span').onclick = () => {
        document.querySelector('.popup-image').style.display = 'none';
      };
