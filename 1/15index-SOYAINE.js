
  const addItems = document.querySelector('.add-items');
  const itemsList = document.querySelector('.plates');
  var items = JSON.parse(localStorage.getItem('items')) || [];
  
  function addItem(e) {
      e.preventDefault();
      const text = this.querySelector('[name=item]').value;
      const item = {
          text: text,
          done: false
      }
      items.push(item);
      this.reset();
      populateList(items, itemsList);
	  localStorage.setItem('items', JSON.stringify(items));
      console.log(text);
  }

  function populateList(plates = [], plateslist) {
      plateslist.innerHTML = plates.map((plate, i) => {
          return `
            <li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} >
                <label for="item${i}">${plate.text}</label>
            </li>
          `;
      }).join('');
  }

  function toggleDone(e) {
	  if (!e.target.matches('input')) return;
	  const el = e.target;
	  const index = el.dataset.index;
	  items[index].done = !items[index].done;
	  populateList(items, itemsList);
	  localStorage.setItem('items', JSON.stringify(items));
	  console.log(el.dataset.index);
  }
  addItems.addEventListener('submit', addItem);
  itemsList.addEventListener('click', toggleDone);
  populateList(items, itemsList);

    
  // 延伸部分
  const checkAllBtn = document.querySelector('.check-all');
  const unCheckAllBtn = document.querySelector('.uncheck-all');
  const deleteAllBtn = document.querySelector('.delete-all');
  
  checkAllBtn.addEventListener('click', () => {
  	items.forEach(item => {
  		item.done = true;	  
  	});
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  });  
	
  unCheckAllBtn.addEventListener('click', () => {
  	items.forEach(item => {
  		item.done = false;
  	});
  	populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
  });  
	
  deleteAllBtn.addEventListener('click', () => {
  	items = [];
  	populateList(items, itemsList);
   	localStorage.setItem('items', JSON.stringify(items));
  });
