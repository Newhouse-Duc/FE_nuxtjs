<template>
  <div  class="flex flex-col min-h-screen">
    <TheHeader />
    <main >
      <slot />
    </main>
    <TheFooter />
  </div>


</template>

<script setup>
import TheFooter from '~/components/common/TheFooter.vue';
import TheHeader from '~/components/common/TheHeader.vue';


</script>

<style lang="scss" scoped>

</style>