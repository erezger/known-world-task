import Vue from 'vue';
import VueI18n from 'vue-i18n';

import he from './he.json';

Vue.use(VueI18n);

const locale = 'he';

const messages = {
  he,
};

const i18n = new VueI18n({
  locale,
  messages,
  silentTranslationWarn: true, // remove Cannot translate the value of keypath 'xxx'. Use the value of keypath as default warning.
});

export default i18n;
