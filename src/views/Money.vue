<template>
<Layout class-prefix="layout">
  <NumberPad></NumberPad>
  <Types :xxx="111"></Types>
  <Notes></Notes>
  <Tags :data-source.sync="tags"></Tags>
</Layout>

</template>

<script lang="ts">
import Vue from 'vue'
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'
import {Component} from 'vue-property-decorator'

@Component({
  components: {Tags, Notes, Types, NumberPad},
})
export default class Money extends Vue{
  tags = ['衣', '食', '住', '行']
}
</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style scoped lang="scss">
  @import "~@/assets/style/helper.scss";
</style>
