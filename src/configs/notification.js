import Vue from 'vue';
export const notification = {
    success(title, message) {
        Vue.notify({
            group: "foo",
            type: "success",
            title: title,
            text: message,
            duration: 5000
        });
    },
    error(title, message) {
        Vue.notify({
            group: "foo",
            type: "error",
            title: title,
            text: message,
            duration: 5000
        });
    },
    warning(title, message) {
        Vue.notify({
            group: "foo",
            type: "warning",
            title: title,
            text: message,
            duration: 5000
        });
    },
    primary(title, message) {
        Vue.notify({
            group: "foo",
            type: "primary",
            title: title,
            text: message,
            duration: 5000
        });
    },
}