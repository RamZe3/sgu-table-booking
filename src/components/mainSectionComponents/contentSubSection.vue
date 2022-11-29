<template>
  <abous-as></abous-as>
  <slider-component></slider-component>
  <about-kitchen></about-kitchen>
</template>







<script>
import abousAs from "@/components/mainSectionComponents/contentSubSectionComponents/abousAs";
import sliderComponent from "@/components/mainSectionComponents/contentSubSectionComponents/sliderComponent";
import aboutKitchen from "@/components/mainSectionComponents/contentSubSectionComponents/aboutKitchen";
export default {
  components:{
    abousAs,sliderComponent,aboutKitchen
  },
  name: "contentSubSection"
}
</script>

<style scoped>
@import "../../assets/css/styles.css";
</style>