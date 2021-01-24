<template>
  <div id="app">
    <h1>
      {{title}}
    </h1>
    <nav>
      <router-link to="/home">List</router-link> 
      <router-link to="/item">New</router-link> 
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() { 
    return { 
      title: 'vue PetList'
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.items { 
  margin: 0 0 2em 0;
}
.items-line { 
  cursor: pointer; 
  background-color: #c2c3c3; 
  margin: .5em; 
  padding: .3em 0; 
  height: 1.5em; 
  border-radius: 4px;
}

.items-line:hover { 
  color: #607D8B; 
  background-color: white;
  left: .1em; 
}

.item-id { 
  display: inline-block; 
  font-size: small; 
  font-weight: bold; 
  color: #038be5; 
  margin: .5em; 
  padding: .3em 0; 
  height: 1.6em; 
  text-align: left; 
  border-radius: 4px 0 0 4px;
}

label { 
  display: inline-block;
  width: 3em; 
  margin: 0.5em;
  color: #607D8B;
  font-weight: bold;
}

input { 
  height: 2em; 
  font-size: 1em;
  padding-left: .4em;
  width: 5em; 
}

button { 
  margin: 20px; 
  font-family: Arial;
  font-size: 1em; 
  background-color: #eee;
  border: none; 
  padding: 5px 10px; 
  width: 5em;
  border-radius: 4px;
  cursor: pointer; cursor: hand;
}
button:hover { 
  background-color: #cfd8dc;
}
</style>
