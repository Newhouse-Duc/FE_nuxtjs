<template>
  <div class="relative">
    <TheHeader />
    <main >
      <slot />
    </main>
  </div>


</template>

<script setup>
import TheHeader from '~/components/common/TheHeader.vue';


</script>

<style lang="scss" scoped>

</style>