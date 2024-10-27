const logo = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.classList.add('hovered');
  });
  
  item.addEventListener('mouseleave', () => {
    item.classList.remove('hovered');
  });
});

const logorede = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.transform = 'scale(1.5)';
  });
  
  item.addEventListener('mouseleave', () => {
    item.style.transform = 'scale(1)';
  });
});