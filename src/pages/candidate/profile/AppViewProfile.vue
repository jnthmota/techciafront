<template>
  <div class="view-profile">
    <b-row class="banner-view-profile">
      <b-col md="12">
        <h1 class="text-center">{{user.name}}</h1>
        <h4 class="text-center">{{user.curriculum.interestCareer}}</h4>
        <h5 class="text-center">{{user.curriculum.level}}</h5>
      </b-col>
    </b-row>
    <b-row class="profile">
      <b-col md="12">
        <b-tabs>
          <b-tab title="Perfil" active>
            <b-row class="home">
              <b-col md="4">
                <h4>Detalhes do profissional:</h4>
                <div class="professional-details">
                  <b-row>
                    <b-col md="6" sm="12">
                      <label>
                        <b>Email:</b>
                      </label>
                      <br>
                      <span>{{user.email}}</span>
                    </b-col>
                    <b-col md="6" sm="12">
                      <label>
                        <b>Celular:</b>
                      </label>
                      <br>
                      <span>{{user.phone | formatPhone}}</span>
                      <br>
                      <br>
                    </b-col>

                    <b-col md="6" sm="12">
                      <label>
                        <b>Data de nascimento:</b>
                      </label>
                      <br>
                      <span>{{user.dateBirth | formatDate}}</span>
                    </b-col>

                    <b-col md="6" sm="12">
                      <label>
                        <b>CPF:</b>
                      </label>
                      <br>
                      <span>{{user.document | formatCPF}}</span>
                      <br>
                      <br>
                    </b-col>
                    <b-col md="6" sm="12">
                      <label>
                        <b>Pretensão Salarial :</b>
                      </label>
                      <br>
                      <span>R$ {{user.curriculum.salaryPretension}}</span>
                      <br>
                      <br>
                    </b-col>
                    <b-col md="6" sm="12">
                      <label>
                        <b>Tipo de trabalho:</b>
                      </label>
                      <br>
                      <span v-for="(work, index) in user.curriculum.workType" v-bind:key="index">
                        {{work}}
                        <span
                          v-if="index != user.curriculum.workType.length - 1 && user.curriculum.workType.length > 1"
                        >/</span>
                      </span>
                    </b-col>
                    <b-col md="6" sm="12">
                      <label>
                        <b>Tipo de oferta:</b>
                      </label>
                      <br>
                      <span v-for="(offer, index) in user.curriculum.offerType" v-bind:key="index">
                        {{offer}}
                        <span
                          v-if="index != user.curriculum.offerType.length - 1 && user.curriculum.offerType.length > 1"
                        >/</span>
                      </span>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col md="4">
                <h4>Endereço:</h4>
                <div class="address">
                  <b-row>
                    <b-col md="4">
                      <label>
                        <b>Cidade:</b>
                      </label>
                      <br>
                      <span>{{user.address.city}}</span>
                    </b-col>
                    <b-col md="8">
                      <label>
                        <b>Estado:</b>
                      </label>
                      <br>
                      <span>{{user.address.state}}</span>
                      <br>
                      <br>
                    </b-col>
                    <b-col md="4">
                      <label>
                        <b>CEP:</b>
                      </label>
                      <br>
                      <span>{{user.address.postalCode | formatCep}}</span>
                      <br>
                    </b-col>
                    <b-col md="8">
                      <label>
                        <b>Rua / Av:</b>
                      </label>
                      <br>
                      <span>{{user.address.street}}</span>
                      <br>
                      <br>
                    </b-col>
                    <b-col md="12">
                      <label>
                        <b>Número:</b>
                      </label>
                      <br>
                      <span>{{user.address.number}}</span>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
              <b-col md="4">
                <h4>Linguagens:</h4>
                <div
                  v-for="(skill, index) in user.curriculum.programmingLanguages"
                  v-bind:key="index"
                  class="skills"
                >
                  <span>
                    <i class="fa fa-plus-square" aria-hidden="true"></i>
                    {{skill.name}}
                    <b-progress
                      :value="skill.yearExperience"
                      :max="mostExperience"
                      show-value
                      class="mb-3"
                    ></b-progress>
                  </span>
                </div>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Experiências">
            <b-row class="experiences">
              <b-col
                v-for="(experience, index) in user.curriculum.professionalExperience"
                v-bind:key="index"
                md="6"
              >
                <h4>{{experience.position}}</h4>
                <h5>{{experience.company}}</h5>
                <span class="location">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  {{experience.city}}, {{experience.state}}
                </span>
                <span class="separate">|</span>
                <span class="period">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  {{experience.initialDate | formatDate}} até {{experience.finalDate | formatDate}}
                </span>
                <p>{{experience.description}}</p>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Escolaridade">
            <b-row class="education">
              <b-col
                v-for="(scholling, index) in user.curriculum.education"
                v-bind:key="index"
                md="6"
              >
                <h4>{{scholling.course}}</h4>
                <h5>{{scholling.degreeSchooling}}</h5>
                <span class="institution">
                  <i class="fa fa-university" aria-hidden="true"></i>
                  {{scholling.institution}}
                </span>
                <span class="separate">|</span>
                <span class="location">
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  {{scholling.city}}, {{scholling.state}}
                </span>
                <span class="separate">|</span>
                <span class="period">
                  <i class="fa fa-calendar" aria-hidden="true"></i>
                  {{scholling.initialDate | formatDate}} até {{scholling.finalDate | formatDate}}
                </span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Idiomas">
            <b-row class="language">
              <b-col
                v-for="(language, index) in user.curriculum.languages"
                v-bind:key="index"
                md="6"
              >
                <h5>{{language.language}}</h5>
                <span class="readingLevel">Leitura: {{language.readingLevel}}</span>
                <span class="separate">|</span>
                <span class="writtenLevel">Escrita: {{language.writtenLevel}}</span>

                <span class="separate">|</span>
                <span class="conversationLevel">Conversação: {{language.conversationLevel}}</span>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Habilidades, Certificações e Links">
            <b-row>
              <b-col v-if="user.curriculum.skills.length != 0" md="4">
                <b-row class="skills">
                  <b-col md="12">
                    <h4>Habilidades</h4>
                  </b-col>
                </b-row>
                <b-row class="skill">
                  <b-col
                    v-for="(skill, index) in user.curriculum.skills"
                    v-bind:key="index"
                    md="12"
                  >
                    <h5>
                      <i class="fa fa-globe" aria-hidden="true"></i>
                      {{skill}}
                    </h5>
                    <br>
                  </b-col>
                </b-row>
              </b-col>
              <b-col v-if="user.curriculum.certificates.length != 0" md="4">
                <b-row class="certificates">
                  <b-col md="12">
                    <h4>Certificações</h4>
                  </b-col>
                </b-row>
                <b-row class="certificate">
                  <b-col
                    v-for="(certificate, index) in user.curriculum.certificates"
                    v-bind:key="index"
                    md="12"
                  >
                    <h5>
                      <i class="fa fa-book" aria-hidden="true"></i>
                      {{certificate}}
                    </h5>
                    <br>
                  </b-col>
                </b-row>
              </b-col>
              <b-col v-if="user.curriculum.socialProfiles.length != 0" md="4">
                <b-row class="social-profiles">
                  <b-col md="12">
                    <h4>Links</h4>
                  </b-col>
                </b-row>
                <b-row class="social-profile">
                  <b-col
                    v-for="(socialProfile, index) in user.curriculum.socialProfiles"
                    v-bind:key="index"
                    md="12"
                  >
                    <b-link target="_blank" :href="socialProfile.url">
                      <h5>
                        <i class="fa fa-share-square" aria-hidden="true"></i>
                        {{socialProfile.name}}
                      </h5>
                      <br>
                    </b-link>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "AppViewProfile",
  data() {
    return {
      mostExperience: 0,
      user: {
        address: {
          street: "Rua Anhanduí Mirim",
          number: "869",
          city: "São Paulo",
          state: "São Paulo",
          postalCode: "04904200"
        },
        curriculum: {
          offerType: ["PJ", "CLT"],
          workType: ["Presencial"],
          skills: ["Spring-Bot", "Express", "Laravel"],
          certificates: ["Java", "SQL"],
          education: [
            {
              institution: "Universidade São Judas",
              degreeSchooling: "Graduação",
              course: "Ciências da Computação",
              city: "São Paulo",
              state: "São Paulo",
              initialDate: "2019-01-01T08:24:00.000Z",
              finalDate: "2019-02-01T08:24:00.000Z"
            },
            {
              institution: "Universidade São Judas",
              degreeSchooling: "Graduação",
              course: "Ciências da Computação",
              city: "São Paulo",
              state: "São Paulo",
              initialDate: "2019-01-01T08:24:00.000Z",
              finalDate: "2019-02-01T08:24:00.000Z"
            },
            {
              institution: "Universidade São Judas",
              degreeSchooling: "Graduação",
              course: "Ciências da Computação",
              city: "São Paulo",
              state: "São Paulo",
              initialDate: "2019-01-01T08:24:00.000Z",
              finalDate: "2019-02-01T08:24:00.000Z"
            },
            {
              institution: "Universidade São Judas",
              degreeSchooling: "Graduação",
              course: "Ciências da Computação",
              city: "São Paulo",
              state: "São Paulo",
              initialDate: "2019-01-01T08:24:00.000Z",
              finalDate: "2019-02-01T08:24:00.000Z"
            },
            {
              institution: "Universidade São Judas",
              degreeSchooling: "Graduação",
              course: "Ciências da Computação",
              city: "São Paulo",
              state: "São Paulo",
              initialDate: "2019-01-01T08:24:00.000Z",
              finalDate: "2019-02-01T08:24:00.000Z"
            }
          ],
          professionalExperience: [
            {
              _id: "5d03d68e8bf3fa0017fc98b4",
              initialDate: "2019-01-01T08:24:00.000Z",
              finalDate: "2019-02-01T08:24:00.000Z",
              city: "São Paulo",
              state: "São Paulo",
              company: "Frascomar",
              position: "Desenvolvedor Back End",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              _id: "5d03d68e8bf3fa0017fc98b4",
              initialDate: "2019-01-01T08:24:00.000Z",
              finalDate: "2019-02-01T08:24:00.000Z",
              city: "São Paulo",
              state: "São Paulo",
              company: "Frascomar",
              position: "Desenvolvedor Back End",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
              _id: "5d03d68e8bf3fa0017fc98b4",
              initialDate: "2019-01-01T08:24:00.000Z",
              finalDate: "2019-02-01T08:24:00.000Z",
              city: "São Paulo",
              state: "São Paulo",
              company: "Frascomar",
              position: "Desenvolvedor Back End",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          ],
          languages: [
            {
              writtenLevel: "Básico",
              readingLevel: "Básico",
              conversationLevel: "Básico",
              _id: "5d03d68e8bf3fa0017fc98b3",
              language: "Inglês"
            },
            {
              writtenLevel: "Básico",
              readingLevel: "Básico",
              conversationLevel: "Básico",
              _id: "5d03d68e8bf3fa0017fc98b3",
              language: "Russo"
            },
            {
              writtenLevel: "Básico",
              readingLevel: "Básico",
              conversationLevel: "Básico",
              _id: "5d03d68e8bf3fa0017fc98b3",
              language: "Espanhol"
            },
            {
              writtenLevel: "Básico",
              readingLevel: "Básico",
              conversationLevel: "Básico",
              _id: "5d03d68e8bf3fa0017fc98b3",
              language: "Alemão"
            }
          ],
          socialProfiles: [
            {
              name: "Github",
              url: "https://github.com/matheusmbs"
            },
            {
              name: "Facebook",
              url: "https://www.facebook.com/matheus.moura.1029"
            },
            {
              name: "Linkedin",
              url:
                "https://www.linkedin.com/in/matheus-moura-borges-silva-791118163/"
            }
          ],
          citiesForWork: [
            {
              _id: "5d03d64b8bf3fa0017fc98ae",
              city: "São Paulo",
              state: "SP"
            }
          ],
          programmingLanguages: [
            {
              name: "Java",
              yearExperience: 10
            },
            {
              name: "Node JS",
              yearExperience: 3
            },
            {
              name: "PHP",
              yearExperience: 4
            },
            {
              name: "C",
              yearExperience: 7
            },
            {
              name: "Python",
              yearExperience: 2
            }
          ],
          level: "estagio",
          interestCareer: "Desenvolvedor Back End",
          salaryPretension: 2000
        },
        selectedVacancys: [],
        _id: "5d0328228bf3fa0017fc988c",
        name: "Matheus Moura Borges Silva",
        email: "matheusmbs@gmail.com",
        document: "44512923012",
        phone: "11948053052",
        dateBirth:
          "Fri Jun 07 2019 14:40:35 GMT+0000 (Coordinated Universal Time)"
      }
    };
  },
  beforeMount() {
    //   Linguagem com maior experiencia
    this.user.curriculum.programmingLanguages.forEach(res => {
      if (res.yearExperience > this.mostExperience)
        this.mostExperience = res.yearExperience;
    });
  }
};
</script>

