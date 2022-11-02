'use strict';

const createDOMbutton = () => {
  const button = document.createElement('button');
  const buttonText = document.createTextNode('1 botón');
  button.appendChild(buttonText);
  document.body.appendChild(button);
};

createDOMbutton();
