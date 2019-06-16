<template>
  <div id="teste" class="edit-profile">
    <b-row class="banner-edit-profile">
      <b-col md="12">
        <h1 class="text-center">Editar Perfil</h1>
      </b-col>
    </b-row>

    <b-row class="form-wizard">
      <b-col class="text-center" md="12">
        <div id="container">
          <div class="step-wizard">
            <div class="progress">
              <div class="progressbar empty"></div>
              <div id="prog" class="progressbar"></div>
            </div>
            <ul>
              <li class="active">
                <a href="#" id="step1">
                  <span class="step">1</span>
                  <span class="title">Client Details</span>
                </a>
              </li>
              <li class>
                <a href="#" id="step2">
                  <span class="step">2</span>
                  <span class="title">Brand Details</span>
                </a>
              </li>
              <li class>
                <a href="#" id="step3">
                  <span class="step">3</span>
                  <span class="title">Shift Details</span>
                </a>
              </li>
              <li class>
                <a href="#" id="step4">
                  <span class="step">4</span>
                  <span class="title">Confirmation</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="buttons">
            <button class="btn" id="prev">prev</button>
            <button class="btn" id="next">next</button>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
const JQuery = require("jquery");
export default {
  mounted: function() {
    var vm = this;
    JQuery(this.$app.msg).hide();
  }
};
</script>
