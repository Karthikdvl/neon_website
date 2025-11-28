// Animate bar fill widths on scroll into view
const bars = document.querySelectorAll('.bar');

function animateBars(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const percent = bar.getAttribute('data-percent');
      const fill = document.createElement('div');
      fill.classList.add('bar-fill');
      fill.style.width = percent;
      bar.appendChild(fill);
      observer.unobserve(bar);
    }
  });
}

const observer = new IntersectionObserver(animateBars, {
  threshold: 0.3,
});

bars.forEach(bar => observer.observe(bar));
