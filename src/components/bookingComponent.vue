<template>
  <div class="content book1">
    <div class="section section--booking">
      <div class="container">
        <div class="section__header section__header--booking">
          <h2 class="section__header-text section__header-text--booking">Забронируйте столик</h2>
        </div>
        <div class="section__content section__content--booking">
          <div class="upper-part">
            <div class="errors">
              <div class="error-wrapper error-wrapper__not-registered">
                <p class="error-text error-text__error-not-registered">Вы не вошли в аккаунт! Войдите в аккаунт!</p>
              </div>
              <div class="error-wrapper error-wrapper__table-is-occupied">
                <p class="error-text error-text__error-table-is-occupied">Стол уже занят!</p>
              </div>
              <div class="error-wrapper error-wrapper__all-tables-are-occupied">
                <p class="error-text error-text__error-all-tables-are-occupied">В этот день все столы заняты!</p>
              </div>
            </div>

            <div class="date-selection-form">
              <div class="input-form-button-wrapper">
                <button data-id="date-popup" class="date-popup-open-btn">Выбрать дату</button>
              </div>
            </div>
          </div>

          <div class="booking-menu">
            <img class="booking-menu-backgroundimg" src="@/assets/img/planrest.jpg" alt="">
            <svg class="booking-menu-svg" viewBox="0 0 1364 833">
              <path
                  :class="{table__occupied: tables[0].isBooked, table__free: !tables[0].isBooked}"
                  :id="tables[0].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table1" d="m 137.3836,426.22174 -71.633907,72.14558 71.633907,71.88974 71.63391,-71.37807 z"></path>
              <path
                  :class="{table__occupied: tables[1].isBooked, table__free: !tables[1].isBooked}"
                  :id="tables[1].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table2 " d="m 340.54977,431.6161 -71.63391,72.14558 71.63391,71.88974 71.63391,-71.37807 z"></path>
              <path
                  :class="{table__occupied: tables[2].isBooked, table__free: !tables[2].isBooked}"
                  :id="tables[2].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table3 "  d="m 559.88672,431.45997 -71.63391,72.14558 71.63391,71.88974 71.63391,-71.37807 z"></path>
              <path
                  :class="{table__occupied: tables[3].isBooked, table__free: !tables[3].isBooked}"
                  :id="tables[3].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table4 "  d="m 775.89267,437.04319 -71.63391,72.14558 71.63391,71.88974 71.63391,-71.37807 z"></path>
              <path
                  :class="{table__occupied: tables[4].isBooked, table__free: !tables[4].isBooked}"
                  :id="tables[4].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table5 "  d="m 971.99146,437.405 -71.63391,72.14558 71.63391,71.88974 71.63384,-71.37807 z"></path>
              <path
                  :class="{table__occupied: tables[5].isBooked, table__free: !tables[5].isBooked}"
                  :id="tables[5].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table6 " d="m 99.134807,159.55639 v 162.44759 l 122.281773,0.36505 0.73222,-162.81264 z"></path>
              <path
                  :class="{table__occupied: tables[6].isBooked, table__free: !tables[6].isBooked}"
                  :id="tables[6].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table7 "  d="m 299.83907,170.6422 v 81.35565 l 81.22773,-0.25583 0.12792,-80.71607 z"></path>
              <path
                  :class="{table__occupied: tables[7].isBooked, table__free: !tables[7].isBooked}"
                  :id="tables[7].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table8 "  d="M 1079.8811,86.728194 V 187.78317 l 101.3109,-0.25584 V 86.216523 85.449017 Z"></path>
              <path
                  :class="{table__occupied: tables[8].isBooked, table__free: !tables[8].isBooked}"
                  :id="tables[8].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table9 "  d="M 1252.6064,86.516252 V 187.57123 l 101.3109,-0.25584 V 86.004581 85.237075 Z"></path>
              <path
                  :class="{table__occupied: tables[9].isBooked, table__free: !tables[9].isBooked}"
                  :id="tables[9].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table10 "  d="m 1252.5693,286.59155 v 101.05498 l 101.3109,-0.25584 v -101.31081 -0.76751 z"></path>

              <path class="table table11"
                    :class="{table__occupied: tables[10].isBooked, table__free: !tables[10].isBooked}"
                    :id="tables[10].id"
                    @click="event => updateActiveTable(event.target.id)"
                    d="m 1002.9232,282.97349 v 101.05498 l 101.3109,-0.25584 v -101.31081 -0.76751 z"></path>
              <path
                  :class="{table__occupied: tables[11].isBooked, table__free: !tables[11].isBooked}"
                  :id="tables[11].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table12 "  d="m 1253.2928,483.41395 v 101.05498 l 101.3109,-0.25584 v -101.31081 -0.76751 z"></path>

              <path
                  :class="{table__occupied: tables[12].isBooked, table__free: !tables[12].isBooked}"
                  :id="tables[12].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table13 "  d="m 82.701052,668.87096 v 80.88117 l 81.905068,-0.20477 v -81.08593 -0.61429 z"></path>
              <path
                  :class="{table__occupied: tables[13].isBooked, table__free: !tables[13].isBooked}"
                  :id="tables[13].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table14 "  d="m 210.27781,667.71198 v 80.88117 l 81.90506,-0.20477 v -81.08593 -0.61429 z"></path>
              <path
                  :class="{table__occupied: tables[14].isBooked, table__free: !tables[14].isBooked}"
                  :id="tables[14].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table15 "  d="m 335.58572,668.76104 v 80.88117 l 81.90506,-0.20477 v -81.08593 -0.61429 z"></path>
              <path
                  :class="{table__occupied: tables[15].isBooked, table__free: !tables[15].isBooked}"
                  :id="tables[15].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table16 "  d="m 463.04304,668.48721 v 80.88117 l 81.90506,-0.20477 v -81.08593 -0.61429 z"></path>
              <path
                  :class="{table__occupied: tables[16].isBooked, table__free: !tables[16].isBooked}"
                  :id="tables[16].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table17 "  d="m 591.48412,668.48721 v 80.88117 l 81.90506,-0.20477 v -81.08593 -0.61429 z"></path>
              <path
                  :class="{table__occupied: tables[17].isBooked, table__free: !tables[17].isBooked}"
                  :id="tables[17].id"
                  @click="event => updateActiveTable(event.target.id)"
                  class="table table18 "  d="m 717.39256,667.76359 v 80.88117 l 81.90506,-0.20477 v -81.08593 -0.61429 z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="date-popup" class="popup popup__date-popup">
    <div class="popup-body popup-body__date-popup">
      <div class="popup-content">
        <div class="popup-title">Выберите дату:</div>
        <div class="input-form">
          <input type="date" id="date" class="input-form-date-value"
                 :value="currentDate.format('YYYY-MM-DD')"
                 :min="minDate.format('YYYY-MM-DD')"
                 :max="maxDate.format('YYYY-MM-DD')"
                 @input="event => updateCurrentDate(event.target.value, 'YYYY-MM-DD')"
                 @change="getTablesByDate">
        </div>
        <div class="popup-сontent-buttons">
          <button class="content-button close-btn close-btn__date-popup">Закрыть</button>
          <button class="content-button submit-btn submit-btn___date-popup" type="submit">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>

  <div id="time-popup" class="popup popuptime-popup">
    <div class="popup-body popup-bodytime-popup">
      <div class="popup-content">
        <div class="popup-title">Выберите время визита:</div>
        <div class="input-form">
          <input type="time" id="time" class="input-form-time-value"
                 :value="currentDate.format('HH:mm')"
                 @input="event => updateCurrentDate(event.target.value, 'HH:mm')"
                 min="09:00" max="21:00" required>
        </div>
        <div class="popup-сontent-buttons">
          <button class="content-button close-btn close-btntime-popup">Закрыть</button>
          <button class="content-button submit-btn submit-btn_time-popup" type="submit" @click="addBooking">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>

