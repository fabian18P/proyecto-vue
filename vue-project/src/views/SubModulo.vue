<template>
  <HeaderComponet />
  <div
    class="contenedor pt-20 h-auto w-auto text-justify flex flex-wrap 
      lg:flex-nowrap
      "
    v-for="modulo in filteredModulos"
    :key="modulo.id"
  >
    <!-- Sección izquierda -->
    <div
      class="section-left p-5 w-full order-2
        lg:w-2/3 lg:order-1
        "
      :class="`bg-${modulo.color}-900`"
    >
      <div class="bg-gray-200 p-10">
        <contenidoIzquierdo />
      </div>
    </div>

    <!-- Sección derecha -->
    <div
      v-for="modulo in filteredModulos"
      :key="modulo.id"
      class="section-right p-5 bg-gray-200 w-full order-1 
        lg:w-1/3 lg:order-2
        "
    >
      <contenidoDerecho />
      <btnSubModulo />
    </div>
  </div>
</template>

<script setup>
  import HeaderComponet from "@/components/HeaderComponet.vue";
  import contenidoIzquierdo from "@/modules/subModulo/contenidoIzquierdo.vue";
  import contenidoDerecho from "@/modules/subModulo/contenidoDerecho.vue";
  import btnSubModulo from "@/modules/subModulo/btnSubModulo.vue";

  import { modulos } from "@/data/modulos";
  // Función para obtener valores desde la URL actual
  const pathSegments = window.location.pathname.split("/"); // Divide la URL por "/"
  const mainId = pathSegments[2];
  const subId = pathSegments[3];

  // Computed para filtrar
  const filteredModulos = modulos.modulos
    .filter((modulo) => modulo.id === mainId)
    .map((modulo) => ({
      ...modulo,
      subModulo: modulo.subModulo.filter((sub) => sub.id === subId),
    }));
  </script>

  <style scoped>
  .contenedor {
    display: flex;
  }
</style>