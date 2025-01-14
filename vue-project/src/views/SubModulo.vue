<template>
  <div>
    <h2>Modulo: {{ modulo }}</h2>
    <h3>Submodulo: {{ subModulo }}</h3>
    <!-- Aquí puedes mostrar más información dependiendo del módulo y submódulo -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();

const modulo = route.params.moduloId;
const subModulo = route.params.subModuloId;
</script>

<style>

</style>
