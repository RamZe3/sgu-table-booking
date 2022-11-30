<template>
  <menu-buttons></menu-buttons>
  <side-menu></side-menu>
  <div class="wrapper">
    <main class="main">
      А меню когда сделаешь, Павел?
    </main>
  </div>

</template>

<script>
import SideMenu from "@/components/SideMenu";
import MenuButtons from "@/components/menuButtons";
export default {
  name: "MenuPage",
  components: {MenuButtons, SideMenu}
}
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>