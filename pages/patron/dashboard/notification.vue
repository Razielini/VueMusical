<template>
  <v-col
    justify-center
    align-center
    fluid
  >
    <p
      class="display-1 text-center mb-7"
    >
      Notifications
    </p>
    <v-card
      flat
    >
      <v-btn
        small
        class="mb-2 px-2 elevation-0 caption"
        color="primary"
        disabled
      >
        Mark all as read
      </v-btn>
      <v-img
        src="https://bemusical.us/images/dashboard/upcoming-gigs-banner.svg"
      >
        <v-list
          v-if="items.length > 0"
          two-line
          class="py-0"
          color="transparent"
        >
          <template
            v-for="(item, index) in items"
          >
            <v-list-item
              :key="item.title"
              @click="checkNotification()"
            >
              <v-list-item-content
                class="py-0 mb-0"
              >
                <v-list-item-title
                  class="body-1 mb-0 pb-0"
                >
                  {{ item.title }}
                </v-list-item-title>
                <v-list-item-subtitle
                  class="font-regular caption mb-0 pb-0"
                >
                  {{ item.subtitle }}
                </v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  icon
                >
                  <v-icon>mdi-close-circle</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>

            <v-divider
              :key="index"
            />
          </template>
        </v-list>
        <v-row
          v-else
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
import DashboardHeader from '../../../components/sUI/DashboardHeader.vue'
import Logo from '../../../components/Logo.vue'
import VuetifyLogo from '../../../components/VuetifyLogo.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    DashboardHeader,
    Logo,
    VuetifyLogo
  },
  layout: 'dashboard'
})
export default class ViewDashboardNotification extends Vue {
  items: any[] = [
    {
      title: 'Get $20, Give $20! - When one of your friends join and books a performer',
      subtitle: 'October 30 at 02:37pm'
    },
    {
      title: 'Get $20, Give $20! - When one of your friends join and books a performer',
      subtitle: 'October 30 at 02:37pm'
    },
    {
      title: 'Oui oui',
      subtitle: 'October 30 at 02:37pm'
    },
    {
      title: 'Birthday gift',
      subtitle: 'October 30 at 02:37pm'
    }
  ]

  checkNotification () {
    console.log('checkNotification')
  }
}
</script>
