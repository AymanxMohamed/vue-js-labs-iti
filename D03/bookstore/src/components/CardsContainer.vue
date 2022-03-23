<template>
    <p> Hello from </p>
    <TheCard v-for="book in books" :key="book.ISBN" :book="book" />
</template>


<script>
import books from '@/api/books';
export default {
    data() {
        return {
            books
        }
    },
    methods: {

    }
}
</script>