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
          <router-link to="/">Главная</router-link>
          <router-link to="/about">О ПРЕМИИ</router-link>
          <router-link to="/">НОМИНАЦИИ</router-link>
          <router-link to="/">КАНДИДАТЫ</router-link>
          <router-link to="/">ЛАУРЕАТЫ</router-link>
          <router-link to="/">НОВОСТИ</router-link>
          <router-link to="/">КОНТАКТЫ</router-link>
        </div>
        <div class="header_main_login">
          <router-link to="/">ВОЙТИ</router-link>
        </div>
      </div>
    </div>

    <router-view class="main_view"></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {}
}
</script>

<style>
#app {
  background: #fff;

  font-family: Ubuntu Mono, sans-serif;
  font-weight: 400;
  height: 100%;
  line-height: 100%;
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  display: flex;
  flex-direction: column;

}

.header {
  padding-top: 8px;
  padding-left: 31px;
  padding-right: 31px;
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

.header_main_login {
  font-size: 16px;
  padding-right: 32px;

}
.header_main_login a{
  text-decoration: none;
  color: black;

}

.main_view {

  flex-grow: 1;
  max-width: 1440px;
  width: 100%;
  padding: 0 32px;
  margin-left: auto;
  margin-right: auto;
}
</style>