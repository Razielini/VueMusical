<template>
  <v-footer
    absolute
    paddless
    class="font-weight-medium info mt-10"
  >
    <v-layout
      column
      class="text-center pb-0"
    >
      <v-row
        class="headline grey--text text--darken-1"
      >
        <v-col>
          {{ this.$t("footer.faq") }}
        </v-col>
        <v-col>
          {{ this.$t("footer.contact") }}
        </v-col>
        <v-col>
          {{ this.$t("footer.blog") }}
        </v-col>
        <v-col>
          {{ this.$t("footer.terms_of_service") }}
        </v-col>
        <v-col>
          {{ this.$t("footer.privacy_politic") }}
        </v-col>
      </v-row>
      <v-row
        class="pb-0 white--text subtitle-2 font-regular"
      >
        <v-col>
          <p
            class="mb-0"
          >
            {{ this.$t("footer.made_with") }} <v-icon
              color="red"
            >
              mdi-heart-outline
            </v-icon> {{ this.$t("footer.made_in") }}
          </p>
          <p
            class="mb-0"
          >
            {{ new Date().getFullYear() }} — <strong>VeMusical LLC</strong>
          </p>
        </v-col>
      </v-row>
    </v-layout>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppFooter extends Vue {
}
</script>
