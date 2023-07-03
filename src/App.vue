<template>
  <logo-header></logo-header>
  <navigation-tabbar></navigation-tabbar>
  <main>
    <router-view></router-view>
</main>
</template>

<script>
import LogoHeader from './components/Header/LogoHeader.vue';
import NavigationTabbar from './components/Header/NavigationTabbar.vue';

export default {
  name: 'App',
  components: { 
    LogoHeader,
    NavigationTabbar,
  },
}
</script>

<style>
main {
    background-color: beige;
}
button:hover{
  cursor: pointer;
}
button:active{
  cursor: default;
}
</style>
