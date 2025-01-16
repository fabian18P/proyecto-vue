<template>
  <button class="mx-auto p-2 rounded w-4/5 block bg-gray-50 font-semibold hover:bg-gray-900 transition-colors duration-500">
    vegetal
  </button>
</template>

<script></script>

<style>
button {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease-in-out; /* Suavidad */
  color: black;
  will-change: transform; /* Optimización de animaciones */
  transform: translateZ(0); /* Suavizado extra */
}

button:hover {
  transform: scale(1.03); /* Escalado */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Efecto de sombra */
  color: white;
}
</style>
