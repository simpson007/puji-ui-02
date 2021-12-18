<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="Tabs1Demo" />
  <Demo :component="Tabs2Demo" />
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import Tabs2Demo from './Tabs2.demo.vue'
import {ref} from 'vue';
import Attr from './Attr.vue'
import {columns} from '../lib/data';
export default {
  components: {
    Demo,Attr
  },
  setup() {
    const data = ref([
      {
        params: 'visible',
        desc: '是否显示',
        type: 'Boolean',
        select: '-',
        default: 'false',
      },
      {
        params: 'closeOnClickOverlay',
        desc: '是否点击遮罩层关闭',
        type: 'Boolean',
        select: '-',
        default: 'false',
      },
      {
        params: 'ok',
        desc: '确认触发',
        type: 'Function',
        select: '-',
        default: '-',
      },
      {
        params: 'cancel',
        desc: '取消触发',
        type: 'Function',
        select: '-',
        default: '-',
      },
    ]);
    return {
      Tabs1Demo,
      Tabs2Demo,
      columns,
      data
    }
  }
}
</script>