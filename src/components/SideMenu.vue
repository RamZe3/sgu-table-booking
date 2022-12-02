<template>
  <aside class="side-menu">
    <nav-bar-side-menu></nav-bar-side-menu>
    <SignInSideMenu></SignInSideMenu>
  </aside>
</template>

<script>
import navBarSideMenu from "@/components/sideMenuComponents/navBarSideMenu";
import SignInSideMenu from "@/components/sideMenuComponents/SignInSideMenu";
import $ from 'jquery'
export default {
  components:{
    navBarSideMenu,SignInSideMenu
  },
  name: "SideMenu",
  mounted() {
    let loginBtn = $('.login-form-open-btn');
    let regBtn = $('.register-form-open-btn');

    $(document).on("click", function(e){
      if(loginBtn.is(e.target)){
        document.querySelector('.side-menu__login-form').style.display = "flex";
        document.querySelector('.side-menu__login-form').style.flexDirection = "column";
        document.querySelector('.side-menu__register-form').style.display = "none"
      }

      if(regBtn.is(e.target)){
        document.querySelector('.side-menu__register-form').style.display = "flex";
        document.querySelector('.side-menu__register-form').style.flexDirection = "column";
        document.querySelector('.side-menu__login-form').style.display = "none"
      }
    })

// бургер:

    let sideMenu = $('.side-menu');
    let menuButton = $('.menu-button');
    let menuButtonItem = $('.menu-button-item');

    $(document).on("click", function(e){
      if ((menuButton.is(e.target) || menuButtonItem.is(e.target)) && !sideMenu.hasClass('_active')) {
        sideMenu.addClass('_active');
      }
      else if (((menuButton.is(e.target) || menuButtonItem.is(e.target)) && sideMenu.hasClass('_active')) || (!(menuButton.is(e.target) || menuButtonItem.is(e.target)) && sideMenu.has(e.target).length === 0 && sideMenu.hasClass('_active'))) {
        sideMenu.removeClass('_active');
      }
    })

// бронь:

    //let table = $('.table');
    //let tableId = 0;
//
    //$(document).on("click", function(e2){
    //  if (table.is(e2.target)) {
    //    tableId = e2.target.id;
    //    let element = document.getElementById(tableId);
    //    if (element.classList.contains("table__free")) {
    //      element.classList.add("table__occupied");
    //      element.classList.remove("table__free");
    //    }
    //  }
    //})

// модал
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
//     let tcloseBtn = $('.close-btn__time-popup');
//     let tableBtn = $('.table');
//     let tsubmitBtn = $('.submit-btn___time-popup');
//     let tpopupBody = $('.popup-body__time-popup');
//     let tpopup = $('.popup__time-popup');
//
//     $(document).on("click", function(e){
//       if (tcloseBtn.is(e.target)) {
//         tpopup.removeClass('_active');
//       }
//       if (tsubmitBtn.is(e.target) || (tpopupBody.is(e.target))) {
//         tpopup.removeClass('_active');
//       }
//       if (tableBtn.is(e.target)) {
//         tpopup.addClass('_active');
//       }
//     })
    let tcloseBtn = $('.close-btn__time-popup');
    let tableBtn = $('.table');
    let tsubmitBtn = $('.submit-btn___time-popup');
    let tpopupBody = $('.popup-body__time-popup');
    let tpopup = $('.popup__time-popup');

    $(document).on("click", function(e){
      if (tcloseBtn.is(e.target)) {
        tpopup.removeClass('_active');
      }
      if (tsubmitBtn.is(e.target) || (tpopupBody.is(e.target))) {
        tpopup.removeClass('_active');
      }
      if (tableBtn.is(e.target)) {
        tpopup.addClass('_active');
      }
    })

  },
}
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>