<!-- HTML -->
<template>
  <div class="rodape">
    <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
      <font-awesome-icon icon="fa-brands fa-facebook" />
    </a>
    <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
      <font-awesome-icon icon="fa-brands fa-twitter" />
    </a>
    <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
      <font-awesome-icon icon="fa-brands fa-instagram" />
    </a>
    <a href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
      <font-awesome-icon icon="fa-brands fa-linkedin-in" />
    </a>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: 'RodapeCv'
}
</script>

<!-- CSS -->
<style scoped>
.rodape {
  text-align: center;
  padding: 10px;
}

.rodape a {
  padding: 20px 10px; /* Espaçamento entre os ícones */
  font-size: 24px;    /* Tamanho dos ícones */
}

.rodape a:hover {
  /*color: #5B3409;     /* Cor de hover dos ícones */
  color: #6171A4;
}

.rodape a {
 /* color: black;    /* Cor dos ícones */
  color: #BBC1D1;
}
</style>
