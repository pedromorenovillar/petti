export function displayItems(array) {
  array.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = item;
    li.className = 'list-items';
    content.appendChild(li);
  });
}
