import { notification } from '../notification';

export const validation = {
    login(payload) {
        let errors = [];
        let submitted = true;
        if (!payload.email) {
            errors.push("O email é obrigatória.");
            submitted = false;
        } else if (!this.validEmail(payload.email)) {
            errors.push("Utilize um email válido.");
        }

        if (!payload.password) {
            errors.push("A senha é obrigatória.");
            submitted = false;
        }

        if (!submitted) {
            let message = "";
            for (let error in errors) {
                message += errors[error] + "<br/>";
            }
            notification.error("Autentificação", message);
        }
        return submitted;
    },
    registerCandidate(payload) {
        const errors = [];
        let submitted = true;
        if (!payload.email) {
            errors.push("O email é obrigatória.");
            submitted = false;
        } else if (!this.validEmail(payload.email)) {
            errors.push("Utilize um email válido.");
        }

        if (!payload.password) {
            errors.push("A senha é obrigatória.");
            submitted = false;
        }

        if (!payload.name) {
            errors.push("O nome é obrigatório.");
            submitted = false;
        }
        if (!payload.phone) {
            errors.push("O telefone é obrigatório.");
            submitted = false;
        }
        if (!payload.document) {
            errors.push("O CPF é obrigatório.");
            submitted = false;
        }else if(!this.validCPF(payload.document)){
            errors.push("O CPF é inválido.");
            submitted = false;
        }


        if (!submitted) {
            let message = "";
            for (let error in errors) {
                message += errors[error] + "<br/>";
            }
            notification.error("Cadastro Candidato", message);
        }
        return submitted;
    },
    validEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    },
    validCPF(cpf) {
        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (cpf.length < 11)
            return false;
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) != cpf.charAt(i + 1)) {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais) {
            numeros = cpf.substring(0, 9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            numeros = cpf.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    }
}