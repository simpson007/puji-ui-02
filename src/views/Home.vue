<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <div class="banner-left">
          <h1>Puji-UI</h1>
          <h2>高效、精致、易用的 UI 组件库</h2>
          <div class="actions">
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
                  </svg >
                  Gitee
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="banner-right">
          <img src="../lib/programming.svg" alt="">
        </div>
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
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav},
};
</script>

<style lang="scss" scoped>
$green: #02bcb0;
$border-radius: 28px;
$color: #007974;
.topnavAndBanner {

}
.line {
  border-top: 1px solid #aeaeae;
}
.features {
  margin: 16px auto;
  padding-top: 20px;
  @media (min-width: 375px) {
    width: 375px;
    > ul {
      > li{
        width: 100%;
      }
    }
  }
  @media (min-width: 800px) {
    width: 600px;
    > ul {
      > li{
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
      font-size: 80px;
    }

    > h2 {
      font-size: 26px;
    }
    > .actions {
      padding: 8px 0;

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
        > .start{
          color: #fff;
          background-color: #1baaa0;
          box-shadow: none;
          border: none;
        }
        > .start:hover {
          background-color: #00948a;
          a {
            text-decoration: none;
          }
        }
        > .github,.gitee{
          background-color: white;
          box-shadow: 0 16px 32px 0 rgb(0 0 0 / 6%);
          > a{
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            > svg{
              width: 24px;
              height: 24px;
              margin-right: 10px;
            }
          }
        }

        > .github:hover{
          background-color: #f5f5f5;
          > a {
            text-decoration: none;
          }
        }
        > .gitee:hover{
          background-color: #f5f5f5;
          > a {
            text-decoration: none;
          }
        }
      }
    }
  }

  @media (min-width: 320px) {
    width: 320px;
    margin: 24px auto;
    padding: 20px 16px;
    > .banner-left {
      text-align: center;
      margin: 16px auto;
      > h2 {
        font-size: 24px;
      }
      > .actions {
        >.btn {
          > li {
            > a {
              padding: 6px 10px;
              > svg{
                display: none;
              }
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
  @media (min-width: 800px) {
    width: 800px;
    margin: 24px auto;
    padding: 20px 16px;
    > .banner-left {
      text-align: center;
      margin: 16px auto;
      > .actions {
        >.btn {
          > li {
            > a {
              > svg{
                display: block;
              }
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