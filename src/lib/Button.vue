<template>
  <button class="puji-button" :class="classes" :disabled="disabled">
    <span v-if="loading" class="puji-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed } from "vue";
export default {
  props: {
    theme: {
      type: String,
      default: "button",
    },
      size: {
        type: String,
        default: "normal",
      },
      level: {
        type: String,
        default: "normal",
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    setup(props) {
      const { theme, size,level } = props;
      const classes = computed(() => {
        return {
          [`puji-theme-${theme}`]: theme,
          [`puji-size-${size}`]: size,
          [`puji-level-${level}`]: level,
        };
      });
      return { classes };
    },
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$orange: #ff8257;
$radius: 4px;
$red: red;
$grey: grey;
.puji-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $orange;
    border-color: $orange;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.puji-theme-primary{
    border-color: $border-color;
    color: $color;
    &:hover,
    &:focus{
      color: $orange;
    }
  }
  &.puji-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $orange;
    &:hover,
    &:focus{
      color: lighten($orange, 10%);
    }
  }
  &.puji-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken(white, 5%);;
    }
  }
  &.puji-size-large {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.puji-size-normal {
    font-size: 16px;
    height: 32px;
    padding: 0 12px;
  }
  &.puji-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.puji-theme-button {
    &.puji-level-normal {
      background: white;
      color:$color;
      border-color: $border-color;
      &:hover,
      &:focus {
        color:$orange;
        border-color: $orange;
      }
    }
    &.puji-level-main {
      background: $orange;
      color: white;
      border-color: $orange;
      &:hover,
      &:focus {
        background: darken($orange, 10%);
        border-color: darken($orange, 10%);
      }
    }
    &.puji-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.puji-theme-link {
    &.puji-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.puji-theme-text {
    &.puji-level-main {
      color: $orange;
      &:hover,
      &:focus {
        color: darken($orange, 10%);
      }
    }
    &.puji-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.puji-theme-button {
    &[disabled] {
        cursor: not-allowed;
        color: $grey;
        &:hover {
          border-color: $grey;
      }
    }
  }
  &.puji-theme-link, &.puji-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .puji-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $orange $orange $orange transparent;
    border-style: solid;
    border-width: 2px;
    animation: puji-spin 1s infinite linear;
  }
}
@keyframes puji-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>