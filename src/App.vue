<!-- CSS -->

<!-- O ecran será dividido em 3 partes, sidebar (barra lateral), 
  footer (rodape para icons de redes sociais) e content (zona de apresentação)-->
<template> 
  <div class="container">
    <div class="sidebar">
      <BarraLateral></BarraLateral>
    </div>
    <div class="content">
      <div class="main-content">
        <router-view></router-view>
      </div>
      <div class="footer">
        <RodapeCv></RodapeCv>
      </div>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import BarraLateral from './components/BarraLateral.vue'
import RodapeCv from './components/RodapeCv.vue'

export default {
  name: 'App',
  components: { BarraLateral, RodapeCv }
}
</script>

<!-- CSS -->
<style>
.container {
  display: flex;
}

.sidebar {
  width: 350px;
  background-color: #6171A4;
  color: white;
  height: 100vh;
}

.content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.main-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: #f5f5f5;
  overflow: auto;
}

.footer {
  width: 100%;
  height: 50px;
  background-color: #1D2B45;
  text-align: center;
}
</style>
