<template>
  <div>
    <b-row>
      <b-col md="10">
        <h1>Candidatos adequados para a vaga</h1>
        <br>
        <br>
      </b-col>
      <b-col md="2" class="text-right">
        <br>
        <router-link to="/company/listVacancy" class="btn btn-primary" variant="primary">Voltar</router-link>
      </b-col>
    </b-row>
    <b-row v-for="(candidate, index) in candidates" v-bind:key="index">
      <b-col sm="12" md="12">
        <transition name="fade">
          <b-card class="card-accent-warning" no-body>
            <div slot="header">
              {{candidate.name}}
              <div class="card-header-actions">
                <b-link
                  @click.prevent="associateCandidate(candidate._id)"
                  class="card-header-action btn-setting"
                >Associar Candidato</b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-row>
                  <b-col sm="4">
                    <label>
                      <b>Email:</b>
                    </label>
                    <br>
                    {{candidate.email}}
                  </b-col>
                  <b-col sm="4">
                    <label>
                      <b>Telefone:</b>
                    </label>
                    <br>
                    {{candidate.phone}}
                  </b-col>
                  <b-col sm="4">
                    <label>
                      <b>Relevancia:</b>
                    </label>
                    <br>
                    {{candidate.relevance.toFixed(2) * 100}} %
                  </b-col>
                </b-row>
                <br>
                <br>
                <b-row>
                  <b-col sm="12">
                    <label>
                      <b>Escolaridade:</b>
                    </label>
                    <br>
                  </b-col>
                </b-row>
                <b-row v-for="(educa, index) in candidate.curriculum.education" v-bind:key="index">
                  <b-col sm="4">
                    <label>
                      <b>Instituição:</b>
                    </label>
                    <br>
                    {{educa.institution}}
                  </b-col>
                  <b-col sm="4">
                    <label>
                      <b>Grau:</b>
                    </label>
                    <br>
                    {{educa.degreeSchooling}}
                  </b-col>
                  <b-col sm="4">
                    <label>
                      <b>Curso:</b>
                    </label>
                    <br>
                    {{educa.course}}
                  </b-col>
                </b-row>
                <br>
                <br>

                <b-row
                  v-for="(experience, index) in candidate.curriculum.professionalExperience"
                  v-bind:key="index"
                >
                  <b-col sm="4">
                    <label>
                      <b>Empresa:</b>
                    </label>
                    <br>
                    {{experience.company}}
                  </b-col>
                  <b-col sm="4">
                    <label>
                      <b>Cargo:</b>
                    </label>
                    <br>
                    {{experience.position}}
                  </b-col>
                  <b-col sm="4">
                    <label>
                      <b>Descrição:</b>
                    </label>
                    <br>
                    {{experience.description}}
                  </b-col>
                </b-row>
              </b-card-body>
            </b-collapse>
          </b-card>
        </transition>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      candidates: []
    };
  },
  beforeMount() {
    this.$store.dispatch("vacancyCadidate", this.$route.params.id).then(res => {
      setTimeout(res => {
        console.log(this.$store.getters.vacancyCandidates);
        this.candidates = this.$store.getters.vacancyCandidates;
      }, 1000);
    });
  },
  methods: {
    associateCandidate(id) {
      let data = {
        vacancyId: this.$route.params.id,
        candidateId: id
      };
      console.log(data);
      this.$store.dispatch("associateCandidate", data);
    }
  }
};
</script>


