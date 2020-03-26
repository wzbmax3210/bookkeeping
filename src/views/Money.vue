<template>
<Layout class-prefix="layout">
  <NumberPad></NumberPad>
  <Types :xxx="111"></Types>
  <Notes></Notes>
  <Tags></Tags>
</Layout>

</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue'
import Types from '@/components/Money/Types.vue'
import Notes from '@/components/Money/Notes.vue'
import Tags from '@/components/Money/Tags.vue'

export default {
  name: 'Money',
  components: {Tags, Notes, Types, NumberPad}
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
