<template>
  <v-app>
    <app-bar />
    <dashboard-header />
    <v-content
      class="pt-6"
    >
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import AppBar from '@/components/sUI/AppBar.vue'
import DashboardHeader from '@/components/sUI/DashboardHeader.vue'
import AppFooter from '@/components/sUI/AppFooter.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    AppBar,
    DashboardHeader,
    AppFooter
  }
})
export default class LayoutDashboard extends Vue {
  name: string = 'LayoutDashboard'
  clipped: boolean = false
  drawer: boolean = false
  fixed: boolean = false
  miniVariant: boolean = false
  right: boolean = true
  rightDrawer: boolean = false
  title: string = 'Vuetify.js'

  mounted (): void {
    // this.$i18n.locale = 'es'
  }
}
</script>
