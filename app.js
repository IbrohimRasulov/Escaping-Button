const html = document.querySelector("html");
const button = document.querySelector("button");
const input_1 = document.querySelector('input[type="text"]');
const input_2 = document.querySelector('input[type="email"]');

// Dark Mode Toggle
button.addEventListener("click", () => {
  html.classList.toggle("dark");
});

// Button Mouseover
button.addEventListener("mouseover", () => {
  if (!input_1.checkValidity() || !input_2.checkValidity()) {
    button.classList.toggle("right");
    button.classList.toggle("left");
  }

  // Check Botton Validity
  if (!input_1.checkValidity()) {
    input_1.classList.add('invalid');
  } else {
    input_1.classList.remove('invalid');
  }

  if (!input_2.checkValidity()) {
    input_2.classList.add('invalid');
  } else {
    input_2.classList.remove('invalid');
  }
});
