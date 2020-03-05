<template>
  <v-app>
    <app-bar />
    <filter-header />
    <v-content
      class="pt-0 mb-10"
    >
      <v-container
        class="pl-0 pr-0 mb-10"
      >
        <nuxt />
      </v-container>
    </v-content>
    <app-footer />
  </v-app>
</template>

<script lang="ts">
import AppBar from '@/components/sUI/AppBar.vue'
import FilterHeader from '@/components/sUI/FilterHeader.vue'
import AppFooter from '@/components/sUI/AppFooter.vue'
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    AppBar,
    FilterHeader,
    AppFooter
  }
})
export default class LayoutFilter extends Vue {
  name: string = 'LayoutFilter'
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
