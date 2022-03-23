<template>
    <div class="row">
        <div class="row">
           <TheNavbar/>
        </div>
        <div class="row">
            <CardsContainer/>
        </div>
    </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import CardsContainer from '@/components/CardsContainer.vue'

export default {
    data() {
        return {

        }
    },
    methods: {

    },
    components: {
        TheNavbar,
        CardsContainer
    }
}
</script>