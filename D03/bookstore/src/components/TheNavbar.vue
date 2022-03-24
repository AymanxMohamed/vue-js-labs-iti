<template>
    <nav
        class="d-flex bg-dark justify-content-between text-light p-2 my-2 align-items-baseline"
    >
        <router-link to="/books">Books</router-link>
        <div class="d-flex align-items-baseline">
        <p class="px-2">{{ store.data.wishlist.length }} <span v-show="store.data.wishlist.length > 1">Books</span> <span v-show="store.data.wishlist.length == 1">Book</span>  with total price {{ formatCurrency(getTotalPrice()) }}</p>
        <div class="btn btn-primary">
            <router-link to="/wishlist"> Wished List</router-link>
        </div>
        </div>
    </nav>
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