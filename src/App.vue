<template>
  <div class="l-page">
    <div class="l-page__navbar c-navbar">
      <div class="c-navbar__list g--margin-left-auto">
        <router-link class="c-navbar__link" to="/">Posts</router-link>
        <router-link class="c-navbar__link" to="/new">Create Post</router-link>
      </div>
      <div
        class="c-navbar__hamburger g--display-none g--display-block@tablet"
      ></div>
    </div>
    <div class="l-page__main">
      <router-view />
    </div>
  </div>
</template>

<style>
.l-page__navbar a.router-link-exact-active {
  color: #c53030;
}
</style>
