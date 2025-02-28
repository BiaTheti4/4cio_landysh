<script>
export default {
  name: 'NewsDetail',
  data() {
    return {
      news: {
        id: null,
        title: 'Конкурс отмечает 15 лет: вспомним яркие моменты прошлых церемоний ',
        date: '2025-03-12',
        content:
            '<p>На&nbsp;торжественной церемонии <a href="https://pv2024.4cio.ru/" target="_blank">XVIII Конгресса &laquo;Подмосковные вечера&raquo;</a> были названы лауреаты ИТ-премии &laquo;Хрустальный&nbsp;Ёж&raquo;, вручаемой за&nbsp;выдающиеся достижения в&nbsp;различных отраслях&nbsp;ИТ и&nbsp;цифровой трансформации.</p>\n' +
            '\n' +
            '<p>Представляем <a href="https://hedgehog.4cio.ru/laureates" target="_blank">победителей</a> этого года:</p>\n' +
            '\n' +
            '<ul>\n' +
            '\t<li>За&nbsp;вклад в&nbsp;развитие Клуба&nbsp;&mdash; Павел Алферов, Школа Управления СКОЛКОВО</li>\n' +
            '\t<li>Хранитель мудрости&nbsp;&mdash; Павел Пестряков, Клуб 4CIO</li>\n' +
            '\t<li>За&nbsp;вклад в&nbsp;Учебник Клуба 4CIO&nbsp;&mdash; Евгений Борисов, ФРИИ</li>\n' +
            '\t<li>За&nbsp;вклад в&nbsp;достижение технологического суверенитета&nbsp;&mdash; Михаил Соломонов, УМАРТА</li>\n' +
            '\t<li>Энергетика позитива&nbsp;&mdash; Александр Валов, АЛРОСА ИТ</li>\n' +
            '\t<li>Ум, честь и&nbsp;совесть рынка ИТ&nbsp;&mdash; Александр Александров, ВТБ</li>\n' +
            '\t<li>За&nbsp;развитие экосистемы ИТ&nbsp;&mdash; Давид Мартиросов, БАЗИС, Ростелеком</li>\n' +
            '\t<li>Создатель новых сообществ&nbsp;&mdash; Леонид Головин, Газпромтранс</li>\n' +
            '\t<li>ИТ-событие года&nbsp;&mdash; Вадим Кулик, ВТБ</li>\n' +
            '\t<li>Пионер устойчивого развития&nbsp;&mdash; Кирилл Алифанов, Аэропорт Шереметьево</li>\n' +
            '</ul>\n' +
            '\n' +
            '<p>Поздравляем всех лауреатов с&nbsp;их&nbsp;заслуженными наградами! Благодарим вас за&nbsp;неоценимый вклад и&nbsp;лидерские качества, которые вдохновляют всех нас на&nbsp;новые свершения!</p>\n'
      }
    }
  },
  methods: {
    formatDate(dateString) {
      const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
      ];
      const date = new Date(dateString);
      const day = date.getDate();
      const month = months[date.getMonth()];
      return `${day} ${month}`;
    },
    check() {
      const id = this.$route.params.id;
      console.log(id)
    },
    async fetchNews() {
      const id = this.$route.params.id;
      try {
        const response = await fetch(`/api/news/${id}`);
        const data = await response.json();
        this.news = {
          id: data.id || id,
          title: data.title || 'Без заголовка',
          date: data.date || '',
          content: data.content || '<p>Новость не найдена</p>'
        };
      } catch (error) {
        console.error('Ошибка:', error);
        this.news.content = '<p>Не удалось загрузить новость</p>';
      }
    },

  },
  mounted() {
    this.check();
  }
};
</script>

<template>
  <div class="full_block">
    <div class="title_block">
      <span class="date">{{ formatDate(news.date) }}</span>
      <h1 class="text_block_name">{{ news.title }}</h1>
    </div>
    <div class="news_content" v-html="news.content"></div>
  </div>
</template>

<style scoped>

.title_block {
  padding-top: 96px;
  border-bottom: #040718 1px solid;
  padding-bottom: 24px;
}

.text_block_name {
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  font-size: 54px;
  line-height: 54px;
}

.date {
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
}

.news_content {
  padding-top: 60px;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  padding-left: 32px;
  max-width: 720px;
  margin-right: auto;

}
.full_block {
  margin-bottom: 96px;
}
</style>