export default {
    template: `
        <div v-if="changeBreakdown && Object.keys(changeBreakdown).length > 0" id="result">
            <p>Change:</p>
            <ul>
            <li v-for="(count, denom) in changeBreakdown" :key="denom">
                {{ count }} x ₱{{ parseFloat(denom).toFixed(2) }}
            </li>
            </ul>
        </div>
    `,
    props: {
        changeBreakdown: {
            type: Object,
        }
    }
}