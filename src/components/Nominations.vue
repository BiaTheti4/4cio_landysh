<script>


export default {
  name: 'Nominations',
  data() {
    return {
      nominations: [
        {
          id: 1,
          name: 'ИТ-Женщина 2025',
          description_1: 'Номинация предназначена для женщин, которые не просто работают в ИТ, а формируют его будущее. Они вдохновляют коллег, становятся ролевыми моделями и своим трудом, идеями и достижениями продвигают индустрию вперед. ',
          description_2: 'Лауреатами этой премии могут стать как руководители, так и разработчики, аналитики, исследователи или любые другие профессионалы, внесшие значимый вклад в сферу технологий',
          image: '/it-woman.svg',
          isExpanded: true,
        },
        {
          id: 2,
          name: 'Инновации в талантах',
          description_1: 'Технологии — это люди, и именно талантливые специалисты делают индустрию сильной. Эта номинация посвящена женщинам, которые привносят инновации в HR и управление талантами: внедряют передовые методики найма, развивают корпоративную культуру, создают эффективные программы обучения и развития специалистов в ИТ. Их работа помогает формировать сильные команды, которые меняют цифровой мир.',
          description_2: '',
          image: '/innovations.svg',
          isExpanded: false,
        },
        {
          id: 3,
          name: 'ИТ в продвижении и продажах',
          description_1: 'Технологии сегодня — это не только код, но и мощный инструмент продвижения. Эта номинация предназначена для женщин, которые успешно применяют цифровые инструменты в маркетинге, рекламе и продажах.',
          description_2: 'Они внедряют ИИ-аналитику, используют big data для таргетинга, автоматизируют процессы и выводят бренды на новый уровень с помощью передовых ИТ-решений.\n',
          image: '/sales.svg',
          isExpanded: false,
        },
        {
          id: 4,
          name: 'Технология 2025',
          description_1: 'Эта номинация посвящена самым передовым технологиям, которые были созданы или существенно развиты в 2025 году.',
          description_2: 'Искусственный интеллект, кибербезопасность, облачные вычисления, блокчейн, биотехнологии — любая область, где появилось нечто действительно революционное. Победительницей станет женщина, чье решение стало настоящим технологическим прорывом.\n',
          image: '/technology.svg',
          isExpanded: false,
        },
        {
          id: 5,
          name: 'Импортозамещение 2025',
          description_1: 'В условиях глобальных вызовов критически важно развивать собственные ИТ-решения. ',
          description_2: 'Эта номинация создана для женщин, которые внесли значительный вклад в импортозамещение, разработав отечественное программное обеспечение, платформы или инструменты, способные заменить зарубежные аналоги. Победительницей станет лидер, чьи проекты укрепляют цифровую независимость страны.\n',
          image: '/import.svg',
          isExpanded: false,
        },
        {
          id: 6,
          name: 'Инновации в ИТ',
          description_1: 'Инновации — это то, что двигает мир вперед. В этой номинации соревнуются те, кто разрабатывает принципиально новые технологии, кардинально меняет подходы к разработке ПО, автоматизации бизнес-процессов, внедрению цифровых сервисов. ',
          description_2: 'Победительницей станет женщина, чьи идеи открывают новые горизонты для индустрии.',
          image: '/innovations_it.svg',
          isExpanded: false,
        },
        {
          id: 7,
          name: 'Волшебница финансов',
          description_1: 'Финансы — это не просто цифры, а стратегический ресурс, который требует технологичных решений.',
          description_2: 'Эта номинация посвящена тем, кто управляет финансами в ИТ-сфере, внедряет цифровые финансовые технологии, создает финтех-продукты, разрабатывает инновационные модели инвестирования и управления бюджетами в технологических компаниях. Победительница — настоящая волшебница, превращающая цифры в рост и развитие.\n',
          image: '/magic.svg',
          isExpanded: false,
        },
      ],
    }
  },
  methods: {
    expandBlockStyle(nomination){
      return nomination.isExpanded ? 'display: flex' : 'display: none';
    },
    changeExpand(nomination){
      console.log(nomination)
      nomination.isExpanded = !nomination.isExpanded;

    }
  },
};

</script>

<template>
  <div>
    <h1 class="text_block_name">Номинации</h1>
    <div class="nominations_block">
      <div class="nominations_content">
        <div class="nomination_block_content" v-for="nomination in nominations" :key="nomination.id" >

          <div class="name_block" @click="changeExpand(nomination)">
          <span class="nomination_name">
          {{ nomination.name }}
            </span>
            <img class="list_expand_arrow" src="/arrow_list.svg" alt="" >
          </div>
          <div class="nomination_block" :style="expandBlockStyle(nomination)">
            <img class="image" :src="nomination.image" alt="">
            <div class="right_block">

              <span class="nomination_description">{{ nomination.description_1 }}</span>
              <span class="nomination_description">{{ nomination.description_2 }}</span>
              <div class="button_redirect">
                <img src="/Plus.png" alt="">
                <span class="button_text">Выдвинуть кандидата</span>
              </div>

            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text_block_name {
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  font-size: 54px;
  line-height: 54px;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-top: 96px;
  padding-bottom: 24px;
}

.name_block {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.nominations_content{
  margin-bottom: 96px;
}
.nomination_block_content {
  align-items: center;
  border-bottom: #040718 1px solid;

  padding-right: 32px;
  padding-left: 32px;


}

.nomination_block {
  display: flex;
  flex-direction: row;
}



.nomination_name {
  height: 83px;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  align-content: center;
}

.list_expand_arrow {
  width: 20px;
  height: 20px;
}

.right_block {
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  padding-left: 20px;
  max-width: 678px;
  width: 100%;
  padding-top: 33px;
  padding-bottom: 33px;
}

.image {
  background: linear-gradient(44.27deg, rgba(104, 155, 50, 0) -33.93%, #E6F3D4 120.83%);
  width: 456px;
  height: 276px;
  border-radius: 24px;
}

.nomination_description {
  text-wrap: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;


  letter-spacing: 0;


}

.button_redirect {
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 179px;
  height: 34px;
  border-radius: 100px;
  padding: 8px 16px;
  align-items: center;
  border: 1px solid #689B32
}

.button_text {

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.5px;
  text-align: center;
  color: #040718;
  word-spacing: 3px;
}
</style>