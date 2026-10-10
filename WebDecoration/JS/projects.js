// العناصر نفسها 
const searchInput = document.querySelector('.search-box'); // شريط البحث
const clearButton = document.querySelector('.clear'); // زر المسح
const projectCards = document.querySelectorAll('.pcard'); // الكروت
const notFound = document.querySelector('.noMatch');

function searchItems() {
  // القيمة الجاية من البحث
  const searchItem = searchInput.value.trim().toLowerCase();
  //Show/hide clear button
  clearButton.style.display = searchItem.length > 0 ? 'block' : 'none';

  let hasMatch = false; // نستخدمه لتحديد إذا في نتائج أو لا
  //  فلترة الكروت
  for (let i = 0; i < projectCards.length; i++) {
    let card = projectCards[i];
    let searchData = card.getAttribute('data-search') || '';

    if (searchData.includes(searchItem)) {
      card.style.display = 'flex'; //  تصميم الكارد الأصلي
      hasMatch = true;
    } else 
      card.style.display = 'none';
    
  }

  notFound.style.display = hasMatch ? 'none' : 'block';
}

// Clear search input
function clearSearch() {
  searchInput.value = '';
  clearButton.style.display = 'none';
  notFound.style.display = 'none';
  // اظهر كل الكروت بحيث لو حاجة مخفية
  for (let i = 0; i < projectCards.length; i++) {
    let card = projectCards[i];
    card.style.display = 'flex'; 
  }

  searchInput.focus();
}
//خاص بالناف لما نضغط على منيو
document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('nav ul');

  menuIcon.addEventListener('click', function() {
      navLinks.classList.toggle('show');
  });
});