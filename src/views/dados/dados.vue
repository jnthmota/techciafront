<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="3" md="3"></b-col>
      <b-col sm="6" md="6">
        <b-card class="card-accent-primary" header="Dados Pessoais">
          <b-row>
            <b-col sm="12">
              <b-form-group>
                <label for="name">*Nome Completo:</label>
                <b-form-input type="text" id="name" placeholder="Digite seu nome..."></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group>
                <label for="email">*Email:</label>
                <b-form-input type="email" id="email" placeholder="Digite seu email..."></b-form-input>
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group label="*Celular" description="ex. (99) 99999-9999">
                <b-input-group>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="fa fa-phone"></i>
                    </span>
                  </div>
                  <masked-input
                    type="tel"
                    name="phone"
                    class="form-control"
                    v-model="phone"
                    :mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
                    :guide="true"
                    placeholderChar="#"
                  ></masked-input>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col sm="12">
              <b-form-group>
                <b-button type="submit" size="sm" variant="primary">
                  <i class="fa fa-dot-circle-o"></i> Salvar
                </b-button>
                <b-button type="reset" size="sm" variant="danger">
                  <i class="fa fa-ban"></i> Cancelar
                </b-button>
              </b-form-group>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col sm="3" md="3"></b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "dados",
  data: function() {
    return {
      show: true,
      phone: ""
    };
  },

  computed: {
    rangeStart: function() {
      return new Date(this.selectedDate.start).toLocaleDateString();
    },
    rangeEnd: function() {
      return new Date(this.selectedDate.end).toLocaleDateString();
    }
  },
  methods: {
    autoCorrectedDatePipe: () => {
      return createAutoCorrectedDatePipe("mm/dd/yyyy");
    }
  }
};
</script>
