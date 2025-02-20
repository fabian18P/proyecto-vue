<template>
  <div
    class="text-gray-800"
    v-for="modulo in filteredModulos"
    :key="modulo.id"
  >
    <div
      v-for="sub in modulo.subModulo"
      :key="sub.id"
    >
      <div
        v-for="descripcion in sub.descripcion"
        :key="descripcion.id"
      >
        <p class="pb-4">{{ descripcion.texto }}</p>
        <div
          v-for="imagen in descripcion.imagen"
          :key="imagen.id"
        >
          <div class="flex justify-center">
            <img
              class="w-5/6 rounded-3xl shadow-xl"
              :src="imagen.url"
              alt="Imagen de ejemplo"
            />
          </div>
          <p class="text-center text-xs pt-3 pb-6">  {{ imagen.descripcion }} </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { modulos } from '@/data/modulos';

  // Función para obtener valores desde la URL actual
  const pathSegments = window.location.pathname.split("/"); // Divide la URL por "/"
  const mainId = pathSegments[2];
  const subId = pathSegments[3];

  // Computed para filtrar
  const filteredModulos = modulos.modulos
    .filter(modulo => modulo.id === mainId)
    .map(modulo => ({
        ...modulo,
        subModulo: modulo.subModulo.filter(sub => sub.id === subId)
    }));
</script>
