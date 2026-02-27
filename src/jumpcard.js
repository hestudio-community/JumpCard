import InternalJumpCard from "./components/InternalJumpCard.vue";
import ExternalJumpCard from "./components/ExternalJumpCard.vue";
import JumpCard from "./components/JumpCard.vue";

export default {
  install: (app, options) => {
    app.component("InternalJumpCard", InternalJumpCard);
    app.component("ExternalJumpCard", ExternalJumpCard);

    if (typeof options.externalButtonText == "function") {
      app.provide("externalButtonText", options.externalButtonText);
    }
    if (typeof options.internalButtonText == "function") {
      app.provide("internalButtonText", options.internalButtonText);
    }

    if (typeof options.onClickExternalLinkButton == "function") {
      app.provide("onClickExternalLinkButton", options.onClickExternalLinkButton)
    }
    app.component("jumpcard", JumpCard);
  },
};
