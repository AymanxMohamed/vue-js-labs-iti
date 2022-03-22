<template>
    <main class="container-fluid">
    <nav
        class="d-flex bg-dark justify-content-between text-light p-2 my-2 align-items-baseline"
    >
        <a href="#" class="link" @click="isBookVisable = true"> Books </a>
        <div class="d-flex align-items-baseline">
        <p class="px-2">{{ wishlist.length }} <span v-show="wishlist.length > 1">Books</span> <span v-show="wishlist.length == 1">Book</span>  with total price {{ formatCurrency(getTotalPrice()) }}</p>
        <div class="btn btn-primary" @click="isBookVisable = false">
            Wished List
        </div>
        </div>
    </nav>
    <div
        class="row d-flex justify-content-between align-items-baseline"
        v-if="isBookVisable"
    >
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
    </div>
    <span class="war"> </span>
    <div
        class="alert alert-danger"
        role="alert"
        v-if="!isBookVisable && wishlist.length == 0"
    >
        You 8don't have any Books in the wish list
    </div>
    <table class="table" v-if="!isBookVisable && wishlist.length != 0">
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
        <tr v-for="book in wishlist" :key="book.ISBN">
            <td scope="col">{{}}</td>
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
    </main>
</template>

<script>
import books from '../../api/books';
export default {
    data() {
        return {
            isBookVisable: true,
            message: "test",
            books: books,
            wishlist:[],
        }
    },
    methods: {
        addToWishList(book){
            this.wishlist.push(book);
        },
        isWished(book) {
            return this.wishlist.some(wbook => wbook.ISBN == book.ISBN) ;
        },
        removeBook(book) {
            this.wishlist.splice(this.wishlist.findIndex(wbook => wbook.ISBN == book.ISBN), 1);
        },
        formatCurrency(value) {
            return (new Intl.NumberFormat('ar-SA', { 
                style: 'currency', 
                currency: 'SAR', 
            }).format(value));
        },
        getTotalPrice() {
            let totalPrice = 0;
            this.wishlist.forEach(book => totalPrice += book.price.value);
            return totalPrice;
        }
    }
}
</script>

<style scoped>
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