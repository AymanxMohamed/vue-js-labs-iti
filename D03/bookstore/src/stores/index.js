import { reactive } from "vue";
import books from '@/api/books'

export const store = reactive({
    data: {
        books,
        wishlist:[],
    },
    methods: {

    }

})