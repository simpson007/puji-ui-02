<template>
  <div>导航栏 |
    <router-link to="/">Simpson1</router-link> |
    <router-link to="/xxx">Simpson2</router-link></div>
  <hr/>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
