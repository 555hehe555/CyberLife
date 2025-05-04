document.querySelectorAll('.faq-item .faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq-item');
    item.classList.toggle('open');
  });
});