</template>


<script>
import $ from 'jquery'
import {useTableBooks} from "@/hooks/useTableBooks";
export default {
  name: "bookingComponent",
  data(){
    return{
      activeTable: "-1",
      Mtables: null,
    }
  },
  watch: {
    activeTable() {
      //alert(this.activeTable)
    }
  },
  methods:{
    updateActiveTable(idT){
      this.$data.activeTable = idT
    },
    addBooking(){
      if (this.$store.getters.ISAUTH === false){
        alert("Вы не зарегестрированы!")
        return
      }
      //alert(this.tables[this.activeTable].isBooked)
      if (this.tables[this.activeTable-1].isBooked === true){
        alert("Стол забронирован!")
        return
      }
      this.bookingTable(this.activeTable)
      setTimeout(this.getTablesByDate, 1000)
    }
  },
  setup(){
    const {currentDate, updateCurrentDate, maxDate, tables, minDate, getTablesByDate, bookingTable, checkTable} = useTableBooks()
    return {currentDate, updateCurrentDate, maxDate, tables, minDate, getTablesByDate, bookingTable, checkTable}
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


    //TODO раскоммнтироваь
 //бронь:

     let table = $('.table');
     //let tableId = 0;

     $(document).on("click", function(e2){
       if (table.is(e2.target)) {
         //tableId = e2.target.id;
         //let element = document.getElementById(tableId);
         //if (element.classList.contains("table__free")) {
         //  element.classList.add("table__occupied");
         //  element.classList.remove("table__free");
         //}
       }
     })


// модал
//     let dcloseBtn = $('.close-btn__date-popup');
//     let dopenBtn = $('.date-popup-open-btn');
//     let dsubmitBtn = $('.submit-btn___date-popup');
//     let dpopupBody = $('.popup-body__date-popup');
//     let dpopup = $('.popup__date-popup');
//
//     $(document).on("click", function(e){
//       if (dcloseBtn.is(e.target)) {
//         dpopup.removeClass('_active');
//       }
//       if (dsubmitBtn.is(e.target) || (dpopupBody.is(e.target))) {
//         dpopup.removeClass('_active');
//       }
//       if (dopenBtn.is(e.target)) {
//         dpopup.addClass('_active');
//       }
//     })

// модал
    let tcloseBtn = $('.close-btntime-popup');
    let tableBtn = $('.table');
    let tsubmitBtn = $('.submit-btn_time-popup');
    let tpopupBody = $('.popup-bodytime-popup');
    let tpopup = $('.popuptime-popup');

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

  }
}
</script>

<style scoped>
  @import "../assets/css/styles.css";
</style>