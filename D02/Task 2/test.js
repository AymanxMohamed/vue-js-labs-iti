$(window).on('load', function() {
    $('#exampleModalToggle').modal('show');
});

const app = Vue.createApp({
    data() {
        return {
            post: {
                title: '',
                category: '',
                description: '',
                shareimmediately: false,
                shareon: [],
                edition: '',
                
            },
            postdata: {
                id: 1,
                categories:["IOT", "OpenSource", "PD", "MobileCross"],
                shareon:["Facebook", "Twitter", "LinkedIn"],
                editions:["First", "Second", "Third"]
            }
        }
    },
    
    methods: {

    }
}).mount('#mainwrapper');