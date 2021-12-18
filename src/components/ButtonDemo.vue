<template>
  <div>
    <h1>Button 按钮</h1>
    <Demo :component="Button1Demo" />
    <Demo :component="Button2Demo" />
    <Demo :component="Button3Demo" />
    <Demo :component="Button4Demo" />
    <Demo :component="Button5Demo" />
    <Attr :columns="columns" :data="data"/>
  </div>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import Button1Demo from "./Button1.demo.vue";
import Button2Demo from "./Button2.demo.vue";
import Button3Demo from "./Button3.demo.vue";
import Button4Demo from "./Button4.demo.vue";
import Button5Demo from "./Button5.demo.vue";
import {ref} from 'vue';
import Attr from './Attr.vue'
import {columns} from '../lib/data';
export default {
  components: {Demo,Attr},
  setup() {
      const data = ref([
        {
          params: 'theme',
          desc: '按钮类型',
          type: 'String',
          select: 'primary / link / text',
          default: 'primary',
        },
        {
          params: 'size',
          desc: '按钮大小',
          type: 'String',
          select: 'small / normal / large',
          default: 'normal',
        },
        {
          params: 'size',
          desc: '颜色层级',
          type: 'String',
          select: 'normal / main / danger',
          default: 'normal',
        },
        {
          params: 'disabled',
          desc: '是否禁用',
          type: 'Boolean',
          select: '-',
          default: 'false',
        },
        {
          params: 'loading',
          desc: '是否加载',
          type: 'Boolean',
          select: '-',
          default: 'false',
        }
      ]);
    return {
      Button1Demo,
      Button2Demo,
      Button3Demo,
      Button4Demo,
      Button5Demo,
      columns,
      data
    }
  }
};
</script>