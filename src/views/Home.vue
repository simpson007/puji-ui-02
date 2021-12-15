<template>
  <Topnav/>
  <div class="banner">
    <div class="banner-left">
      <h1>Puji-UI</h1>
      <h2>高效、精致、易用的 UI 组件库</h2>
      <ul class="btn">
        <li class="start">
          <router-link to="/doc">开始使用</router-link>
        </li>
        <li class="github">
          <a href="https://github.com">
            <svg>
              <use xlink:href="#icon-github"></use>
            </svg>
            GitHub
          </a>
        </li>
        <li class="gitee">
          <a href="https://gitee.com">
            <svg>
              <use xlink:href="#icon-gitee"></use>
            </svg>
            Gitee
          </a>
        </li>
      </ul>
    </div>
    <div class="banner-right">
      <img src="../lib/programming.svg" alt="">
    </div>
  </div>
  <div class="line"></div>
  <div class="features">
    <ul>
      <li>
        <svg>
          <use xlink:href="#icon-vue"></use>
        </svg>
        <h3>基于 Vue 3</h3>
        <p>骄傲地使用了 Vue 3 API</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-ts"></use>
        </svg>
        <h3>基于 TypeScript </h3>
        <p>源代码采用 TypeScript 书写</p>
      </li>
      <li>
        <svg>
          <use xlink:href="#icon-light"></use>
        </svg>
        <h3>代码易读</h3>
        <p>每个组件的源代码都极其简洁</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav},
};
</script>

<style lang="scss" scoped>
$orange: #ff8257;

$color: #3f3d56;

.line {
  @media (min-width: 320px) {
    border: none;
  }
  @media (min-width: 800px) {
    border-top: 1px solid #aeaeae;
  }
}

.features {
  margin: 16px auto;
  padding-top: 20px;
  @media (min-width: 320px) {
    width: 300px;
    > ul {
      > li {
        width: 100%;
      }
    }
  }
  @media (min-width: 800px) {
    width: 600px;
    > ul {
      > li {
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1000px;
    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}

.banner {
  color: $color;
  padding: 80px 0 16px;
  display: flex;
  flex-wrap: wrap;

  > .banner-left {
    > h1 {
      font-family: "PingFang SC",serif;
      font-size: 80px;
    }

    > h2 {
      font-size: 26px;
    }

    > .btn {
      display: flex;
      flex-wrap: wrap;
      padding-top: 20px;

      > li {
        font-size: 16px;
        font-weight: 700;
        line-height: 1.4;

        display: flex;
        flex-wrap: nowrap;
        align-items: center;

        > a {
          padding: 6px 24px;
        }
      }

      > li:not(:last-child) {
        margin-right: 30px;
      }

      > .start {
        color: #fff;
        background-color: $orange;

        &:hover{
          background-color: darken($orange,10%) ;

          a {
            text-decoration: none;
          }
        }
      }

      > .github, .gitee {
        background-color: white;
        box-shadow: 0 16px 32px 0 rgb(0 0 0 / 6%);

        &:hover{ background-color: #f5f5f5;}

        > a {
          display: flex;
          flex-wrap: wrap;
          align-items: center;

          &:hover{
            text-decoration: none;
          }

          > svg {
            width: 24px;
            height: 24px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  @media (min-width: 320px) {
    width: 320px;
    margin: 24px auto;
    padding: 0 16px;
    > .banner-left {
      text-align: center;
      margin: 16px auto;

      > h2 {
        font-size: 20px;
      }

      > .btn {
        > li {
          > a {
            padding: 6px 10px;

            > svg {
              display: none;
            }
          }
        }
      }
    }
    > .banner-right {
      width: 100%;
      align-items: center;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      padding: 0 16px;
    }
  }
  @media (min-width: 800px) {
    width: 800px;
    margin: 24px auto;
    padding: 20px 16px;
    > .banner-left {
      text-align: center;
      margin: 16px auto;

      > .btn {
        > li {
          > a {
            > svg {
              display: block;
            }
          }
        }
      }
    }
    > .banner-right {
      width: 80%;
      align-items: center;
      margin: 32px auto;
      padding: 0 16px;
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    margin: 42px auto;
    padding: 20px 16px;
    > .banner-left {
      margin: 16px auto;
    }
    > .banner-right {
      width: 32%;
      align-items: center;
      margin: 16px auto;
      padding: 0 16px;
    }
  }
}

</style>