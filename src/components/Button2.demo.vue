<demo>
按钮尺寸
</demo>
<template>
  <div>
    <div>
      <Button size="large">变大按钮</Button>
      <Button size="normal">普通按钮</Button>
      <Button size="small">变小按钮</Button>
    </div>
    <div>
      <Button theme="link" size="large">变大按钮</Button>
      <Button theme="link" size="normal">普通按钮</Button>
      <Button theme="link" size="small" >变小按钮</Button>
    </div>
    <div>
      <Button size="large" theme="text">变大按钮</Button>
      <Button size="normal" theme="text">普通按钮</Button>
      <Button size="small" theme="text">变小按钮</Button>
    </div>
  </div>
</template>

<script lang="ts">
import {Button} from "../lib/index";
export default {
  components: {
    Button
  }
}
</script>