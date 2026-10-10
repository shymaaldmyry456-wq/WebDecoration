// -------------------------FAQ-----------------
document.querySelectorAll('.fac_question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isActive = button.classList.contains('active');
  
      // أغلق كل الأجوبة
      document.querySelectorAll('.fac_answer').forEach(a => {
        a.style.maxHeight = null;
      });
  
      // أزل active من كل الأسئلة
      document.querySelectorAll('.fac_question').forEach(q => {
        q.classList.remove('active');
      });
  
      // لو لم يكن مفتوحًا، افتحه
      if (!isActive) {
        answer.style.maxHeight = answer.scrollHeight + "px";
        button.classList.add('active');
      }
    });
  });
  
  