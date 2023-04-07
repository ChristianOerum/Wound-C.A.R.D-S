<template>

<RouterView v-slot="{ Component }">
    <Transition enter-from-class="opacity-0" enter-active-class="transition duration-500">
      <component :is="Component"/>
    </Transition>
  </RouterView>

</template>

<script setup lang="ts">

</script>
