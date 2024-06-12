export default {
    template: `
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    `,
    props: {
        errorMessage: {
            type: String,
            required: true
        }
    }
}