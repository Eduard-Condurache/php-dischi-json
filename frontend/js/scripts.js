const { createApp } = Vue;

createApp({
    data () {
        return {
            spotifyData: [],
        };
    },
    created() {
        axios
            .get('http://localhost/php-dischi-json/backend/api.php')
            .then((resp) => {
                console.log(resp.data)

                this.spotifyData = resp.data
            })
    }
}).mount('#app');