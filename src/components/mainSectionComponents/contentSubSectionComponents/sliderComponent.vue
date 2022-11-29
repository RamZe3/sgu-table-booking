<template>
  <div class="section section--photo-slider">
  <div class="container">
    <div class="section__header section__header--photo-slider">
      <h2 class="section__header-text section__header-text--photo-slider">Галерея</h2>
    </div>
    <div class="section__content section__content--photo-slider">
      <div class="slider-wrapper">
        <button class="slider-button slider-prev"><img src="@/assets/img/leftarrow.png" alt=""></button>
        <div class="slider">
          <div class="slider-line">
            <img src="@/assets/img/res1.jpeg" alt="" height="550" width="900">
            <img src="@/assets/img/res22.jpeg" alt="" height="550" width="900">
            <img src="@/assets/img/res3.png" alt="" height="550" width="900">
            <img src="@/assets/img/res4.jpeg" alt="" height="550" width="900">
          </div>
        </div>
        <button class="slider-button slider-next"><img src="@/assets/img/rightarrow.png.png" alt=""></button>
      </div>
    </div>
  </div>
</div>

</template>


<script>
export default {
  name: "sliderComponent"
}
</script>

<style scoped>
  @import "../../../assets/css/styles.css";
</style>