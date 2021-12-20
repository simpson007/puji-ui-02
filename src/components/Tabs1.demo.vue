<demo>
常规使用
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="标签a">内容a</Tab>
    <Tab title="标签b">内容b</Tab>
  </Tabs>
</template>

<script lang="ts">
import {Tabs,Tab} from '../lib/index'
import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const x = ref('标签a')
    return {
      x
    }
  }
}
</script>