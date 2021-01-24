export const ItemService = { 
	items: [], 

	getItems() { 
		if(localStorage.getItem('items')) { 
			this.items = JSON.parse(localStorage.getItem('items')); 
		}
	}, 
	saveItems() { 
		localStorage.setItem('items', JSON.stringify(this.items)); 
	}, 
	getItem(id) { 
		return this.items.find(item => item.id == id); 
	}, 
	addItem(item) { 
		this.items.push(item); 
		this.saveItems(); 
	}, 
	deleteItem(item) { 
		this.items.splice(this.items.indexOf(item), 1); 
		this.saveItems(); 
	}, 
}