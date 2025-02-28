<script>
// import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
  name: 'About',
  data() {
    return {
      juryMembers: [
        {
          name: 'Алексей Кравченко',
          category: 'Клуб 4CIO',
          image: '/Кравченко.png'
        },

        {
          name: 'Дмитрий Алтухов',
          category: 'ФРИИ',
          image: '/Алтухов.png'
        },
        {
          name: 'Евгений Борисов',
          category: 'ФРИИ',
          image: '/Борисов.png'
        },
        {
          name: 'Кирилл Дубчак',
          category: 'Русклимат',
          image: '/Дубчак.png'
        },
        {
          name: 'Дмитрий Иншаков',
          category: 'KEPT',
          image: '/Иншаков.png'
        }, {
          name: 'Сергей Кирюшин',
          category: 'МИД России',
          image: '/Кирюшин.png'
        }, {
          name: 'Алексей Лобачев',
          category: 'Клуб 4CIO',
          image: '/Лобачев.png'
        }, {
          name: 'Павел Пестряков',
          category: 'Клуб 4CIO',
          image: '/Пестряков.png'
        }, {
          name: 'Вадим Подольный',
          category: 'Клуб 4CIO',
          image: '/Подольный.png'
        }, {
          name: 'Константин Шадрин',
          category: 'Роскосмос',
          image: '/Шадрин.png'
        },

      ]
    };
  }
};
</script>

<template>
  <div class="main_block_page">
    <div>
      <div class="about_bonus">
        <h1 class="text_block_name">О премии</h1>
        <span class="text_infoblock">
          «Хрустальный ландыш» — конкурс, который объединяет талантливых,
          целеустремленных и вдохновляющих женщин, меняющих мир технологий,
          привнося в него профессионализм, креативность и гармонию.
        </span>
      </div>
      <div class="about_bonus_2">
        <div>
          <span class="block_name">1 год</span>
          <span class="block_text">Премия открывает новую главу, отмечая вклад женщин, достигающих выдающихся результатов в сфере ИТ.</span>
        </div>
        <div>
          <span class="block_name">3 этапа</span>
          <span
              class="block_text">Открытый отбор кандидатов, публичное голосование за победителей и подведение итогов.</span>
        </div>
        <div>
          <span class="block_name">+++</span>
          <span class="block_text">Торжественное награждение победителей на первом весеннем Конгрессе «Подмосковные вечера».</span>
        </div>
      </div>
      <div class="timing_block">
        <h1 class="text_block_name">Сроки проведения</h1>
        <div>
          <div class="timing_block_content">
            <div class="event_time_block">
              <div class="left_side">
                <div>1</div>
                <span class="step">Выдвижение кандидатов</span>
              </div>
              <span class="right_side">17 февраля — 7 марта</span>
            </div>
            <div class="event_time_block public">
              <div class="left_side">
                <div>2</div>
                <span class="step">Публичное голосование</span>
              </div>
              <span class="right_side">8 марта — 9 апреля</span>
            </div>
            <div class="event_time_block">
              <div class="left_side">
                <div>3</div>
                <span class="step">Подведение итогов</span>
              </div>
              <span class="right_side">10 апреля — 14 апреля</span>
            </div>
          </div>
        </div>
      </div>
      <div class="jury_block">
        <h1 class="text_block_name">Жюри</h1>
        <span class="jury_description">Совет Клуба 4CIO выбирает номинации, которые являются наиболее актуальными для ИТ-индустрии. Также жюри оценивает кандидатов в соответствии с их заслугами.</span>
        <div class="jury_block_content">
          <div class="jury_cell_block" v-for="member in juryMembers" :key="member.name">
            <div class="photo_block">
              <img class="jury_photo" :src="member.image" :alt="member.name">
            </div>
            <div class="jury">
              <span class="jury_name">{{ member.name }}</span>
              <span class="jury_category">{{ member.category }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main_block_page {
  display: flex;
  flex-direction: column;
  padding-top: 96px;
}

.about_bonus {
  gap: 75px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.text_block_name {
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  font-size: 54px;
  line-height: 54px;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
}

.text_infoblock {
  max-width: 736px;
  width: 100%;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding-left: 32px;
}

.about_bonus_2 {
  gap: 30px;
  display: flex;
  flex-direction: row;
  padding: 24px 32px 34px;
  border-top: 1px solid #040718;
  border-bottom: 1px solid #040718;
  margin-bottom: 60px;
}

.about_bonus_2 div {
  display: flex;
  flex-direction: column;
  gap: 30px;


}

.block_name {
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  font-size: 54px;
  line-height: 54px;


}

.block_text {
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;


}

.timing_block {
  margin-bottom: 60px;
}

.timing_block .text_block_name {
  margin-bottom: 60px;
}

.timing_block_content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-left: 32px;
}

.event_time_block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.left_side {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.right_side {
  color: #81828B;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;


}

.public {
  padding: 24px 0;
  border-top: #040718 solid 1px;
  border-bottom: #040718 solid 1px;
}

.step {
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.left_side div {
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  width: 50px;
  height: 50px;
  border: #040718 solid 1px;
  display: flex;
  align-items: center;
  border-radius: 68px;
  justify-content: center;

}

.jury_block .text_block_name {
  margin-bottom: 75px;
}
.jury_block{
  margin-bottom: 96px;
}

.jury_description {
  display: block;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  width: 610px;
  margin-bottom: 60px;
  padding-left: 32px;
}

.jury_block_content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
}

.jury_cell_block {

  padding: 20px;
  text-align: left;
  border-right: #040718 solid 1px;;
  border-top: #040718 solid 1px;;
  border-left: #040718 solid 1px;;
  border-bottom: white solid 1px;;
  box-sizing: border-box;
  flex: 1 1 calc(25% - 30px);
  max-width: calc(25% - 30px);
}

.jury_cell_block:hover {
  transition: all 0.4s ease;
  border-bottom: #040718 solid 1px;
}

.jury {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.jury_name {

  font-weight: 700;
  font-size: 24px;
  line-height: 30px;


}

.jury_category {

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
}
.photo_block{
  margin-bottom: 24px;
}
.jury_photo{
  width: 200px;
  height: 200px;
  border-radius: 24px;
  object-fit: cover;
}
</style>