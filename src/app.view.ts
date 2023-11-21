import { Options, Vue } from 'vue-class-component'

// Layouts
import VueLayout from './layouts/index.layout.vue';

// Components

@Options({
	components: {
		VueLayout
	}
})
export default class App extends Vue {

}
