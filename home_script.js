particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#ffffff' },
    shape: { type: 'circle' },
    opacity: {
      value: 0.8,
      random: { enable: true, minimumValue: 0.3 },
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false
      }
    },
    size: {
      value: 7,
      random: { enable: true, minimumValue: 1 },
      anim: {
        enable: true,
        speed: 2,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 0.8,
      direction: 'none',
      out_mode: 'out'
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'grab' },
      onclick: { enable: true, mode: 'push' },
      resize: true
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: { opacity: 1 }
      },
      push: { particles_nb: 3 }
    }
  },
  retina_detect: true
});
