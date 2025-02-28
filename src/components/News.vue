<script>
export default {
  name: 'News',
  data() {
    return {
      news: {
        2025: [
          {id: 5775, title: 'новость 1', date: '2025-03-12'},
          {id: 5773, title: 'новость 2', date: '2025-03-11'},
          {id: 5772, title: 'новость 3', date: '2025-03-13'},
          {id: 5771, title: 'новость 4', date: '2025-03-10'}
        ],
        2024: [
          {id: 570, title: 'новость 1', date: '2024-03-12'},
          {id: 575, title: 'новость 2', date: '2024-03-11'},
          {id: 576, title: 'новость 3', date: '2024-03-13'},
          {id: 577, title: 'новость 4', date: '2024-03-10'}
        ],
        2023: [
          {id: 57, title: 'новость 1', date: '2023-03-12'},
          {id: 56, title: 'новость 2', date: '2023-03-11'},
          {id: 55, title: 'новость 3', date: '2023-03-13'},
          {id: 54, title: 'новость 4', date: '2023-03-10'}
        ],
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
    }
  },
  computed: {
    sortedNews() {
      const sorted = {};
      for (const year in this.news) {
        sorted[year] = [...this.news[year]].sort((a, b) => new Date(a.date) - new Date(b.date));
      }
      return sorted;
    },
    sortedYears() {
      return Object.keys(this.sortedNews).sort((a, b) => b - a);
    }
  }

};
</script>

<template>
  <div>
    <h1 class="text_block_name">Новости</h1>
    <div class="news_block">
      <div class="news_by_year" v-for="year in sortedYears" :key="year">
        <span class="year">{{ year }}</span>
        <div class="news_list">

          <router-link class="news_list_item" v-for="item in sortedNews[year]" :key="item.id" :to="`/news/${item.id}`">
            <span class="news_title">{{ item.title }}</span>
            <div class="bottom_side">
              <span class="news_date">{{ formatDate(item.date) }}</span>
              <img class="news_img" src="/arrow.svg" alt="">
            </div>
          </router-link>

        </div>
      </div>


    </div>
  </div>
</template>

<style>
.text_block_name {
  font-family: 'Source Code Pro', monospace;
  font-weight: 700;
  font-size: 54px;
  line-height: 54px;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  padding-top: 96px;
  padding-bottom: 60px;
}

.news_by_year {
  overflow: hidden;
}

.year {
  display: block;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  padding-bottom: 24px;
  padding-left: 32px;
  padding-top: 24px;


}

.news_list {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1440px;

  width: 100%;
  margin-bottom: 96px;

}

.news_list_item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 240px;
  border-left: #040718 1px solid;
  border-bottom: #040718 1px solid;
  padding: 24px 32px;
  text-decoration: none;
  color: inherit;
}

.news_title {

  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
}

.news_date {

  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
}

.bottom_side {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.news_img {
  width: 30px;
  height: 22px;
}

.news_img {
  opacity: 0;
  transition: opacity 0.3s ease;
}

.news_list_item:hover .news_img {
  opacity: 1;
}
</style>