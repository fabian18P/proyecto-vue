<template>
  <header class="absolute inset-x-0 top-0 z-50 px-2 bg-red-700 text-white">
    <nav class="flex items-center justify-between p-6" aria-label="Global">
      <div class="flex flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="">
        </a>
      </div>
      <div class="flex gap-x-12">
        <a href="#" class="text-sm/6 font-semibold">Product</a>
        <a href="#" class="text-sm/6 font-semibold">Features</a>
      </div>
      <div class="flex flex-1 justify-end">
        <a href="#" class="text-sm/6 font-semibold">Cuestionario <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
  </header>

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
