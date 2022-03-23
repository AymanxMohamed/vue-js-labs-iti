<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <navbar/>
            </div>
        </div>
    </div>
</template>
<script>
import navbar from './components/Navbar.vue';
export default {
    name: 'Main',
    components: {
        navbar
    }
}
</script>