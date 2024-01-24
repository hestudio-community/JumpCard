import InternalJumpCard from './components/InternalJumpCard.vue';
import ExternalJumpCard from './components/ExternalJumpCard.vue';

export default {
	install: (app) => {
		app.component("InternalJumpCard", InternalJumpCard);
		app.component("ExternalJumpCard", ExternalJumpCard);
	}
}