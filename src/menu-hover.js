const hoverMenu = () => {
    const subMenuLists = document.querySelectorAll('.sub-menu__list');
    const dropdowns = document.querySelectorAll('.sub-header__dropdrown');
    const delayTime = 1000; // Adjust the delay time in milliseconds (e.g., 300ms)
    
    let timeoutIds = new Array(subMenuLists.length).fill(null);

    subMenuLists.forEach((subMenuList, index) => {
      let isHovering = false;
    
      subMenuList.addEventListener('mouseenter', () => {
        clearTimeout(timeoutIds[index]); // Cancel any existing timeouts for this dropdown
        hideAllDropdowns(); // Hide other dropdowns immediately
        isHovering = true;
        updateDropdownVisibility(index);
      });
    
      subMenuList.addEventListener('mouseleave', () => {
        isHovering = false;
        setDropdownVisibilityWithDelay(index);
      });
    
      dropdowns[index].addEventListener('mouseenter', () => {
        clearTimeout(timeoutIds[index]); // Cancel any existing timeouts for this dropdown
        hideAllDropdowns(); // Hide other dropdowns immediately
        isHovering = true;
        updateDropdownVisibility(index);
      });
    
      dropdowns[index].addEventListener('mouseleave', () => {
        isHovering = false;
        setDropdownVisibilityWithDelay(index);
      });
    
      function setDropdownVisibilityWithDelay(index) {
        // Set a timeout to change opacity after the delayTime
        timeoutIds[index] = setTimeout(() => {
          updateDropdownVisibility(index);
        }, delayTime);
      }
    
      function updateDropdownVisibility(index) {
        dropdowns[index].style.opacity = isHovering ? '1' : '0';
        dropdowns[index].style.pointerEvents = isHovering ? 'auto' : 'none';
      }
    });
    
    function hideAllDropdowns() {
      dropdowns.forEach(dropdown => {
        dropdown.style.opacity = '0';
        dropdown.style.pointerEvents = 'none';
      });
    }
}


export default hoverMenu;