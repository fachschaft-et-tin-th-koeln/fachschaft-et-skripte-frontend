import { Options, Vue } from 'vue-class-component'

// Components
import HeaderComponent from '@/components/header/header.component.vue'
import FooterComponent from '@/components/footer/footer.component.vue'

@Options({
	name: "VueLayout",
	components: {
		HeaderComponent,
		FooterComponent
	}
})
export default class VueLayout extends Vue {

}
