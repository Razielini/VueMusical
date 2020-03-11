<template>
  <v-col
    justify-center
    align-center
  >
    <p
      class="display-1 text-center mb-7"
    >
      Account Details
    </p>
    <v-card
      class="mx-auto elevation-0"
      max-width="500"
    >
      <dashboard-payment-method />
      <v-row
        class="justify-center align-center py-1"
      >
        <v-btn
          block
          depressed
          large
          color="primary"
        >
          Edit Profile Picture
        </v-btn>
      </v-row>
      <v-row
        class="justify-center align-center py-1"
      >
        <v-btn
          block
          depressed
          large
          color="primary"
        >
          Edit Name
        </v-btn>
      </v-row>
      <v-row
        class="justify-center align-center py-1"
      >
        <v-btn
          block
          depressed
          large
          color="primary"
        >
          Change Email
        </v-btn>
      </v-row>
      <v-row
        class="justify-center align-center py-1"
      >
        <v-btn
          block
          depressed
          large
          color="primary"
        >
          Change Password
        </v-btn>
      </v-row>
    </v-card>
  </v-col>
</template>

<script lang="ts">
import DashboardPaymentMethod from '@/components/sUI/dashboard/payment-method.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    DashboardPaymentMethod
  },
  layout: 'dashboard'
})
export default class ViewDashboardAccountDetail extends Vue {
}
</script>
