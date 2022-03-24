<template>
    <div class="container-fluid">
        <div
            class="alert alert-danger"
            role="alert"
            v-if="store.data.wishlist.length == 0"
        >
            You don't have any Books in the wish list
        </div>
        <table class="table" v-if="store.data.wishlist.length != 0">
            <thead>
                <tr>
                    <th scope="col">ISBN</th>
                    <th scope="col">Title</th>
                    <th scope="col">Category</th>
                    <th scope="col">Author</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in store.data.wishlist" :key="book.ISBN">
                    <td scope="col">{{book.ISBN}}</td>
                    <td scope="col">{{book.title}}</td>
                    <td scope="col">{{book.categories}}</td>
                    <td scope="col">{{book.author}}</td>
                    <td scope="col">{{ formatCurrency(book.price.value) }}</td>
                    <td>
                        <div class="btn btn-danger" @click="removeBook(book)">Remove</div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4">Total Price</td>
                    <td colspan="2">{{ formatCurrency(getTotalPrice()) }}</td>
                </tr>
                <tr>
                    <td colspan="4">Taxis</td>
                    <td colspan="2">{{ formatCurrency(getTotalPrice() * 0.1) }}</td>
                </tr>
                <tr>
                    <td colspan="4">Grand Total </td>
                    <td colspan="2">{{ formatCurrency(getTotalPrice() * 1.1) }}</td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
import { store } from '@/stores/index';
export default {
    name: 'WishListView',
    data() {
        return {
            store
        }
    },
    methods: {
        removeBook(book) {
            this.store.data.wishlist.splice(this.store.data.wishlist.findIndex(wbook => wbook.ISBN == book.ISBN), 1);
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
}
</script>

