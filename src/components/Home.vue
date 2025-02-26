<script>
import 'typeface-nunito-sans'
export default {
  name: 'Home'
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

    <div class="nominees_block_name">
      <div class="nominees_text">
        <span class="nominees_text_block_1">Номинации</span>
        <span class="nominees_text_block_2">Подробнее</span>
      </div>
    </div>
    <div class="nominees_content_block">
      <div class="nominees_content_row">
        <div class="nominees_cell_block">
          <div class="nominees_icon_place">
            <img src="/1_1.png" alt="ИТ-Женщина 2025">
          </div>
          <div class="nominees_name">ИТ-Женщина 2025</div>
          <div class="nominees_description">
            <span>Главная номинация премии, награждающая выдающихся женщин в ИТ за значительный вклад в индустрию.</span>
          </div>
        </div>
        <div class="nominees_cell_block">
          <div class="nominees_icon_place">

          </div>
          <div class="nominees_name"></div>
          <div class="nominees_description"></div>
        </div>
        <div class="nominees_cell_block">
          <div class="nominees_icon_place">
            <img src="/1_3.png" alt="Инновации в талантах">
          </div>
          <div class="nominees_name">Инновации в талантах</div>
          <div class="nominees_description">
            <span>Для лидеров, создающих уникальные методы поиска, обучения и развития ИТ-специалистов.</span>
          </div>
        </div>
      </div>
      <div class="nominees_content_row">
        <div class="nominees_cell_block">
          <div class="divider"></div>
          <div class="nominees_icon_place">
            <img src="/2_1.png" alt="ИТ в продвижении и продажах">
          </div>
          <div class="nominees_name">ИТ в продвижении и продажах</div>
          <div class="nominees_description">
            <span>Награда для тех, кто развивает бизнес с ИТ-решениями в маркетинге и продажах.</span>
          </div>
        </div>
        <div class="nominees_cell_block">
          <div class="divider"></div>
          <div class="nominees_icon_place">
            <img src="/2_2.png" alt="Технология 2025">
          </div>
          <div class="nominees_name">Технология 2025</div>
          <div class="nominees_description">
            <span>Признание инновационных решений, разработанных и внедренных женщинами в ИТ в этом году.</span>
          </div>
        </div>
        <div class="nominees_cell_block">
          <!-- Пустая ячейка -->
          <div class="nominees_icon_place"></div>
          <div class="nominees_name"></div>
          <div class="nominees_description"></div>
        </div>
      </div>
      <div class="nominees_content_row">
        <div class="nominees_cell_block">
          <div class="divider"></div>
          <div class="nominees_icon_place">
            <img src="/3_1.png" alt="Импортозамещение 2025">
          </div>
          <div class="nominees_name">Импортозамещение 2025</div>
          <div class="nominees_description">
            <span>Отмечает ИТ-инициативы для развития отечественных технологий и снижения зависимости от зарубежных решений.</span>
          </div>
        </div>
        <div class="nominees_cell_block">
          <div class="divider"></div>
          <div class="nominees_icon_place">
            <img src="/3_2.png" alt="Инновации в ИТ">
          </div>
          <div class="nominees_name">Инновации в ИТ</div>
          <div class="nominees_description">
            <span>Награда для женщин, создающих новые технологические продукты и нестандартные решения в сфере ИТ.</span>
          </div>
        </div>
        <div class="nominees_cell_block">
          <div class="divider"></div>
          <div class="nominees_icon_place">
            <img src="/3_3.png" alt="Волшебница финансов">
          </div>
          <div class="nominees_name">Волшебница финансов</div>
          <div class="nominees_description">
            <span>Создающим инновационные финтех-решения и успешно управляющим финансами в ИТ.</span>
          </div>
        </div>
      </div>
    </div>
    <div class="candidates_block_name">
      <div class="candidates_text">
        <span class="candidates_text_block_1">Кандидаты</span>
        <span class="candidates_text_block_2">Все кандидаты</span>
      </div>
    </div>
    <div class="candidates_content_block">
      <div class="candidates_content_row">
        <div class="candidate_cell_block">
          <div class="candidate_photo">
            <img src="/candidate.png" alt="Виктория Морозова">
          </div>
          <div class="candidate">
            <span class="candidate_name">Виктория Морозова</span>
            <span class="candidate_category">Интернет сервисы</span>
          </div>
          <div class="candidate_description">
            <span>/ИТ в продвижении и продажах</span>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
        <div class="candidate_cell_block">
          <div class="candidate_photo">
            <img src="/candidate.png" alt="Виктория Морозова">
          </div>
          <div class="candidate">
            <span class="candidate_name">Виктория Морозова</span>
            <span class="candidate_category">Интернет сервисы</span>
          </div>
          <div class="candidate_description">
            <span>/ИТ в продвижении и продажах</span>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
        <div class="candidate_cell_block">
          <div class="candidate_photo">
            <img src="/candidate.png" alt="Виктория Морозова">
          </div>
          <div class="candidate">
            <span class="candidate_name">Виктория Морозова</span>
            <span class="candidate_category">Интернет сервисы</span>
          </div>
          <div class="candidate_description">
            <span>/ИТ в продвижении и продажах</span>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
      </div>
      <div class="candidates_content_row">
        <div class="candidate_cell_block">
          <div class="candidate_photo">
            <img src="/candidate.png" alt="Виктория Морозова">
          </div>
          <div class="candidate">
            <span class="candidate_name">Виктория Морозова</span>
            <span class="candidate_category">Интернет сервисы</span>
          </div>
          <div class="candidate_description">
            <span>/ИТ в продвижении и продажах</span>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
        <div class="candidate_cell_block">
          <div class="candidate_photo">
            <img src="/candidate.png" alt="Виктория Морозова">
          </div>
          <div class="candidate">
            <span class="candidate_name">Виктория Морозова</span>
            <span class="candidate_category">Интернет сервисы</span>
          </div>
          <div class="candidate_description">
            <span>/ИТ в продвижении и продажах</span>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
        <div class="candidate_cell_block">
          <div class="candidate_photo">
            <img src="/candidate.png" alt="Виктория Морозова">
          </div>
          <div class="candidate">
            <span class="candidate_name">Виктория Морозова</span>
            <span class="candidate_category">Интернет сервисы</span>
          </div>
          <div class="candidate_description">
            <span>/ИТ в продвижении и продажах</span>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
      </div>
    </div>
    <div class="news_block_name">
      <div class="news_text_block">
        <span class="news_text_block_1">Новости</span>
        <span class="news_text_block_2">Все новости</span>
      </div>
    </div>
    <div class="news_content_block">
      <div class="news_content_row_1">
        <div class="news_cell_block first">

          <div class="news_description">
            <span>Конкурс отмечает 15 лет: вспомним яркие моменты прошлых церемоний</span>
          </div>
          <div class="news_under_description">
            <div class="news_date">24 августа</div>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
        <div class="news_cell_block second">

          <div class="news_description">
            <span>Голосуйте за лучших: публичное голосование открыто</span>
          </div>
          <div class="news_under_description">
            <div class="news_date">8 августа</div>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
      </div>
      <div class="news_content_row_2">
        <div class="news_cell_block third">

          <div class="news_description">
            <span>Клуб 4CIO объявил номинантов престижной премии «Хрустальный ландыш»</span>
          </div>
          <div class="news_under_description">
            <div class="news_date">30 июля</div>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
        <div class="news_cell_block fourth">

          <div class="news_description">
            <span>Старт конкурса: принимайте участие иотмечайте лидеров российской ИТ-сферы</span>
          </div>
          <div class="news_under_description">
            <div class="news_date">11 июля</div>
            <img src="/arrow.svg" alt="SVG icon" class="candidate-arrow"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home_banner {
  background-image: radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 70%), url('/flower.png');
  background-size: contain, cover;
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
  color: #91C655;
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
  margin-bottom: 96px;
  justify-content: space-between;
}

