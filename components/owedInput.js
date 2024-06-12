export default {
    template: `
        <div class="form-group">
            <label for="owed" class="block text-sm font-medium leading-6 text-gray-900">Owed (₱):</label>
            <input type="number" v-model="internalOwed" id="owed" min="0" max="1000" @input="updateOwed">
        </div>
    `,
    props: {
        owed: {
            type: Number,
        }
    },
    data() {
        return {
          internalOwed: this.owed,
        };
    },
    watch: {
        owed(newVal) {
          this.internalOwed = newVal;
        }
    },
    methods: {
        updateOwed() {
          this.$emit('update:owed', this.internalOwed);
        }
    }
}