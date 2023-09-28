const menuItems = document.querySelectorAll('.mission-vision__core-icon');
const contents = document.querySelectorAll('.mission-vision__core-contain');
  
  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetContentId = item.getAttribute('data-target');
      
      // Hide all contents
      contents.forEach(content => {
        content.classList.remove('active');
      });
      
      // Show the targeted content
      const targetContent = document.getElementById(targetContentId);
      targetContent.classList.add('active');
    });
  });