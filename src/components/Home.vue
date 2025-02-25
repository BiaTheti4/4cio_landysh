<script>
export default {
  name: 'About'
};
</script>

<template>
  <div>
    <div class="home_banner">
      <div class="banner_text">
        <span class="home_text_black">Премия для <a class="woman_class">выдающихся женщин</a> в ИТ-индустрии</span>
        <span class="home_text_gray">Отмечаем талант, профессионализм и вклад</span>
        <span class="home_text_gray">в развитие технологий</span>
      </div>
    </div>
    <div class="content_container">
      <div class="green_block">
        <div class="green_block_container">
          <span class="green_block_container_text">
            Предложить кандидатуру
          </span>
          <span class="green_block_container_plus">
            +
          </span>
        </div>
      </div>

      <div class="progress_block">

        <div class="progress_block_content">

          <div class="progress_block_buttons">
            <div class="progress_buttons_active">Выдвижение</div>
            <div class="progress_buttons">Голосование</div>
            <div class="progress_buttons">Итоги</div>
          </div>

          <div class="progress_date_block">
            <div class="progress_date">17 февраля – 7 марта</div>
            <div class="progress_date">8 марта – 9 апреля</div>
            <div class="progress_date">10 апреля – 14 апреля</div>
          </div>

          <!--полоски на прогресс-баре (даты)-->
          <div class="progress_date_line">
            <div class="progress_line"></div>
            <div class="progress_line"></div>
            <div class="progress_line"></div>
          </div>

          <div class="progress_bar_block">
            <div class="progress_bar_off"></div>
            <div class="progress_bar_on"></div>
          </div>

          <div class="progress_bar_text">
            <span>прогресс премии</span>
            <span> 10%</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      Номинации
    </div>
  </div>
</template>

<style scoped>
.home_banner {

  background-image: radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%), url('/flower.png');
  background-size: contain, cover; /* Поменяли порядок размеров */
  background-position: center, center;
  background-repeat: no-repeat, no-repeat;
  width: 100%;
  height: 504px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  margin-bottom: 30px;
}

.banner_text {
  color: white;
  text-align: left;
  font-size: 28px;
  display: flex;
  flex-direction: column;
  line-height: 35px;

}

.woman_class {
  color: #91C655; /* Запасной цвет для старых браузеров */
  background: linear-gradient(to right, #91C655, #689B32);
  -webkit-background-clip: text;
  background-clip: text;
}

.home_text_black {
  color: black;
}

.home_text_gray {
  color: #81828B;
}

.content_container {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
}

.green_block {
  background-color: #91C655;
  border-radius: 24px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 20px;
  height: 240px;
  width: 510px;
}

.green_block_container {
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.green_block_container_text {
  text-transform: uppercase;
  font-family: Ubuntu Mono, sans-serif;
  font-weight: 400;
  color: white;
}

.green_block_container_plus {
  color: black;
  background: white;
  width: 29px;
  height: 29px;
  border-radius: 666px;
  display: flex; /* Делаем элемент flex-контейнером */
  justify-content: center; /* Центрируем по горизонтали */
  align-items: center; /* Центрируем по вертикали */
  font-size: 34px;
  font-weight: 400;
}

.progress_block {
  border: 1px solid #040718;
  border-radius: 24px;
  width: 900px;
  height: 240px;
  margin-bottom: 96px;

}

.progress_block_content {
  padding: 24px;
}

.progress_block_buttons {

  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
}

.progress_buttons {
  height: 55px;
  width: 100%;
  background-color: #F5F5F6;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #81828B;
  font-size: 18px;
}

.progress_buttons_active {
  border-radius: 12px;
  height: 55px;
  width: 100%;
  background-color: #F4FAEB;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #689B32;
  font-size: 18px;
}

.progress_date_block {
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 8px;

}

.progress_date {
  color: #040718;
  width: 100%;
  display: flex;
  justify-content: flex-end;

}

.progress_date_line {
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 8px;;
}

.progress_line {
  border-right: #CECED3 dashed 2px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 32px;
}

.progress_bar_block {
  position: relative;
  width: 100%;
  height: 6px;
  margin-bottom: 8px;

}

.progress_bar_off {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #F5F5F6;

}

.progress_bar_on {
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 100%;
  background: linear-gradient(to right, #91C655, #689B32);
  border-radius: 2px;
  transition: width 0.3s ease;

}

.progress_bar_text {
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  height: 4px;
  margin-bottom: 96px;
}

.nominiees_block {
  display: flex;
  justify-content: flex-start;
}

.nominiees_text {

}
</style>