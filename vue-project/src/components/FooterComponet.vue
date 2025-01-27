<template>
  <div class="colorFondo text-white py-4 fixed bottom-0 left-0 w-full">
    <div class="container mx-auto text-center">
      <p class="text-sm">
        &copy; Todos los derechos reservados. | Hecho por:
        <strong class="font-medium">{{ home.autor }}</strong>
      </p>
    </div>
  </div>
</template>

<script setup>
  import { home } from '../data/home';
</script>

<style scoped>
  .colorFondo{
    background: #123524;
  }
</style>
