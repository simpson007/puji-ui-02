<template>
  <h1>Dialog 对话框</h1>
  <Demo :component="Dialog1Demo" />
  <Demo :component="Dialog2Demo" />
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import Demo from './Demo.vue';
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
import Attr from './Attr.vue'
import {columns} from '../lib/data';
import {ref} from 'vue';
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
      Dialog1Demo,
      Dialog2Demo,
      columns,
      data
    }
  }
}
</script>