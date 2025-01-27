<template>
  <div 
    class="pb-4"
    v-for="modulo in filteredModulos" :key="modulo.id"
  >
    <div
      v-for="sub in modulo.subModulo" :key="sub.id"
    >
      <button
      class="opcionesContenido text-gray-50 mx-auto p-2 mt-4 rounded w-4/5 block font-semibold hover:bg-gray-900 transition-colors duration-500"
        v-for="seccion in sub.seccion" :key="seccion.id"
        :class="`bg-${modulo.color}-900`"
        @click="contenidoModulo(seccion)"
      > {{ seccion.nombre }} </button>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
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

  const router = useRouter();
  function contenidoModulo(seccion) {
    if (mainId && subId && seccion.id) {
      router.push({
        path: `/contenido/${mainId}/${subId}/${seccion.id}`
      });
    } else {
      console.error("No se pudo navegar: moduloSeleccionado o subModulo está indefinido.");
    }
  }
</script>

<style>
  .opcionesContenido {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease-in-out; /* Suavidad */
    will-change: transform; /* Optimización de animaciones */
    transform: translateZ(0); /* Suavizado extra */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }

  .opcionesContenido:hover {
    transform: scale(1.01); /* Escalado */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5); /* Efecto de sombra */
    color: white;
  }
</style>