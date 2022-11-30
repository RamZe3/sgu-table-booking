<template>
  <menu-buttons></menu-buttons>
    <side-menu></side-menu>
    <div class="wrapper">
      <main class="main">
        Паша делай страницу с контактами
      </main>
    </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import MenuButtons from "@/components/menuButtons";
export default {
  name: "ContactsPage",
  components: {
    MenuButtons,
    SideMenu
  }
}
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>