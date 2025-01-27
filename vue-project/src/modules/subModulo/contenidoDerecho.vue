<template>
  <div 
    class="pb-4 pl-8 pr-8 text-gray-800"
    v-for="modulo in filteredModulos" :key="modulo.id"  
  >
    <div
      v-for="sub in modulo.subModulo" :key="sub.id"
    > 
    <p> {{ sub.resumen }} </p> 
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