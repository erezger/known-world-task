<template>
  <div id="app">
    <router-view/>

    <!-- Notify message when winner is set  -->
    <notifications group="world"/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  @import url('https://fonts.googleapis.com/css?family=Cinzel|Montserrat&display=swap');
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1, h2, h3, h4 {
  font-family: 'Cinzel', serif;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #a58e64;
  color: #55442b;
  font-family: 'Playfair Display SC', serif;
}

.mt-20 {
  margin-top: 20px;
}

// SCROLLBAR
::-webkit-scrollbar {
  display: none;
}

::-webkit-scrollbar-button, ::-webkit-scrollbar-corner {
  display: none;
}

::-webkit-scrollbar {
  display: block;
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.04);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
}


/* Handle */
::-webkit-scrollbar-thumb {
  background: #775f3c;
  border-radius: 30px;
  /* Handle on hover */
  &:hover {
    background: darken(#775f3c, 5%);
  }
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: darken(#775f3c, 5%);
}
</style>
