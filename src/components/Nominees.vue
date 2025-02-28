<template>
  <div>
    <div class="about_nominees">
      <div class="about_nominees_text">
        <span class="text_block_name">Кандидаты</span>
        <span class="text_infoblock">
          Список подтвержденных кандидатов премии «Хрустальный ландыш». Каждая номинация призвана выявить и отметить тех, кто внес значительный вклад в развитие отрасли и добился выдающихся результатов.
        </span>
      </div>
      <div class="green_block">
        <div class="green_block_container">
          <span class="green_block_container_text">Предложить кандидатуру</span>
          <span class="green_block_container_plus">+</span>
        </div>
      </div>
    </div>
    <div class="filter">
      <NominationFilter
          :nominations="[
            { id: null, name: 'Все номинации' },
            { id: 1, name: 'ИТ-Женщина 2025' },
            { id: 2, name: 'Инновации в талантах' },
            { id: 3, name: 'ИТ в продвижении и продажах' },
            { id: 4, name: 'Технология 2025' },
            { id: 5, name: 'Импортозамещение 2025' },
            { id: 6, name: 'Инновации в ИТ' },
            { id: 7, name: 'Волшебница финансов' },
          ]"
          @update="handleNominationUpdate"
      />
    </div>
    <div class="nominees_people">

      <div class="candidates-grid">
        <div v-for="(group, id) in groupedCandidates" :key="id" class="nomination-group">
          <div class="group_icon_title">
            <img src="/it-woman.svg" alt="" class="nominees_icon">
            <span class="nomination-title">{{ group.name }}</span>
          </div>
          <div class="candidates-row">
            <swiper-component :options="swiperOptions">
              <div
                  v-for="candidate in group.candidates"
                  :key="candidate.candidate"
                  class="swiper-slide candidate-block"
              >
                <div class="photo_block">
                  <img class="candidate-photo" src="/Кравченко.png" alt=""/>
                </div>
                <div class="candidate-details">
                  <span class="candidate-person">{{ candidate.candidate }}</span>
                  <span class="candidate-description">{{ candidate.company }}</span>
                </div>
              </div>
            </swiper-component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NominationFilter from '../components/NominationFilter.vue';
import SwiperComponent from '../components/SwiperComponent.vue';

export default {
  name: 'Nominees',
  components: {
    NominationFilter,
    SwiperComponent,
  },
  data() {
    return {
      selectedNominationId: null,
      candidates: [
        {id: 1, candidate: 'Анна Иванова', company: 'test'},
        {id: 1, candidate: 'Мария Петрова', company: 'test'},
        {id: 1, candidate: 'Елена Сидорова', company: 'test'},
        {id: 4, candidate: 'Ольга Козлова', company: 'test'},
        {id: 5, candidate: 'Ирина Лебедева', company: 'test'},
        {id: 6, candidate: 'Татьяна Морозова', company: 'test'},
        {id: 7, candidate: 'Наталья Соколова', company: 'test'},
        {id: 2, candidate: 'Ксения Иванова', company: 'test'},
        {id: 3, candidate: 'Светлана Кузнецова', company: 'test'},
      ],
      nominations: [
        {id: 1, name: 'ИТ-Женщина 2025'},
        {id: 2, name: 'Инновации в талантах'},
        {id: 3, name: 'ИТ в продвижении и продажах'},
        {id: 4, name: 'Технология 2025'},
        {id: 5, name: 'Импортозамещение 2025'},
        {id: 6, name: 'Инновации в ИТ'},
        {id: 7, name: 'Волшебница финансов'},
      ],
      swiperOptions: {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      },
    };
  },
  computed: {
    groupedCandidates() {
      if (!this.selectedNominationId) {
        const grouped = {};
        this.candidates.forEach(candidate => {
          if (!grouped[candidate.id]) {
            grouped[candidate.id] = {name: this.getNominationName(candidate.id), candidates: []};
          }
          grouped[candidate.id].candidates.push(candidate);
        });
        return grouped;
      } else {
        const nomination = this.nominations.find(n => n.id === this.selectedNominationId);
        const filteredCandidates = this.candidates.filter(candidate => candidate.id === this.selectedNominationId);
        return {
          [this.selectedNominationId]: {name: nomination.name, candidates: filteredCandidates},
        };
      }
    },
  },
  methods: {
    handleNominationUpdate(nominationId) {
      this.selectedNominationId = nominationId;
      console.log('Выбран ID номинации:', this.selectedNominationId);
      this.$nextTick(() => {
        this.$refs.swiperComponent?.forEach(comp => comp.updateSwiper());
      });
    },
    getNominationName(id) {
      const nomination = this.nominations.find(n => n.id === id);
      return nomination ? nomination.name : 'Неизвестная номинация';
    },
  },
};
</script>


