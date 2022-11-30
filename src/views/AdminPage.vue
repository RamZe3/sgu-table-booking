<template>
  <side-menu></side-menu>
  <div class="wrapper">
    <div class="main">
      <admin-panel></admin-panel>
      <footer-component></footer-component>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import AdminPanel from "@/components/adminPanel";
import $ from 'jquery';
export default {
  components:{
    AdminPanel,
    SideMenu
  },
  name: "AdminPage",
  mounted() {
    if (!this.$store.getters.ISADMIN){
      this.$router.push('/')
    }
    // модал удаления админки
    let dcloseBtn = $('.close-btn__date-popup');
    let dopenBtn = $('.date-popup-open-btn');
    let dsubmitBtn = $('.submit-btn___date-popup');
    let dpopupBody = $('.popup-body__date-popup');
    let dpopup = $('.popup__date-popup');

    $(document).on("click", function(e){
      if (dcloseBtn.is(e.target)) {
        dpopup.removeClass('_active');
      }
      if (dsubmitBtn.is(e.target) || (dpopupBody.is(e.target))) {
        dpopup.removeClass('_active');
      }
      if (dopenBtn.is(e.target)) {
        dpopup.addClass('_active');
      }
    })


// модал
    let delcloseBtn = $('.close-btn__admin-delete-popup');
    let delsubmitBtn = $('.submit-btn___admin-delete-popup');
    let delpopupBody = $('.popup-body__admin-delete-popup');
    let delpopup = $('.popup__admin-delete-popup');

    $(document).on("click", function(e){
      console.log(e.target);
      if (delcloseBtn.is(e.target)) {
        delpopup.removeClass('_active');
      }
      if (delsubmitBtn.is(e.target) || (delpopupBody.is(e.target))) {
        delpopup.removeClass('_active');
      }
      if (dopenBtn.is(e.target)) {
        delpopup.addClass('_active');
      }
    })
  }
}
</script>

<style scoped>

</style>