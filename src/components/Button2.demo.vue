<demo>
按钮尺寸
</demo>
<template>
  <div>
    <div>
      <Button size="big">变大按钮</Button>
      <Button>普通按钮</Button>
      <Button size="small">变小按钮</Button>
    </div>
    <div>
      <Button theme="link" size="big">变大按钮</Button>
      <Button theme="link">普通按钮</Button>
      <Button size="small" theme="link">变小按钮</Button>
    </div>
    <div>
      <Button size="big" theme="text">变大按钮</Button>
      <Button theme="text">普通按钮</Button>
      <Button size="small" theme="text">变小按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>