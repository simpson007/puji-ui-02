<template>
  <h1>Tabs 标签页</h1>
  <Demo :component="Tabs1Demo" />
  <Attr :columns="columns" :data="data"/>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
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
        params: 'v-model',
        desc: '绑定值',
        type: 'String',
        select: '-',
        default: '首个标签的 title',
      },
    ]);
    return {
      Tabs1Demo,
      columns,
      data
    }
  }
}
</script>