<style scoped>
.about_nominees {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 96px;
  border-bottom: #040718 1px solid;
  margin-bottom: 60px;
}

.about_nominees_text {
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
  max-width: 770px;
  width: 100%;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding-left: 32px;
}

.green_block {
  background-color: #689B32;
  border-radius: 24px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 20px;
  height: 198px;
  width: 100%;
  max-width: 386px;
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
  font-family: 'Ubuntu Mono', sans-serif;
  font-weight: 400;
  color: white;
}

.group_icon_title {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.nominees_icon {
  width: 72px;
  height: 72px;
  border-radius: 24px;

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

.nominees_people {
  padding: 0 32px; /* Отступы, чтобы соответствовать дизайну */
  margin-bottom: 96px;
}

.filter {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px; /* Отступ перед списком кандидатов */
}

.candidates-grid {
  display: flex;
  flex-direction: column; /* Вертикальное расположение групп номинаций */
  gap: 60px; /* Увеличенный промежуток между группами номинаций */
  margin-top: 20px; /* Отступ сверху после фильтра */
}

.nomination-group {
  display: flex;
  flex-direction: column;
  gap: 30px; /* Расстояние между заголовком и строкой кандидатов */
}

.nomination-title {
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  font-size: 54px;
  line-height: 54px;
  color: #040718;
  padding-left: 32px; /* Отступ слева, как в text_block_name */
}

.candidates-row {
  display: flex;
  flex-direction: row; /* Горизонтальное расположение кандидатов */
  flex-wrap: wrap; /* Позволяет переносить элементы на следующую строку, если не помещаются */
  gap: 30px; /* Расстояние между блоками кандидатов, как в jury_block_content */
}

.candidate-block {
  padding: 24px 50px 24px 32px;
  text-align: left;
  border-right: 1px solid #040718;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-bottom: 1px solid #040718;
  box-sizing: border-box;
  transition: all 0.4s ease;
  width: 282px !important;

  display: flex;
  flex-direction: column !important;
}

.candidate-block:hover {
  border-left: 1px solid #040718;
  border-right: 1px solid #040718;
}

.photo_block {
  margin-bottom: 24px;
}

.candidate-photo {
  width: 200px;
  height: 200px;
  border-radius: 24px;
  object-fit: cover;
}

.candidate-details {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px; /* Отступ снизу, как в jury */
}

.candidate-person {
  display: block;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 8px;
}

.candidate-description {

  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

}

/* Адаптивность для мобильных устройств */
@media screen and (max-width: 768px) {
  .about_nominees {
    flex-direction: column;
    align-items: flex-start;
    padding-top: 48px;
  }

  .green_block {
    margin-top: 20px;
    max-width: 100%;
    height: auto;
    padding: 16px;
  }

  .green_block_container {
    padding: 16px;
  }

  .nominees_people {
    padding: 0 20px; /* Уменьшаем отступы на мобильных */
  }

  .filter {
    justify-content: flex-start; /* Выравниваем фильтр слева на мобильных */
  }

  .candidates-grid {
    gap: 40px; /* Уменьшаем промежуток между группами номинаций на мобильных */
  }

  .nomination-title {
    padding-left: 20px;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;


  }

  .candidates-row {
    flex-direction: column;
    gap: 20px;
  }

  .candidate-block {
    flex: 1 1 100%;
    max-width: 100%;
    padding: 16px;
  }

  .candidate-photo {
    width: 150px;
    height: 150px;
  }

  .candidate-person {

  }

  .candidate-description {
    font-size: 16px;
    line-height: 20px;
  }
}
</style>