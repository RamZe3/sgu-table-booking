<template>

  <div class="side-menu__user-login">
    <div class="side-menu__login-button-wrapper">
      <button class="login-form-open-btn">Войти</button>
    </div>
    <div class="side-menu__register-button-wrapper">
      <button class="register-form-open-btn">Создать аккаунт</button>
    </div>
    <div class="side-menu__login-form">
      <div class="side-menu__login-form-inputs">
        <input type="tel" class="input-value input-value--login-value" placeholder="Телефон">
        <input type="password" class="input-value input-value--password" placeholder="Пароль">
      </div>
      <div class="side-menu__login-form-button-wrapper">
        <button class="login-btn-confirm">Войти в аккаунт</button>
      </div>
    </div>
    <div class="side-menu__register-form">
      <div class="side-menu__register-form-inputs">
        <input type="text" class="input-value input-value--name-value" placeholder="Имя">
        <input type="tel" class="input-value input-value--login-value" placeholder="Телефон">
        <input type="text" class="input-value input-value--password" placeholder="Пароль">
        <input type="text" class="input-value input-value--password" placeholder="Подтвердите пароль">
      </div>
      <div class="side-menu__register-form-button-wrapper">
        <button class="create-account-btn-confirm">Зарегистрироваться</button>
      </div>
    </div>
    <div class="side-menu__errors">
      <div class="side-menu__error side-menu__error--wrong-data">
        <p class="error-text error-text--wrong-data">Неверный логин или пароль!</p>

      </div>
      <div class="side-menu__error side-menu__error--wrong-format">
        <p class="error-text error-text--wrong-format">Некорректный ввод!</p>
      </div>
    </div>
  </div>

</template>



<script>
export default {
  name: "SignInSideMenu"
}
</script>

<style scoped>
  @import "../../assets/css/styles.css";
</style>