<!-- Componente BarraLateral.vue -->
<!-- HTML -->
<template>
  <div class="barralateral">
    <div class="eu">
      <div class="my-photo"></div>
      <h1><router-link to="/">Claudia Pires</router-link></h1>
      <p>Business Analyst</p>
      <p>1303334@estudante.uab.pt</p>
    </div>
    <div class="buttons">
      <router-link to="/quem-sou" active-class="active" class="button">Quem Sou Eu?</router-link>
      <router-link to="/que-faco" active-class="active" class="button">O Que Faço?</router-link>
      <router-link to="/hobbies"  active-class="active" class="button">Hobbies?</router-link>      
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: 'BarraLateral'
}
</script>

<!-- CSS -->
<style scoped>
.barralateral {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.eu {
  vertical-align: top;
  text-align: center;
}

.eu a {
  color: white;
  text-decoration: none;
}

.my-photo {
  overflow: hidden;
  display: block;
  margin: auto;
  width: 255px;
  height: 255px;
  border-radius: 50%;   /* Para ser um círculo */
  margin-bottom: 20px;  /* Margem inferior da foto */
  margin-top: 30px;     /* Margem superior da foto */
  background-image: url('../assets/foto_cv.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  padding: 30px;
}

.button{
  background-color: #43568E;
  color: white;
  padding: 15px 0px;
  text-decoration: none;
  width: 100%;
}

.button:hover {
  /*background-color: #5B3409;*/
  background-color: #6e80b3;
  color: white;
}

.active {
  background-color: #1D2B45;
  color: white;
  padding: 15px 0px;
  text-decoration: none;
  width: 100%;

}
</style>
