import { Options, Vue } from 'vue-class-component'

// Layouts

// Components

// Sections
import LandingHeaderSection from '@/views/sections/landing/header.section.vue';
import LandingHowToSection from '@/views/sections/landing/howto.section.vue';

@Options({
	name: "LandingPage",
	components: {
		LandingHeaderSection,
		LandingHowToSection
	}
})
export default class LandingPage extends Vue {

}
