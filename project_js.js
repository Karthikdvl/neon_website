// ---------- FILTER BUTTON FUNCTION ----------
function filterProjects(category) {
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');
  
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
  
    cards.forEach(card => {
      if (category === 'all') {
        card.style.display = 'block';
      } else {
        card.style.display = card.classList.contains(category) ? 'block' : 'none';
      }
    });
  }
  
  