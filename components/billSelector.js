export default {
    template: `
        <div class="form-group">
            <label for="bill">Bill (₱):</label>
            <div class="relative mt-2 rounded-md shadow-sm">
            </div>
            <select v-model="internalBill" id="bill" @change="updateBill">
                <option v-for="option in billOptions" :key="option" :value="option">
                    ₱{{ option }}
                </option>
            </select>
        </div>
    `,
    props: {
        bill: {
            type: Number,
        },
        billOptions: {
            type: Array,
        }
    },
    data() {
        return {
          internalBill: this.bill,
        };
    },
    watch: {
        bill(newVal) {
          this.internalBill = newVal;
        }
    },
    methods: {
        updateBill() {
          this.$emit('update:bill', this.internalBill);
        }
    }
}