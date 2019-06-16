import Vue from 'vue';

export const formatDate = Vue.filter('formatDate', function (value) {
    let date = new Date(value);
    let day = date.getDay() < 10 ? '0' + date.getDay() : date.getDay();
    let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
    let year = date.getFullYear();
    return day + "/" + month + "/" + year;
});
export const formatCPF = Vue.filter('formatCPF', function (value) {
    return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
});
export const formatCNPJ = Vue.filter('formatCNPJ', function (value) {
    return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"\$1.\$2.\$3\/\$4\-\$5");
});
export const formatCep = Vue.filter('formatCep', function (value) {
    return value.replace(/(\d{5})(\d{3})/g,"\$1-\$2");
});
export const formatPhone = Vue.filter('formatPhone', function (value) {
    let phone = '';
    if(value.length == 9){
        phone = value.replace(/(\d{2})(\d{5})(\d{4})/g,"(\$1)\$2-\$2");
    }else{
        phone = value.replace(/(\d{2})(\d{4})(\d{4})/g,"(\$1) \$2-\$2");
    }
    return phone;
});


