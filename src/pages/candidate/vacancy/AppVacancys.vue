<template>
  <div class="AppVacancys">
    <!-- Banner quando o candidato não tem vagas -->
    <b-row v-if="!mudarStatus" class="not-vacancy">
      <b-col md="12">
        <h1 class="text-center">Infelizmente não temos oportunidades para seu perfil.</h1>
      </b-col>
    </b-row>

    <b-row v-if="mudarStatus" class="banner-vacancy">
      <b-col md="12">
        <h1 class="text-center">Você tem oportunidades de emprego, confira abaixo!</h1>
      </b-col>
    </b-row>

    <!-- Temporario -->
    <b-row>
      <b-col md="12">
        <br>
        <br>
        <b-button
          @click.prevent="mudarStatus = !mudarStatus"
          size="sm"
          variant="primary"
          class="btn-primary"
        >Mudar Status</b-button>
      </b-col>
    </b-row>

    <!-- Lista de vagas -->
    <b-row v-if="mudarStatus" class="list-vacancy">
      <b-col v-for="(vacancy, index) in vacancys" v-bind:key="index" class="vacancy" md="6">
        <b-card :header="vacancy.position">
          <h4>{{vacancy.user.name}}</h4>
          <h5>{{vacancy.minLevel}}</h5>
          <p>
            <span class="salary">{{vacancy.user.email}}</span>
            <span class="separate">|</span>
            <span class="salary">{{vacancy.user.phone | formatPhone}}</span>
          </p>
          <p>
            <span class="salary">R$ {{vacancy.maxSalary}}</span>
            <span class="separate">|</span>
            <span class="location">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              {{vacancy.citiesForWork[0].city}}, {{vacancy.citiesForWork[0].state}}
            </span>
            <span class="separate">|</span>
            <span v-for="(offer, index) in vacancy.offerType" v-bind:key="index">
              {{offer}}
              <span
                v-if="index != vacancy.offerType.length - 1 && index == vacancy.offerType.length"
              >/</span>
            </span>
            <span class="separate">|</span>
            <span v-for="(work, index) in vacancy.workType" v-bind:key="index">
              {{work}}
              <span
                v-if="index != vacancy.workType.length - 1 && vacancy.workType.length > 1"
              >/</span>
            </span>
          </p>
          <p class="description">{{vacancy.description}}</p>
          <p class="skills">
            <b>
              Habilidades Requeridas:
              <span
                v-for="(skill, index) in vacancy.skills"
                v-bind:key="index"
              >
                <b-badge class="skills" variant="dark">{{skill.experience}}</b-badge>
              </span>
            </b>
          </p>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "AppVacancys",
  data() {
    return {
      mudarStatus: false,
      vacancys: [
        {
          _id: "1",
          position: "Desenvolvedor Back End",
          minLevel: "Junior",
          description:
            "Já pensou em fazer parte de um time de tecnologia que está criando muito mais do que um delivery comum? \n A Rappi é um assistente pessoal que faz tudo o que você precisar! Suas compras de supermercado, comprar remédios na farmácia ou seus pratos preferidos em qualquer restaurante da cidade, levar aquele documento no cartório ou até mesmo te entregar dinheiro em espécie para uma emergência. \n Buscamos desenvolvedores que consigam entender suas responsabilidade e tenham a capacidade de trabalhar de forma autônoma.",
          maxSalary: 2000,
          offerType: ["CLT"],
          workType: ["Presencial", "Remoto"],
          skills: [
            {
              experience: "Java"
            },
            {
              experience: "Node JS"
            },
            {
              experience: "Python"
            },
            {
              experience: "C"
            }
          ],
          citiesForWork: [
            {
              city: "São Paulo",
              state: "São Paulo"
            }
          ],
          user: {
            name: "Santander",
            email: "vonex@gmail.com",
            phone: "11943038711"
          }
        },
        {
          _id: "1",
          position: "Desenvolvedor Back End",
          minLevel: "Junior",
          description:
            "Já pensou em fazer parte de um time de tecnologia que está criando muito mais do que um delivery comum? \n A Rappi é um assistente pessoal que faz tudo o que você precisar! Suas compras de supermercado, comprar remédios na farmácia ou seus pratos preferidos em qualquer restaurante da cidade, levar aquele documento no cartório ou até mesmo te entregar dinheiro em espécie para uma emergência. \n Buscamos desenvolvedores que consigam entender suas responsabilidade e tenham a capacidade de trabalhar de forma autônoma.",
          maxSalary: 2000,
          offerType: ["CLT"],
          workType: ["Presencial", "Remoto"],
          skills: [
            {
              experience: "Java"
            },
            {
              experience: "Node JS"
            },
            {
              experience: "Python"
            },
            {
              experience: "C"
            }
          ],
          citiesForWork: [
            {
              city: "São Paulo",
              state: "São Paulo"
            }
          ],
          user: {
            name: "Santander",
            email: "vonex@gmail.com",
            phone: "11943038711"
          }
        },
        {
          _id: "1",
          position: "Desenvolvedor Back End",
          minLevel: "Junior",
          description:
            "Já pensou em fazer parte de um time de tecnologia que está criando muito mais do que um delivery comum? \n A Rappi é um assistente pessoal que faz tudo o que você precisar! Suas compras de supermercado, comprar remédios na farmácia ou seus pratos preferidos em qualquer restaurante da cidade, levar aquele documento no cartório ou até mesmo te entregar dinheiro em espécie para uma emergência. \n Buscamos desenvolvedores que consigam entender suas responsabilidade e tenham a capacidade de trabalhar de forma autônoma.",
          maxSalary: 2000,
          offerType: ["CLT"],
          workType: ["Presencial", "Remoto"],
          skills: [
            {
              experience: "Java"
            },
            {
              experience: "Node JS"
            },
            {
              experience: "Python"
            },
            {
              experience: "C"
            }
          ],
          citiesForWork: [
            {
              city: "São Paulo",
              state: "São Paulo"
            }
          ],
          user: {
            name: "Santander",
            email: "vonex@gmail.com",
            phone: "11943038711"
          }
        },
        {
          _id: "1",
          position: "Desenvolvedor Back End",
          minLevel: "Junior",
          description:
            "Já pensou em fazer parte de um time de tecnologia que está criando muito mais do que um delivery comum? \n A Rappi é um assistente pessoal que faz tudo o que você precisar! Suas compras de supermercado, comprar remédios na farmácia ou seus pratos preferidos em qualquer restaurante da cidade, levar aquele documento no cartório ou até mesmo te entregar dinheiro em espécie para uma emergência. \n Buscamos desenvolvedores que consigam entender suas responsabilidade e tenham a capacidade de trabalhar de forma autônoma.",
          maxSalary: 2000,
          offerType: ["CLT"],
          workType: ["Presencial", "Remoto"],
          skills: [
            {
              experience: "Java"
            },
            {
              experience: "Node JS"
            },
            {
              experience: "Python"
            },
            {
              experience: "C"
            }
          ],
          citiesForWork: [
            {
              city: "São Paulo",
              state: "São Paulo"
            }
          ],
          user: {
            name: "Santander",
            email: "vonex@gmail.com",
            phone: "11943038711"
          }
        },
      ]
    };
  },
  methods: {}
};
</script>
