<template>
  <div :key="$route.fullPath" class="FondoFormato" id="A">
    <FormatoFondo/>
    <ModulesBar/>
    <FooterComponet/>
    <div class="background">
      <!-- Puntos dinámicos generados -->
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import FormatoFondo from '@/modules/home/FormatoFondo.vue';
import ModulesBar from '@/modules/home/ModulesBar.vue';
import FooterComponet from '../components/FooterComponet.vue';

onMounted(() => {
  const container = document.querySelector('.background');
  const numberOfDots = 50; // Ajusta la cantidad de puntos que quieres generar

  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');

    // Posición aleatoria en píxeles (respetando el viewport)
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    dot.style.top = `${y}px`;
    dot.style.left = `${x}px`;
    dot.style.animationDelay = `${Math.random() * 3}s`;

    container.appendChild(dot);
  }
});
</script>

<style>
.FondoFormato {
  margin: 0;
  background: #123524;
  min-height: 100vh; /* Permitir que crezca si el contenido es mayor */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; /* Necesario para posicionar los puntos */
  z-index: 0;
  overflow: visible; /* Permitir desplazamiento */
}

.background {
  position: fixed; /* Fijar el fondo respecto a la pantalla */
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none; /* Permitir clics en el contenido principal */
  z-index: -1; /* Mantener detrás del contenido principal */
}

.dot {
  position: absolute;
  width: 10px; /* Tamaño del punto */
  height: 10px;
  border-radius: 50%; /* Hacerlo redondo */
  background-color: rgba(255, 255, 255, 0.8); /* Color blanco semi-transparente */
  animation: fadeInOut 3s infinite ease-in-out;
}

/* Animación de aparición y desaparición */
@keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5); /* Aparece más pequeño */
  }
  50% {
    opacity: 1;
    transform: scale(1); /* Crece al tamaño completo */
  }
}
</style>