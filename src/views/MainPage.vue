<template>
  <menu-buttons></menu-buttons>
  <side-menu></side-menu>
  <main-section></main-section>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import mainSection from "@/components/mainSection";
import menuButtons from "@/components/menuButtons";
import $ from 'jquery';
export default {
  name: "MainPage",
  components:{
    SideMenu,mainSection,menuButtons
  },
  mounted() {
    let loginBtn = $('.login-form-open-btn');
    let regBtn = $('.register-form-open-btn');

    $(document).on("click", function(e){
      console.log(e.target);
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

// слайдер

    let offset = 0;
    const sliderLine = document.querySelector('.slider-line');

    document.querySelector('.slider-next').addEventListener('click', function(){
      offset = offset + 900;
      if (offset > 2700) {
        offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
    })

    document.querySelector('.slider-prev').addEventListener('click', function(){
      offset = offset - 900;
      if (offset < 0) {
        offset = 2700;
      }
      sliderLine.style.left = -offset + 'px';
    })

// бургер:
  /*
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

   */

  }


}
</script>

<style scoped>
@import "../assets/css/styles.css";
</style>