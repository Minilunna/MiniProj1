<!-- HTML -->
<template>
  <div class="hobbies-container">
    <h1 class="hobbies-title">Hobbies?</h1>
    <div class="hobby" v-for="hobby in hobbiesList" :key="hobby.id">
      <font-awesome-icon :icon="hobby.icon" />
      <h3 class="hobby-title">{{ hobby.title }}</h3>
      <p class="hobby-description">{{ hobby.description }}</p>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBook, faGamepad, faMusic, faFilm } from '@fortawesome/free-solid-svg-icons';

export default {
  name: 'QueHobbies',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      hobbiesList: [
        {
          id: 1,
          title: 'Ler',
          description: 'Perder-me em cenários, vidas e épocas',
          icon: faBook,
        },
        {
          id: 2,
          title: 'Gaming',
          description: 'Paixão ao longo dos anos',
          icon: faGamepad,
        },
        {
          id: 3,
          title: 'Música',
          description: 'A companhia de viagens, trabalhos, uma playlist por mood',
          icon: faMusic,
        },
        {
          id: 4,
          title: 'Séries & Filmes',
          description: 'Serões de Inverno e tardes de sofá',
          icon: faFilm,
        }
      ],
    };
  },
};
</script>

<!-- CSS -->
<style scoped>
.hobbies-container {
  margin-left: 20px;
}

.hobbies-title {
  font-weight: bold;    /* Título em negrito */
  font-size: 1.5em;     /*  Tamanho da fonte no título */
  margin-bottom: 0.5em; /* Espaçamento debaixo do título */
}

.hobby {
  display: flex;
  align-items: center;
  margin-bottom: 0.5em; /* Espaçamento debaixo do título */
}

.hobby-title {
  font-size: 1.5em;
  margin-left: 5px;
  margin-right: 10px;
}

.hobby-description {
  font-size: 1em;
}

</style>
