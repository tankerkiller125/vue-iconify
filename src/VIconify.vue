<template>
    <span>{{ icon.body }}</span>
</template>

<script>
    export default {
        data: () => ({
            icon: {
                body: null
            }
        }),
        props: {
            name: {
                type: String,
                required: true
            },
            inline: Boolean
        },
        created() {
            var icons = this.name.toString().split(':');
            fetch(`https://api.iconify.design/${icons[0]}.json?icons=${icons[1]}`).then((response) => {
               return response.json().then((json) => {
                   this.icon.body = json.icons[0].body
               })
            });
        }
    }
</script>

<style scoped>

</style>
