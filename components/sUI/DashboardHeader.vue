<template>
  <v-content
    fluid
    class="bg-img"
  >
    <v-container
      class="py-4"
    >
      <v-row
        align-center
        justify-space-around
      >
        <v-col
          class="px-2 mr-4 mx-auto"
          style="max-width: 120px;"
        >
          <v-avatar
            size="100"
          >
            <img
              src="https://i.pravatar.cc/300?img=55"
            >
          </v-avatar>
        </v-col>

        <v-col
          class="px-2"
        >
          <p
            class="display-1 mb-0"
          >
            Dashboard
          </p>
          <p
            class="subtitle-1 mb-0"
          >
            Payment History
          </p>
          <p
            class="subtitle-1 mb-0"
          >
            Edit settings
          </p>
        </v-col>

        <v-col
          class="px-2 text-center"
        >
          <p
            class="display-1 mb-0"
          >
            Pending
          </p>
          <p
            class="display-2 white--text elevation--text"
          >
            0
          </p>
        </v-col>
        <v-col
          class="px-2 text-center"
        >
          <p
            class="display-1 mb-0"
          >
            Upcoming
          </p>
          <p
            class="display-2 white--text elevation--text"
          >
            0
          </p>
        </v-col>
        <v-col
          class="px-2 text-center"
        >
          <p
            class="display-1 mb-0"
          >
            Previous
          </p>
          <p
            class="display-2 white--text elevation--text"
          >
            0
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class DashboardHeader extends Vue {
  miniVariant: boolean = false
}
</script>

<style>
  .bg-img {
    background-image: url('https://bemusical.us/images/dashboard/dashboard-banner-top.svg');
    background-repeat: repeat-y;
    background-size: cover;
    background-position: center;
    background-color: #FFF;
    max-height: min-content;
  }

  .elevation--text {
    letter-spacing: 0.46px;
    text-shadow: 0 2px 4px rgba(0,0,0,0.50);
  }
</style>
