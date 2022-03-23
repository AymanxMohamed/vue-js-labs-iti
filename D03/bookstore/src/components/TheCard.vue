<template>
    <div
        v-for="book in books"
        :key="book.ISBN"
        class="d-flex my-3 mx-3 align-items-baseline card col-12 col-sm-6 col-md-4 col-lg-3"
        :class="[
            book.NumberOfPages < 50 ? 'less' : 'more',
        ]"

    >
        <div class="row">
            <img
            class="col-12"
            :src="book.image"
            :alt="book.title"
            :title="book.title"
            />
            <p class="my-2 btn-primary col-12 text-center m-auto">
                Title: {{book.categories}}
            </p>
            <p class="col-12 text-center btn-primary m-auto">
                Author: {{book.author}}
            </p>
            <p class="my-2 col-6 text-center btn-warning m-auto">
                N.O.P: {{book.NumberOfPages}}
            </p>
            <p class="col-6 text-center btn-danger m-auto">
                price: {{ formatCurrency(book.price.value) }}
            </p>
            <p class="my-2 col-12 text-center btn-primary m-auto">
                ISBN: {{book.ISBN}}
            </p>
            <button
                class="col-12 btn btn-primary"
                @click="addToWishList(book)"
                :disabled="isWished(book)"
            >
                Add To WIsh list
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        book: Object
    }
}
</script>