<template>
    <div class="PageInitial">
        <b-row class="banner">
            <b-col lg="12" md="12" sm="12" xs="12">
                <h1>Está procurando emprego? Encontre com a Devworks</h1>
                <h4>A Devworks é um portal de empregos que te conecta com o mundo corporativo.</h4>
                <br><br>
                <b-link class="registerCandidate" to="/home/registerCandidate">Comece agora, é gratuito</b-link>
                <br><br><br>
                <b-link class="registerCompany" to="/home/registerCompany">Está recrutando para a sua empresa? Cadastre-se aqui</b-link>
            </b-col>
        </b-row>
        <b-row class="banner-secondary text-center">
            <b-col class="banner-candidate" lg="6" md="6" sm="6" xs="12">
                <i class="fa fa-user"></i>
                <br><br>
                <h3>Candidato</h3>
                <p>As empresas te encontram e quem escolhe se aceita ou não é você.</p>
                <i class="fa fa-user big"></i>
            </b-col>
            <b-col class="banner-company text-center" lg="6" md="6" sm="6" xs="12">
                <i class="fa fa-briefcase"></i>
                <br><br>
                <h3>Empresa</h3>
                <p>Encontre os melhores talentos e reduza o seu tempo de contratação!</p>
                <i class="fa fa-globe big"></i>
            </b-col>
        </b-row>
    </div>
</template>
<script>
export default {
    
}
</script>
