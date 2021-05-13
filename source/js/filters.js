var buttonsFilterOpen = document.querySelectorAll('.ideal-travelers-list__filter-title-button');
var filterLists = document.querySelectorAll('.ideal-travelers-list__filter-list');

for(let i=0; i < filterLists.length; i++) {
  if (i != 3) {
    filterLists[i].classList.remove('filter-list--nojs');
  } else {
    filterLists[i].classList.remove('transport-list--nojs');
  }
}

for(let i=0; i < buttonsFilterOpen.length; i++) {
  buttonsFilterOpen[i].addEventListener('click', function() {
    if (filterLists[i].classList.contains('filter-list--hide') || filterLists[i].classList.contains('transport-list--hide')) {
      if (i != 3) {
        filterLists[i].classList.remove('filter-list--hide');
        buttonsFilterOpen[i].classList.add('ideal-travelers-list__filter-title-button--opendropdown');
      } else {
        filterLists[i].classList.remove('transport-list--hide');
        buttonsFilterOpen[i].classList.add('ideal-travelers-list__filter-title-button--opendropdown');
      }
    } else {
      if (i != 3) {
        filterLists[i].classList.add('filter-list--hide');
        buttonsFilterOpen[i].classList.remove('ideal-travelers-list__filter-title-button--opendropdown');
      } else {
        filterLists[i].classList.add('transport-list--hide');
        buttonsFilterOpen[i].classList.remove('ideal-travelers-list__filter-title-button--opendropdown');
      }
    }
  });
}
