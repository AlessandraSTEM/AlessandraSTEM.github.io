let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #304051;">Desarrollo sitios web y programo en diversos lenguajes. Soy un bonito intento de chica STEM.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