.green_block {
  background-color: #689B32;
  border-radius: 24px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 20px;
  height: 240px;
  width: 100%;
  max-width: 500px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-weight: 400;
}

.progress_block {
  border: 1px solid #040718;
  border-radius: 24px;
  width: 900px;
  height: 240px;


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
  transition: width 0.4s ease;

}

.progress_bar_text {
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  height: 4px;

}

.nominees_block_name {
  display: flex;
  margin-bottom: 60px;
  margin-left: 32px;
}

.nominees_text {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nominees_text_block_1 {
  font-size: 54px;
  line-height: 54px;
  font-weight: 700;
  font-family: 'Source Code Pro', monospace;
}

.nominees_text_block_2 {
  display: flex;
  font-family: 'Nunito', sans-serif;
  justify-content: flex-end;
  align-items: flex-end;

}

.nominees_content_block {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.nominees_content_row {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 30px;
  margin-bottom: 30px;
}

.nominees_cell_block {
  flex: 1;
  padding: 20px;
  text-align: left;

}

.nominees_icon_place {
  margin-bottom: 12px;
}

.nominees_icon_place img {
  max-width: 40px;
  height: auto;
}

.nominees_name {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 12px;
  color: #040718;
}

.nominees_description {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 16px;
  line-height: 23px;
  color: #040718;
  width: auto;
}

.divider {
  height: 1px;
  background-color: #040718;
  width: 100%;
  margin-bottom: 20px;
}

.candidates_block_name {
  display: flex;
  margin-bottom: 60px;
  margin-left: 32px;
}

.candidates_text {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.candidates_text_block_1 {
  font-size: 54px;
  line-height: 54px;
  font-weight: 700;
  font-family: 'Source Code Pro', monospace;
}

.candidates_text_block_2 {
  display: flex;
  font-family: 'Nunito', sans-serif;
  align-items: flex-end;
}

.candidates_content_block {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 96px;
}

.candidates_content_row {
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 24px;

}

.candidate_cell_block {
  flex: 1;
  padding: 20px;
  text-align: left;
  border-right: #040718 solid 1px;;
  border-top: #040718 solid 1px;;
  border-left: white solid 1px;;
  border-bottom: white solid 1px;;
  box-sizing: border-box;
}

.candidate_cell_block:hover {
  transition: all 0.4s ease;
  border-left: #040718 solid 1px;
  border-bottom: #040718 solid 1px;
}

.candidate_photo {
  margin-bottom: 24px;
}

.candidate_photo img {
  width: 200px;
  height: 200px;
  border-radius: 24px;
  object-fit: cover;
}

.candidate {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.candidate_description {
  display: flex;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 12px;
  line-height: 15px;
  color: #81828B;
  justify-content: space-between;
  align-items: center;
}

.candidate-arrow {
  opacity: 0;
  width: 30px;
  height: 22px;
  vertical-align: middle;
  margin-left: 8px;
  transition: opacity 0.4s ease;
}

.news_cell_block:hover .candidate-arrow {
  opacity: 1;
}

.candidate_name {
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
}

.candidate_category {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 18px;
  line-height: 23px;
}

.news_block_name {
  display: flex;
  margin-bottom: 60px;

}


.news_content_block {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 96px;
}

.news_content_row_1 {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 24px;
  height: 240px;

}

.news_content_row_2 {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 24px;
  height: 240px;
}

.news_cell_block {
  padding: 24px 32px;
}

.news_content_row_1 .news_cell_block {
  flex: 1;
  display: flex;


  text-align: left;
  flex-direction: column;
  justify-content: space-between;
}

.first {
  border: 1px solid #040718;
  border-left: transparent;
  border-right: transparent;
}

.second {
  border: 1px solid #040718;
  border-right: transparent;
}

.third {
  border: 1px solid #040718;
  border-top: transparent;
  border-right: transparent;
  border-bottom-left-radius: 24px;
}

.fourth {
  border: 1px solid #040718;
  border-top: transparent;
  border-bottom-right-radius: 24px;
}

.news_content_row_2 .news_cell_block {
  flex: 1;
  display: flex;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
}

.news_description {
  font-family: 'Ubuntu Mono', monospace;
  font-size: 24px;
  line-height: 30px;
  color: #040718;
  width: auto;
}

.news_under_description {
  display: flex;
  justify-content: space-between;
  align-items: center;

}

.news_date {
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  color: #333;
}

.news_text_block {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 32px;
}

.news_text_block_1 {
  font-size: 54px;
  line-height: 54px;
  font-weight: 700;
  font-family: 'Source Code Pro', monospace;
}

.news_text_block_2 {
  display: flex;
  font-family: 'Nunito', sans-serif;
  align-items: flex-end;
}

</style>