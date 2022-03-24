<template>
  <TheNavbar/>
  <router-view/>
</template>

<script>
  import TheNavbar from '@/components/TheNavbar'
  export default {
    components: {
        TheNavbar
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
}

nav {
  padding: 3rem;

}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
  text-decoration: none;
}
</style>
