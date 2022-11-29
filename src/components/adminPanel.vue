<template>
  <div class="wrapper">
    <div class="main-admin">
      <div class="content">

        <div class="section section--admin">
          <div class="container">
            <div class="section__header section__header--admin">
              <h2 class="section__header-text section__header-text--admin">Администраторская панель</h2>
            </div>
            <div class="section__content section__content--admin">

              <div class="date-selection-form">
                <div class="to-main-page-wrapper">
                  <a href="/index.html" class="to-main-page-a">Вернуться на главную</a>
                </div>
                <div class="date-popup-button-wrapper">
                  <button data-id="date-popup" class="date-popup-open-btn">Выбрать дату</button>
                </div>
              </div>
              <div class="box-list">
                <div class="list-item list-item--example">
                  <div class="list-item-text number">Стол</div>
                  <div class="list-item-text time">Время</div>
                  <div class="list-item-text client">Имя</div>
                  <div class="list-item-text phone">Телефон</div>
                </div>
                <div class="list-item">
                  <div class="list-item-text number">№4</div>
                  <div class="list-item-text time">19:00</div>
                  <div class="list-item-text client">Валерий</div>
                  <div class="list-item-text phone">+79272339292</div>
                  <button class="list-item-btn list-item-btn__delete-btn admin-delete-popup-open-btn">Удалить</button>
                </div>
                <div class="list-item">
                  <div class="list-item-text number">№4</div>
                  <div class="list-item-text time">19:00</div>
                  <div class="list-item-text client">Коларп</div>
                  <div class="list-item-text phone">+79272339292</div>
                  <button class="list-item-btn list-item-btn__delete-btn admin-delete-popup-open-btn">Удалить</button>
                </div>
                <div class="list-item">
                  <div class="list-item-text number">№4</div>
                  <div class="list-item-text time">19:00</div>
                  <div class="list-item-text client">Валерий</div>
                  <div class="list-item-text phone">+79272339292</div>
                  <button class="list-item-btn list-item-btn__delete-btn admin-delete-popup-open-btn">Удалить</button>
                </div>
                <div class="list-item">
                  <div class="list-item-text number">№4</div>
                  <div class="list-item-text time">19:00</div>
                  <div class="list-item-text client">Валерий</div>
                  <div class="list-item-text phone">+79272339292</div>
                  <button class="list-item-btn list-item-btn__delete-btn admin-delete-popup-open-btn">Удалить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="admin-edit-popup" class="popup popup__admin-edit-popup">
    <div class="popup-body popup-body__admin-edit-popup">
      <div class="popup-content">
        <div class="popup-title">Выберите дату и время визита:</div>
        <div class="input-form">
          <input type="date" id="admin-date" class="input-form-date-value" min="2022-11-17" max="2022-12-31">
          <input type="time" id="admin-time" class="input-form-time-value" min="09:00" max="21:00" required>
        </div>
        <div class="popup-сontent-buttons">
          <button id="close-btn" class="content-button close-btn close-btn__admin-edit-popup">Закрыть</button>
          <button class="content-button submit-btn submit-btn___admin-edit-popup" type="submit">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>

  <!-- <div id="admin-create-popup" class="popup popup__admin-create-popup">
     <div class="popup-body popup-body__admin-create-popup">
         <div class="popup-content">
             <div class="popup-title">Выберите дату и время визита:</div>
             <div class="input-form">
                 <input type="date" id="admin-date" class="input-form-date-value" min="2022-11-17" max="2022-12-31">
                 <input type="time" id="admin-time" class="input-form-time-value" min="09:00" max="21:00" required>
             </div>
             <div class="popup-сontent-buttons">
                 <button id="close-btn" class="content-button close-btn close-btn__admin-create-popup">Закрыть</button>
                 <button class="content-button submit-btn submit-btn___admin-create-popup" type="submit">Подтвердить</button>
             </div>
         </div>
     </div>
  </div>  -->

  <div id="admin-delete-popup" class="popup popup__admin-delete-popup">
    <div class="popup-body popup-body__admin-delete-popup">
      <div class="popup-content">
        <div class="popup-title">Подтвердите удаление бронирования</div>
        <div class="popup-сontent-buttons">
          <button id="close-btn" class="content-button close-btn close-btn__admin-delete-popup">Закрыть</button>
          <button class="content-button submit-btn submit-btn___admin-delete-popup" type="submit">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>

  <div id="date-popup" class="popup popup__date-popup">
    <div class="popup-body popup-body__date-popup">
      <div class="popup-content">
        <div class="popup-title">Выберите дату:</div>
        <div class="input-form">
          <input type="date" id="date" class="input-form-date-value" value="2022-12-20" min="2022-11-17" max="2022-12-31">
        </div>
        <div class="popup-сontent-buttons">
          <button class="content-button close-btn close-btn__date-popup">Закрыть</button>
          <button class="content-button submit-btn submit-btn___date-popup" type="submit">Подтвердить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "adminPanel"
}
</script>

<style scoped>
  @import "../assets/css/styles.css";
</style>