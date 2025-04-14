<template>
  <header class="app-header">
    <div class="container">
      <div class="app-header__wrapper">
        <div class="app-header__logo">
          <img src="@/assets/images/main-logo.png" />
        </div>

        <div class="app-header__brand">
          Тестовое задание
          <a href="https://tapigo.ru/" target="_blank">Тапиго</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineOptions({
  name: "app-header",
});
</script>

<style>
.app-header {
  border-bottom: 1px solid var(--main-border-color);
}

.app-header__wrapper {
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}

.app-header__logo {
  width: 48px;
  height: 48px;
}

.app-header__logo img {
  width: 100%;
  height: 100%;
  display: block;
}

.app-header__brand,
.app-header__brand a {
  font-size: 1.375rem;
  font-weight: 600;
}

.app-header__brand a {
  text-decoration: underline;
}

@media screen and (max-width: 998px) {
  .app-header__brand,
  .app-header__brand a {
    font-size: 1.2rem;
  }
}

@media screen and (max-width: 768px) {
  .app-header__brand,
  .app-header__brand a {
    font-size: 1rem;
  }
}

@media screen and (max-width: 576px) {
  .app-header__brand,
  .app-header__brand a {
    font-size: 0.8rem;
  }
}
</style>
