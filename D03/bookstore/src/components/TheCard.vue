<template>
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
</template>

<script>
import { store } from '@/stores/index'
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        addToWishList(book){
            this.store.data.wishlist.push(book);
        },
        isWished(book) {
            return this.store.data.wishlist.some(wbook => wbook.ISBN == book.ISBN) ;
        },
        removeBook(book) {
            store.data.wishlist.splice(this.wishlist.findIndex(wbook => wbook.ISBN == book.ISBN), 1);
        },
        formatCurrency(value) {
            return (new Intl.NumberFormat('ar-SA', { 
                style: 'currency', 
                currency: 'SAR', 
            }).format(value));
        },
        getTotalPrice() {
            let totalPrice = 0;
            this.store.data.wishlist.forEach(book => totalPrice += book.price.value);
            return totalPrice;
        }
    },
    props: {
        book: Object
    },
}
</script>