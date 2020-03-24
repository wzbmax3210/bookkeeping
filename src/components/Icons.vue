<template>
<svg class="icon">
  <use :xlink:href="`#${name}`"/>
</svg>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../assets/icons', true, /\.svg$/))
} catch (error) {
  console.log(error)
}

export default {
  name: 'Icons',
  props: ['name']
}
</script>

<style scoped lang="scss">
  .icon {
    width: 2.5em; height: 2.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
