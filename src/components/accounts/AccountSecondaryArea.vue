<template>
  <div class="col col-2">
    <div class="secondary-card" v-if="settings.pega_marketing.Host === '' || loading">
      <Offer
        v-for="item in app.offers"
        :key="item.title"
        v-bind:title="$t('message.' + item.title)"
        v-bind:message="$t('message.' + item.message)"
        v-bind:img="('./img/' + item.img)"
        v-bind:url="'#'"
        v-bind:link="$t('message.learnmore')"
      />
    </div>
    <div class="secondary-card" v-else>
      <Offer
        v-for="item in data"
        :key="item.title"
        v-bind:title="item.title"
        v-bind:message="item.message"
        v-bind:img="item.img"
        v-bind:url="item.url"
        v-bind:link="$t('message.' + item.link)"
      />
    </div>
    <QuickLinks/>
    <KeyRates
      v-if="app.industry  === 'commercial_bank' && typeof settings.keyrates !== 'undefined'"
    />
  </div>
</template>

<script>
import Offer from '../controls/Offer.vue';
import QuickLinks from '../widgets/QuickLinks.vue';
import { mainconfig, initNBAM } from '../../global';
import KeyRates from '../widgets/KeyRates.vue';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      loading: true,
      data: [],
    });
  },
  mounted() {
    if (this.settings.pega_marketing.Host !== '') {
      const self = this;
      let subscriberID = '';
      if (this.userId !== -1 && this.settings.users[this.userId].accountID) {
        subscriberID = this.settings.users[this.userId].accountID;
      }

      setTimeout(() => {
        initNBAM(self, 'accountPage', subscriberID);
      }, 200);
    }
  },
  components: {
    Offer,
    QuickLinks,
    KeyRates,
  },
};
</script>
