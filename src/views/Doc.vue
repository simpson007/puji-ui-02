<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/button">Button <span>按钮</span></router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog <span>对话框</span></router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch <span>开关</span></router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs <span>标签页</span></router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue'
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible"); // get
    return { menuVisible };
  },
};
</script>

<style lang="scss" scoped>
$aside-index : 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 28px;
    background: white;
  }
}
aside {
  background: white;
  width: 160px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  border-right: 1px solid #1c1f2314;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
        &:hover{
          background: #f8f8f8;
        }
        > span{
          padding-left: 8px;
          font-size: 14px;
          opacity: 0.6;
        }
      }
      .router-link-active {
        background: #f8f8f8;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>