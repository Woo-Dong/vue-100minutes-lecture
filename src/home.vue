<template>
	<div>
		<div class="items">
			<p>
				All : <span>{{items.length}}</span> 
			</p>
			<div class="items-line" v-bind:key="item.id" v-for="item in items" v-on:click="updateItem(item.id)"> 
				<span class="item-id">{{item.id | uppercase}}</span> {{item.name}} 
			</div>
		</div>
		<div>
			<p>
				Available : <span>{{available.length}}</span> 
			</p>
			<div v-bind:key="item.id" v-for="item in available" v-on:click="updateItem(item.id)"> 
				<span>{{item.id | uppercase}}</span> {{item.name}} 
			</div>
		</div>
	</div>
</template>

<script>
import { ItemService } from './services/item.service'

export default {
	name: 'Home', 
	data() { 
		return { 
			items: [], 
		}
	}, 
	created() { 
		ItemService.getItems(); 
		this.items = ItemService.items; 
	},
	methods: { 
		updateItem(id) { 
			this.$router.push('item/' + id)
		}
	}, 
	filters: { 
		uppercase: function (value) { 
			if (!value) return '';
			return value.toString().toUpperCase(); 
		}
	}, 
	computed: { 
		available: function() { 
			return this.items.filter(item => item.available); 
		}
	}
  
}
</script>

<style scoped>

</style>