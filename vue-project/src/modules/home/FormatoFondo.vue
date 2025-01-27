<template>
  <h1 class="titulo text-5xl font-black">
    {{ home.nombre }}
  </h1>
</template>

<script setup>
  import { home } from '@/data/home'
</script>

<style>
  .titulo{color: #EFE3C2; text-align: center;}
</style>
