<template>
  <div id="app">
    <transition 
    name="app-router"
    enter-active-class="animate__animated animate__fadeIn"
    >
        <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="scss">
@import './assets/scss/base.scss';
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
