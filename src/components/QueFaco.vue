<!-- HTML -->
<template>
  <div class="skills-container">
    <h1 class="skills-title">O que faço?</h1>
    <ul>
      <li v-for="(skill, index) in skills" :key="skill.id">
        <div class="skill-header" @click="toggleDetail(index)" >
          <font-awesome-icon :icon="['fas', skill.isExpanded ? 'caret-up' : 'caret-down']" />
          <h3>{{ skill.title }}</h3>
        </div>
        <div v-if="skill.isExpanded" class="skill-details">
          <span v-for="(content, contentIndex) in skill.contents" :key="contentIndex">
            {{ content }}<br v-if="contentIndex < skill.contents.length - 1" />
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>


<!-- JavaScript -->
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretUp, faCaretDown);

export default {
  name: 'QueFaco',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      skills: [ // 4 secções, a 1ª por default irá aparecer aberta, isExpanded: true, as restantes fechadas, isExpanded: false 
        { id: 1, title: 'Experiência Profissional', contents: ['Senior Engineer / Business Analyst na Critical Software SA', 'Senior Analyst Programmer na Setefanini SA', 'Senior Software Developer na Sinfic SA'], isExpanded: true },
        { id: 2, title: 'Habilitações Literárias', contents: ['Licenciatura em Engenharia Informática pela UAb'], isExpanded: false },
        { id: 3, title: 'Formações & Certificações', contents: ['Machine Learning - Da teoria à prática pela Ordem dos Engenheiros', 'Certificação SINFIC Challenger Arquitectura de Software', 'Certificação SINFIC Challenger Developper'], isExpanded: false },
        { id: 4, title: 'Outras Informações', contents: ['Carta de Condução'], isExpanded: false },
      ],
    };
  },
  methods: {
    toggleDetail(index) {
      this.skills.forEach((skill, i) => {
        skill.isExpanded = i === index ? !skill.isExpanded : false;
      });
    },
  },
};
</script>

<!-- CSS -->
<style scoped>
.skills-title {
  margin-left: 20px;
  font-weight: bold;   /* Título em negrito */
  font-size: 1.5em;    /*  Tamanho da fonte no título */
  margin-bottom: 0.5em /* Espaçamento debaixo do título */
}

.skills-container ul {
  margin: 0px;
  list-style-type: none;
}

.skill-header {
  display: flex; 
  align-items: center; 
  cursor: pointer;
}

.skill-header h3 {
  padding-left: 20px;
}
</style>
