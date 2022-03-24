<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center" id="cardContainer">
            <div
                v-for="book in store.data.books"
                :key="book.ISBN"
                class="d-flex m-4  align-items-baseline card col-12 col-sm-6 col-md-4 col-lg-3"
                :class="[
                    book.NumberOfPages < 50 ? 'less' : 'more',
                ]"
            >
                <TheCard :book="book"/>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '@/stores/index';
import TheCard from '@/components/TheCard.vue';
export default {
    data() {
        return {
            store:store
        }
    },
    components: {
        TheCard
    }
}
</script>

<style>
.link {
    color: orange;
    text-decoration: none;
}

.card {
    width: 20rem;

}
.card img {
    height: 20rem;
    width: 100%;
    padding: 0 !important;
}

.more {
    border: 1px solid darkgreen;
    background-image: linear-gradient(to bottom, transparent 50%, rgba(16, 195, 255, 0));
    box-shadow: 0 0 3rem rgb(3, 243, 3);
}
.less {
    border: 1px solid red;
    box-shadow: 0 0 3rem rgb(100, 1, 1);
    background-image: linear-gradient(to bottom, transparent 50%, rgb(188, 206, 107));
}
</style>