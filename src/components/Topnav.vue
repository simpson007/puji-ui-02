<template>
  <div class="topnav" >
    <router-link to="/" class="logo">
      <img src="../assets/puji-ui.svg" alt="">
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-zhankai"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {
  inject,
  Ref
} from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  background-color: white;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 1px -1px rgb(0 0 0 / 8%);

  > .logo {
    max-width: 6em;
    margin-right: auto;
    >img {
      width: 96px;
      display :inherit;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      > a:hover{
        color: #ff8257;
        text-decoration: none;
      }
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;

  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>