<script>
export default {
  name: 'Footer',
};
</script>

<template>
  <div class="footer_block">
    <div class="footer_first_block">
      <div class="first_block">
        <div>
          <div class="name_with_logo">
            <span>Хрустальный</span>
            <img src="/logo.png" alt="Логотип" class="logo">
            <span>Ландыш</span>
          </div>
          <div class="under_logo_block">
            <span>
            Признаем достижения лучших
            </span>
            <span>
            женщин в ИТ-индустрии
            </span>
          </div>
        </div>
      </div>
      <div class="second_block">
        <div class="text_block">
          <span>О премии</span>
          <span>Номинации</span>
          <span>Кандидаты</span>
          <span>Лауреаты</span>
          <span>Новости</span>
          <span>Контакты</span>
        </div>
      </div>
      <div class="third_block">
        <div class="text_block">
          <span>Телеграм</span>
          <span>Чат в телеграм</span>
          <span>Вконтакте</span>
          <span>YouTube</span>
        </div>
      </div>
      <div class="fourth_block">
        <div class="footer_green_block">
          <div class="footer_green_content">
            <span>Связаться с нами</span>
            <div class="tg_logo">
              <img src="/button.png" alt="" class="green_block_img">
            </div>
          </div>
        </div>
      </div>
    </div>





  <div class="footer_second_block">
    <span>Политика конфидицеальности</span>
    <span>© 2025 Клуб 4CIO</span>
  </div>
  </div>
</template>

<style scoped>
.footer_block {
  display: flex;
  flex-direction: column;
}

.footer_first_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 60px;
  padding: 32px 0;

}



.name_with_logo {
  display: flex;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 700;
  font-size: 20px;
  color: #040718;
  align-items: center;
  margin-bottom: 16px;
}

.under_logo_block {
  display: flex;
  flex-direction: column;
}

.under_logo_block span {
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
}
.text_block{
  font-family: 'Ubuntu Mono', monospace;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
}

.footer_green_block{
  width: 260px;
  height: 120px;
  padding: 24px;
  background-color: #689B32;
  border-radius: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}
.footer_green_content{
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  width:100%

}
.footer_green_content span{
  color: white;
  text-transform: uppercase;
  display: flex;
  align-items: flex-end;
}
.green_block_img{
  width: 29px;
  height: 29px;
  display: flex;
  align-items: flex-end;
}
.footer_second_block{
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #040718;
  padding: 21px 32px;
}
</style>