const items = document.querySelector('.shopping-items');
const input = document.querySelector('.shopping-footer__input');
const addBtn = document.querySelector('.shopping-footer__add');
let id = 0; // UUID 대신, 초기화

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  const item = createItem(text);
  // console.log(item);
  items.appendChild(item);
  item.scrollIntoView({
    block: 'center',
  });
  input.value = '';
  input.focus();
}

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'shopping-item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class="item">
      <button class="item__check item__check-uncheck">
        <i class="fa-regular fa-square"></i>
        <span class="sr-only">Check and strike through</span>
      </button>
      <span class="item__name">${text}</span>
      <button class="item__delete">
      <i class="fa-solid fa-trash-can" data-id=${id} arai-hidden="true"></i>
      <span class="sr-only">Delete item</span>
      </button>
    </div>`;
  id++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});
input.addEventListener('keypress', (event) => {
  // TODO : keypress는 이제 사용안함 -> key up으로 변경하기
  if (event.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', (event) => {
  // TODO : closest를 사용해서 대체해보기 - delete
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(
      `.shopping-item__row[data-id="${id}"]`
    );
    // console.log(toBeDeleted);
    toBeDeleted.remove();
  }
});

items.addEventListener('click', (event) => {
  // TODO : closest로 check - uncheck 기능 구현하기
  console.log(event.target.closest('button'))

})


