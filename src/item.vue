<template>
	<div> 
		<div class="item-input"> 
			<label for="id">ID</label> 
			<input v-model="item.id" placeholder="ID" id="id" /> 
		</div>
		<div class="item-input"> 
			<label for="name">Name</label> 
			<input v-model="item.name" placeholder="Name" id="name" /> 
		</div>
		<div class="item-input"> 
			<label for="available">Available</label> 
			<input v-model="item.available" type="checkbox" placeholder="Available" id="available" /> 
		</div>

		<button @click="saveItem">Save</button> 
		<button @click="deleteItem">Delete</button>

	</div>
</template>

<script>
import Item from './classes/item'
import { ItemService } from './services/item.service'

export default {
	name: 'Item', 
	data() { 
		return { 
			editable: false, 
			item: new Item('', '', true) 
		}
	}, 
	mounted() { 
		var id = this.$route.params.id; 
		if (id) { 
			this.editable = true; 
			this.item = ItemService.getItem(id); 
		}
	}, 
	methods: { 
		saveItem() { 
			console.log(this.item) 

			if (this.editable) { 
				ItemService.saveItems(); 
			} else { 
				ItemService.addItem(this.item); 
			}
			this.$router.push('/home'); 
		},
		deleteItem() { 
			ItemService.deleteItem(this.item); 
			this.$router.push('/home'); 
		} 
	}
}
</script>

<style scoped>
.item-input { 
	margin:2em; 
}
</style>