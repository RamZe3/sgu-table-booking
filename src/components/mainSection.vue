<template>
  <div class="wrapper">
    <main class="main">
      <header-component></header-component>
      <content-sub-section></content-sub-section>
      <footer-component></footer-component>
    </main>
  </div>

</template>

<script>
import headerComponent from "@/components/mainSectionComponents/headerComponent";
import contentSubSection from "@/components/mainSectionComponents/contentSubSection";
import footerComponent from "@/components/mainSectionComponents/footerComponent";
export default {
  components:{
    headerComponent,contentSubSection,footerComponent
  },
  name: "mainSection"
}
</script>

<style scoped>
  @import "../assets/css/styles.css";
</style>