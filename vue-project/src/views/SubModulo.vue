<template>
  <HeaderComponet></HeaderComponet>
  <div class="contenedor pt-20 h-auto w-auto text-justify">
    <div class="section-left w-2/3 p-5 bg-amber-50">
      <contenidoIzquierdo></contenidoIzquierdo>
    </div>
    <div class="section-right w-1/3 p-5 bg-red-600">
      <contenidoDerecho></contenidoDerecho>
      <btnSubModulo></btnSubModulo>
    </div>
  </div>
</template>

<script setup>
  import HeaderComponet from "@/components/HeaderComponet.vue";
  import contenidoIzquierdo from "@/modules/subModulo/contenidoIzquierdo.vue";
  import contenidoDerecho from "@/modules/subModulo/contenidoDerecho.vue";
  import btnSubModulo from "@/modules/subModulo/btnSubModulo.vue"
  import { useRoute } from "vue-router";
  import { modulos } from "@/data/modulos";

  const route = useRoute();

  // Capturar parámetros de la ruta
  const moduloId = parseInt(route.params.moduloId, 10);
  const subModuloId = parseInt(route.params.subModuloId, 10);
</script>

<style scoped>

.contenedor {
  display: flex; /* Para posicionar las secciones lado a lado */
}
</style>
