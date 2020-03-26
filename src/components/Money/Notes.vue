<template>
<div>
  <label class="notes">
    <span class="name">备注</span>
    <input type="text" v-model="notesValue" placeholder="在这里输入备注">
  </label>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'

@Component
export default class Notes extends Vue {
  notesValue = ''
}
</script>

<style scoped lang="scss">
  .notes {
    background: #f5f5f5;
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;
    }

    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>
