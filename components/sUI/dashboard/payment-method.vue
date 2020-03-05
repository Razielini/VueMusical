<template>
  <v-dialog
    v-model="dialog"
    width="500"
  >
    <template v-slot:activator="{ on }">
      <v-row
        class="justify-center align-center py-1"
      >
        <v-btn
          block
          depressed
          large
          color="primary"
          v-on="on"
        >
          Add/Change Payment Methods
        </v-btn>
      </v-row>
    </template>

    <v-card>
      <v-card-title
        primary-title
      >
        <v-btn
          text
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text>
        <v-container fluid>
          <v-row justify="space-around" class="mb-2">
            <v-icon
              size="60"
              color="primary"
            >
              mdi-wallet
            </v-icon>
          </v-row>
          <v-row
            justify="space-around"
            class="mb-2 headline font-weight-light"
          >
            <p>
              Choose a method to receive your payout
            </p>
          </v-row>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-btn
          block
          depressed
          color="primary"
          @click="dialog = false"
        >
          Close Modal
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DashboardPaymentMethod extends Vue {
  dialog: boolean = false
}
</script>
