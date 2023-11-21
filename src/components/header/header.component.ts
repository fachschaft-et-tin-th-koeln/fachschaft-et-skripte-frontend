import { Options, Vue } from 'vue-class-component'

// Components
import MobileMenuComponent from '@/components/menu/mobile.component.vue';

@Options({
	name: "HeaderComponent",
	components: {
		MobileMenuComponent
	}
})
export default class HeaderComponent extends Vue {

}
