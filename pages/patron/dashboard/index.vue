<template>
  <v-col
    justify-center
    align-center
    fluid
  >
    <p
      class="display-1 text-center mb-7"
    >
      Upcoming performances
    </p>
    <v-card
      flat
    >
      <v-img
        src="https://bemusical.us/images/dashboard/upcoming-gigs-banner.svg"
        height="210"
      >
        <v-row
          align="center"
          justify="space-around"
          class="fill-height"
        >
          <v-col
            align-self="center"
            class="fill-height"
          >
            <v-row
              align="center"
              justify="center"
              class="fill-height"
            >
              <v-col
                align-self="center"
                class="text-center title grey--text"
              >
                No upcoming performances
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-img>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import DashboardHeader from '@/components/sUI/DashboardHeader.vue'
import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    DashboardHeader,
    Logo,
    VuetifyLogo
  },
  layout: 'dashboard'
})
export default class ViewDashboardIndex extends Vue {
  miniVariant: boolean = false
}
</script>
