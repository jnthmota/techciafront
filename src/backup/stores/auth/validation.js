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
        } else if (!this.validCPF(payload.document)) {
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
    registerHunter(payload) {
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
            errors.push("O CNPJ é obrigatório.");
            submitted = false;
        } else if (!this.validCNPJ(payload.document)) {
            errors.push("O CNPJ é inválido.");
            submitted = false;
        }


        if (!submitted) {
            let message = "";
            for (let error in errors) {
                message += errors[error] + "<br/>";
            }
            notification.error("Cadastro Empresa", message);
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
    },
    validCNPJ(cnpj) {

        cnpj = cnpj.replace(/[^\d]+/g, '');

        if (cnpj == '') return false;

        if (cnpj.length != 14)
            return false;

        // Elimina CNPJs invalidos conhecidos
        if (cnpj == "00000000000000" ||
            cnpj == "11111111111111" ||
            cnpj == "22222222222222" ||
            cnpj == "33333333333333" ||
            cnpj == "44444444444444" ||
            cnpj == "55555555555555" ||
            cnpj == "66666666666666" ||
            cnpj == "77777777777777" ||
            cnpj == "88888888888888" ||
            cnpj == "99999999999999")
            return false;

        // Valida DVs
        let tamanho = cnpj.length - 2
        let numeros = cnpj.substring(0, tamanho);
        let digitos = cnpj.substring(tamanho);
        let soma = 0;
        let pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;

        tamanho = tamanho + 1;
        numeros = cnpj.substring(0, tamanho);
        soma = 0;
        pos = tamanho - 7;
        for (let i = tamanho; i >= 1; i--) {
            soma += numeros.charAt(tamanho - i) * pos--;
            if (pos < 2)
                pos = 9;
        }
        let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;

        return true;

    }
}