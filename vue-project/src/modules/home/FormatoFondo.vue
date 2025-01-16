<template>
  <h1 class="titulo text-5xl font-black">{{ home.nombre }}</h1>
</template>

<script setup>
  import { home } from '@/data/home'

  // Crear burbujas
  function createBubbles() {
    const container = document.body;
    for (let i = 0; i < 11; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${5 + Math.random() * 5}s`;
        bubble.style.animationDelay = `${Math.random() * 5}s`;
        bubble.style.width = `${20 + Math.random() * 50}px`;
        bubble.style.height = bubble.style.width;
        container.appendChild(bubble);
    }
  }
  createBubbles();
</script>

<style>
  body {  margin:0; overflow:hidden; background:#123524; height:100vh;
          display:flex; justify-content:center; align-items:center;}
  footer{ background:#123524;}
  .titulo{color: #EFE3C2; text-align: center;}

  .bubble {position:absolute; bottom:-100px; width:40px; height:40px;
      background: #EFE3C2;
      clip-path: polygon(
          30% 0%, 70% 0%, /* Top */
          100% 30%, 100% 70%, /* Right */
          70% 100%, 30% 100%, /* Bottom */
          0% 70%, 0% 30% /* Left */
      );
      animation: rise 10s infinite ease-in-out;
      opacity: 0.8;
      z-index: 1;
  } @keyframes rise {
      0% {transform: translateY(0) scale(0.8);}
      100% {transform: translateY(-110vh) scale(0.6);opacity: 0;}
  }
</style>
