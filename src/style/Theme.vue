<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters, mapMutations } from 'vuex'

export default defineComponent({
	name: 'Theme',
	props: {
		theme: {
			type: String,
			default: 'dark'
		}
	},
	computed: {
		...mapGetters('theme', ['getTheme'])
	},
	methods: {
		...mapMutations('theme', ['initTheme'])
	},
	'created': function () {
		this.initTheme()
	},
	'render': function (): void { return undefined }
})
</script>