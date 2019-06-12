
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="10">
        <h1>VAGAS</h1>
      </b-col>
      <b-col md="2">
        <b-button variant="primary">
          <i class="fa fa-plus"></i>&nbsp;Cadastrar Vaga
        </b-button>
      </b-col>
    </b-row>
    <br>
    <br>
    <b-row v-for="(vacancy, index) in vacancys" v-bind:key="index">
      <b-col sm="12" md="12">
        <transition name="fade">
          <b-card class="card-accent-warning" no-body v-if="show">
            <div slot="header">
              {{vacancy.position}}
              <div class="card-header-actions">
                <b-link to="/vacancyCandidate" class="card-header-action btn-setting">
                  <i class="cui-magnifying-glass"></i>
                </b-link>
                <b-link to="/createVacancy" class="card-header-action btn-setting">
                  <i class="icon-pencil"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-row>
                  <b-col md="3">
                    <b>Tipo de Oferta:</b>
                    <br>{{vacancy.offerType[0]}}
                  </b-col>
                  <b-col md="3">
                    <b>Tipo de Trabalho:</b>
                    <br>{{vacancy.workType[0]}}
                  </b-col>
                  <b-col md="3">
                    <b>Escolaridade Mínima:</b>
                    <br>Superior
                  </b-col>
                  <b-col md="3">
                    <b>Curso:</b>
                    <br>Ciência da Computação
                  </b-col>
                </b-row>
                <br>
                <br>
                <b-row>
                  <b-col>
                    <b>Idiomas:</b>
                  </b-col>
                </b-row>
                <b-row v-for="(language, index) in vacancy.languages" v-bind:key="index">
                  <b-col md="3">
                    <b>Idioma:</b> {{language.language}}
                  </b-col>
                  <b-col md="3">
                    <b>Leitura:</b> {{language.readingLevel}}
                  </b-col>
                  <b-col md="3">
                    <b>Conversação:</b> {{language.conversationLevel}}
                  </b-col>
                  <b-col md="3">
                    <b>Escrita:</b> {{language.writtenLevel}}
                  </b-col>
                </b-row>
                <br>
                <br>
                <b-row>
                  <b-col md="12">
                    <b>Principais Habilidades :</b>
                    <b-badge v-for="(skill, index) in vacancy.skills" v-bind:key="index" pill variant="dark">
                      {{skill.experience}}
                    </b-badge>
                  </b-col>
                </b-row>
                <br>
                <br>
                <b-row>
                  <b-col md="12">
                    <b>Descrição da Vaga :</b>
                    <br>{{vacancy.description}}
                  </b-col>
                </b-row>
                <br>
                <br>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import { setTimeout } from "timers";
export default {
  name: "Vancancy",
  data: function() {
    return {
      show: true,
      vacancys: [],
      
    };
  },
  beforeMount() {
    this.$store.dispatch("getVacancy").then(res => {
      setTimeout(res => {
        this.vacancys = this.$store.state.vacancy.vacancys;
        console.log(this.vacancys);
      }, 1000);
    });
  }
};
</script>

<style >
.container {
    max-width: 80% !important; 
    width: 100%!important;
    margin: 0 auto !important;
}
.fade-enter-active {
  transition: all 0.3s ease;
}
.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.badge {
  margin-left: 10px;
}

.card-header-action {
  margin-right: 15px;
}
</style>
