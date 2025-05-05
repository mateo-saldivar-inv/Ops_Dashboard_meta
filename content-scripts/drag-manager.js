(function () {
    window.enableDragging = function (element, header) {
      let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
      header.onmousedown = dragMouseDown;
  
      function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }
  
      function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
  
        let newTop = element.offsetTop - pos2;
        let newLeft = element.offsetLeft - pos1;
  
        if (newTop < 0) newTop = 0;
        if (newLeft < 0) newLeft = 0;
        if (newTop + element.offsetHeight > window.innerHeight) newTop = window.innerHeight - element.offsetHeight;
        if (newLeft + element.offsetWidth > window.innerWidth) newLeft = window.innerWidth - element.offsetWidth;
  
        element.style.top = newTop + "px";
        element.style.left = newLeft + "px";
      }
  
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    };
  })();
  