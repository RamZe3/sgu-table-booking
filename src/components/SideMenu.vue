<template>
  <aside class="side-menu">
    <nav-bar-side-menu></nav-bar-side-menu>
    <SignInSideMenu></SignInSideMenu>
  </aside>
</template>

<script>
import navBarSideMenu from "@/components/sideMenuComponents/navBarSideMenu";
import SignInSideMenu from "@/components/sideMenuComponents/SignInSideMenu";
export default {
  components:{
    navBarSideMenu,SignInSideMenu
  },
  name: "SideMenu"
}
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>