<template>


  <div class="side-menu__logo-and-navbar">
    <div class="side-menu__logo logo-text pointer" @click="$router.push('/')">
      нир
    </div>
    <div class="side-menu__navbar">
      <div class="side-menu__navbar-item">
        <div class="nav-link nav-link--menu pointer" @click="$router.push('/menu')">меню</div>
      </div>
      <div class="side-menu__navbar-item">
        <div class="nav-link nav-link--booking pointer" @click="$router.push('/booking')">забронировать</div>
      </div>
      <div class="side-menu__navbar-item">
        <div class="nav-link nav-link--contacts pointer" @click="$router.push('/contacts')">контакты</div>
      </div>
      <div class="side-menu__navbar-item">
        <div class="nav-link nav-link--admin pointer" @click="$router.push('/admin')">админ-панель</div>
      </div>
    </div>
  </div>

</template>



<script>
export default {
  name: "navBarSideMenu"
}
</script>

<style scoped>
@import "../../assets/css/styles.css";
</style>