<template>
  <div>
    <b-row v-for="(candidate, index) in candidates" v-bind:key="index">
      <b-col sm="12" md="12">
        <transition name="fade">
          <b-card>
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
    this.$store
      .dispatch("vacancyCadidate", "5cffef2d28c87f0017639656")
      .then(res => {
        setTimeout(res => {
          this.candidates = this.$store.state.vacancy.candidates;
        }, 1000);
      });
  },
  methods: {
    associateCandidate(id) {
      let data = {
        vacancyId: "5cffef2d28c87f0017639656",
        candidateId: id
      };
      console.log(data);
      this.$store.dispatch("associateCandidate", data);
    }
  }
};
</script>
