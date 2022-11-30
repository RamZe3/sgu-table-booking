<template>

  <div v-show="!this.$store.getters.ISAUTH" class="side-menu__user-login">
    <div class="side-menu__login-button-wrapper">
      <button class="login-form-open-btn">Войти</button>
    </div>
    <div class="side-menu__register-button-wrapper">
      <button class="register-form-open-btn">Создать аккаунт</button>
    </div>
    <div class="side-menu__login-form">
      <div class="side-menu__login-form-inputs">
        <input type="tel" class="input-value input-value--login-value" placeholder="Телефон"
               :value="user.phone" @input="event => user.phone = event.target.value">
        <input type="password" class="input-value input-value--password" placeholder="Пароль"
               :value="user.password" @input="event => user.password = event.target.value">
      </div>
      <div class="side-menu__login-form-button-wrapper">
        <button class="login-btn-confirm" @click="login">Войти в аккаунт</button>
      </div>
    </div>
    <div class="side-menu__register-form">
      <div class="side-menu__register-form-inputs">
        <input type="text" class="input-value input-value--name-value" placeholder="Имя"
               :value="user.login" @input="event => user.login = event.target.value">
        <input type="tel" class="input-value input-value--login-value" placeholder="Телефон"
               :value="user.phone" @input="event => user.phone = event.target.value">
        <input type="text" class="input-value input-value--password" placeholder="Пароль"
               :value="user.password" @input="event => user.password = event.target.value">
        <input type="text" class="input-value input-value--password" placeholder="Подтвердите пароль">
      </div>
      <div class="side-menu__register-form-button-wrapper">
        <button class="create-account-btn-confirm" @click="register">Зарегистрироваться</button>
      </div>
    </div>
    <div v-if="this.$store.getters.ERRORMESSAGE != null" class="side-menu__errors">
      <div class="side-menu__error side-menu__error--wrong-data">
        <p class="error-text error-text--wrong-data">{{ this.$store.getters.ERRORMESSAGE }}</p>
      </div>
<!--      <div class="side-menu__error side-menu__error&#45;&#45;wrong-format">-->
<!--        <p class="error-text error-text&#45;&#45;wrong-format">Некорректный ввод!</p>-->
<!--      </div>-->
    </div>
  </div>

  <div v-show="this.$store.getters.ISAUTH" class="side-menu__user-login">
    <div class="side-menu__login-button-wrapper">
      <div class="base-form-open">Привет, {{ this.$store.getters.LOGIN }}</div>
    </div>

    <div class="side-menu__login-button-wrapper">
      <div class="base-form-open-btn" @click="signOut">Выйти</div>
    </div>

  </div>

</template>



<script>
import {useUser} from "@/hooks/useUser";

export default {
  name: "SignInSideMenu",
  methods: {
    updateInput(event) {
      //this.$emit('update:modelValue', event.target.value)
      this.$emit('updateInput', event.target.value)
    }
  },
  setup(){
    const {checkAuth, signOut, register, getLoginByID, login, user} = useUser()
    return {checkAuth, signOut, register, getLoginByID, login, user}
  }
}
</script>

<style scoped>
  @import "../../assets/css/styles.css";
</style>