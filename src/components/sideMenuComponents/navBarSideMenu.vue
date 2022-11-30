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
        <div v-show="this.$store.getters.ISADMIN" class="nav-link nav-link--admin pointer" @click="$router.push('/admin')">админ-панель</div>
      </div>
    </div>
  </div>

</template>



<script>
import {useUser} from "@/hooks/useUser";

export default {
  name: "navBarSideMenu",
  setup(){
    const { checkAdminRole, isAdmin } = useUser()
    return {checkAdminRole, isAdmin}
  },
  watch: {
    isAdmin: function () {
    }
  }
}
</script>

<style scoped>
@import "../../assets/css/styles.css";
</style>