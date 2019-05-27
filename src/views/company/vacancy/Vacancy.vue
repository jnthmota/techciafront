
<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="10">
        <h1>VAGAS</h1>
      </b-col>
      <b-col md="2">
        <b-button  variant="primary">
          <i class="fa fa-plus"></i>&nbsp;Cadastrar Vaga
        </b-button>
      </b-col>
    </b-row>
    <br>
    <br>
    <b-row>
      <b-col sm="12" md="12">
        <transition name="fade">
          <b-card class="card-accent-warning" no-body v-if="show">
            <div slot="header">
              Desenvolvedor back end
              <div class="card-header-actions">
                <b-link href="#" class="card-header-action btn-setting">
                  <i class="cui-magnifying-glass"></i>
                </b-link>
                <b-link to="/formvacancy" class="card-header-action btn-setting">
                  <i class="icon-pencil"></i>
                </b-link>
                <b-link href="#" class="card-header-action btn-close" v-on:click="show = !show">
                  <i class="icon-close"></i>
                </b-link>
                <b-link class="card-header-action btn-minimize" v-b-toggle.collapse1>
                  <i class="icon-arrow-up"></i>
                </b-link>
              </div>
            </div>
            <b-collapse id="collapse1" visible>
              <b-card-body>
                <b-row>
                  <b-col md="3">
                    <b>Tipo de Oferta:</b>
                    <br>CLT
                  </b-col>
                  <b-col md="3">
                    <b>Tipo de Trabalho:</b>
                    <br>Presencial
                  </b-col>
                  <b-col md="3">
                    <b>Escolaridade Mínima:</b>
                    <br>Superior
                  </b-col>
                  <b-col md="3">
                    <b>Curso: </b>
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
                <b-row>
                  <b-col md="3">
                    <b>Leitura:</b> Avançado
                  </b-col>
                  <b-col md="3">
                    <b>Conversação:</b> Avançado
                  </b-col>
                  <b-col md="3">
                    <b>Escrita:</b> Avançado
                  </b-col>
                </b-row>
                <br>
                <br>
                <b-row>
                  <b-col md="12">
                    <b>Principais Habilidades :</b>
                    <b-badge pill variant="dark">APIs</b-badge>
                    <b-badge pill variant="dark">Node.JS</b-badge>
                    <b-badge pill variant="dark">PLSQL</b-badge>
                    <b-badge pill variant="dark">BD NOSQL</b-badge>
                  </b-col>
                </b-row>
                <br>
                <br>
                <b-row>
                  <b-col md="12">
                    <b>Outras Habilidades :</b>
                    <b-badge pill variant="primary">HTML</b-badge>
                    <b-badge pill variant="primary">CSS</b-badge>
                    <b-badge pill variant="primary">Linux</b-badge>
                    <b-badge pill variant="primary">C</b-badge>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col md="12">
                    <b>Descrição da Vaga :</b><br>
                    Estamos buscando um Backend Software Engineer apaixonado por tecnologia e que não tenha medo de sujar as mãos de graxa e colocar a mão na massa. Procuramos aqueles que não esperam acontecer, que são proativos e gostam principalmente de resolver problemas.
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
export default {
  name: "Vancancy",
  data: function() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
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
