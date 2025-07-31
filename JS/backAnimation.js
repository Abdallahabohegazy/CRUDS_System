//Animation background
  particlesJS("particles-js", {
    "particles": {
      "number": { "value": 100, "density": { "enable": true, "value_area": 800 } },
      "color": { "value": "#ffffff" },
      "shape": { "type": "circle" },
      "opacity": { "value": 0.6 },
      "size": { "value": 3 },
      "line_linked": {
        "enable": true,
        "distance": 140,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 4,
        "attract": { "enable": true, "rotateX": 600, "rotateY": 1200 }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "attract" },
        "onclick": { "enable": true, "mode": "push" }
      },
      "modes": {
        "attract": { "distance": 250, "duration": 0.2, "speed": 10 },
        "push": { "particles_nb": 4 }
      }
    },
    "retina_detect": true
  });

