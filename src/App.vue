<template>
  <div id="app">
    <div class="header">
      <div class="header_main">
        <div class="header_main_logo">
          <router-link to="/" class="logo-link">
            <span>Хрустальный</span>
            <img src="/logo.png" alt="Логотип" class="logo">
            <span>Ландыш</span>
          </router-link>
        </div>
        <div class="header_main_menu">

          <router-link to="/about">О ПРЕМИИ</router-link>
          <router-link to="/nominations">НОМИНАЦИИ</router-link>
          <router-link to="/nominees">КАНДИДАТЫ</router-link>
          <router-link to="/laureates">ЛАУРЕАТЫ</router-link>
          <router-link to="/news">НОВОСТИ</router-link>
          <router-link to="/contacts">КОНТАКТЫ</router-link>
        </div>
        <div class="header_main_login">
          <router-link to="/login">ВОЙТИ</router-link>
        </div>

        <div class="header_menu">
          <span @click="toggleMenu()">Меню</span>
        </div>
      </div>
    </div>

    <router-view class="main_view"></router-view>
    <Footer class="main_view"/>
  </div>
</template>

<script>
import 'typeface-ubuntu-mono';
import 'typeface-source-code-pro';
import 'typeface-nunito-sans'
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Footer,
  },
  computed: {},
  mounted() {
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      isMenuOpen: false,
    }
  },
  methods: {
    test() {
      console.log(this.windowWidth);
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowHeight = window.innerHeight;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Переключаем состояние
      console.log('Меню открыто:', this.isMenuOpen);
    }
  }

}


</script>

<style>
#app {
  background: #fff;
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  height: 100%;
  line-height: 100%;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-width: 1440px;
}

.header {
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 0;
  margin-bottom: 30px;
}

.header_main {
  align-content: center;
  align-items: center;
  border: 1px solid #040718;
  border-radius: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  row-gap: 10px;
  text-transform: uppercase;
  max-width: 1440px;
  width: 100%;
  height: 50px;
}

.header_main_logo {
  font-weight: 600;
  padding-left: 32px;
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
}

.logo {
  height: 25px;
  width: 25px;
  margin: 0 4px;
}

.header_main_menu {
  align-items: center;
  display: flex;
  gap: 24px;
  text-decoration: none;
  color: black;
}

.header_main_menu a {
  text-decoration: none;
  color: black;
}

.header_menu {
  font-size: 16px;
  padding-right: 32px;
}

.header_main_login {
  font-size: 16px;
  padding-right: 32px;

}

.header_main_login a {
  text-decoration: none;
  color: black;

}


.divider {
  height: 1px;
  background-color: #040718;
  width: 100%;
  margin-bottom: 20px;
}

.header_menu {
  display: none;
}

@media screen and (max-width: 1440px) {
  #app {
    /*margin: auto 31px; */
    padding: 0 31px;
  }
}

@media screen and (max-width: 1000px) {
  .header_main_menu {
    display: none;
  }

  .header_main_login {
    display: none;
  }

  .header_menu {
    display: block;
  }
}

@media screen and (max-width: 768px) {
  #app {
    /*margin: auto 31px; */
    padding: 0 20px;
  }
}

@media screen and (max-width: 620px) {
  #app {
    /*margin: auto 31px; */
    padding: 0 20px;
  }
  .header_main_logo{
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .header_menu{
    padding-right: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
  }
}
</style>
