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
          FAQ
        </v-col>
        <v-col>
          Contáctanos
        </v-col>
        <v-col>
          Blog
        </v-col>
        <v-col>
          Términos de servicio
        </v-col>
        <v-col>
          Política de privacidad
        </v-col>
      </v-row>
      <v-row
        class="pb-0 white--text subtitle-2 font-regular"
      >
        <v-col>
          <p
            class="mb-0"
          >
            Hecho con ... en SF
          </p>
          <p
            class="mb-0"
          >
            {{ new Date().getFullYear() }} — <strong>BeMusical LLC</strong>
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
