<template>
  <v-app-bar
    v-if="$vuetify.breakpoint.xs"
    app
    clipped-left
    clipped-right
    color="#5A6F9F"
    dark
    text
    height="90"
    dense
  >
    <nuxt-link
      :to="{ path: '/' }"
    >
      <v-img
        src="https://bemusical.us/images/logo.svg"
        :max-width="imgSize.xs"
        :width="imgSize.xs"
        contain
      />
    </nuxt-link>
    <v-spacer />
    <v-btn
      icon
      x-large
      @click="dialogSearch = !dialogSearch"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn
      icon
      x-large
      @click="dialogOptions = !dialogOptions"
    >
      <v-icon>mdi-view-headline</v-icon>
    </v-btn>
    <v-dialog
      v-model="dialogSearch"
      fullscreen
    >
      <v-card
        style="margin-top: 90px !important;"
        color="primary"
      >
        <v-app-bar
          app
          clipped-left
          clipped-right
          color="#5A6F9F"
          dark
          text
          height="90"
          dense
        >
          <nuxt-link
            :to="{ path: '/' }"
          >
            <v-img
              src="https://bemusical.us/images/logo.svg"
              :max-width="imgSize.xs"
              :width="imgSize.xs"
              contain
            />
          </nuxt-link>
          <v-spacer />
          <v-btn
            icon
            x-large
            @click="dialogSearch = !dialogSearch"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-app-bar>

        <app-bar-search />
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="dialogOptions"
      fullscreen
    >
      <v-app-bar
        app
        clipped-left
        clipped-right
        color="#5A6F9F"
        dark
        text
        height="90"
        dense
      >
        <nuxt-link
          :to="{ path: '/' }"
        >
          <v-img
            src="https://bemusical.us/images/logo.svg"
            :max-width="imgSize.xs"
            :width="imgSize.xs"
            contain
          />
        </nuxt-link>
        <v-spacer />
        <v-btn
          icon
          x-large
          @click="dialogOptions = !dialogOptions"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-app-bar>
      <v-card
        tile
        style="margin-top: 90px !important;"
        color="primary"
      >
        <v-list
          light
        >
          <v-list-item-group
            color="primary"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              dense
              class="px-6 text-center display-1"
              color="primary"
              :to="{ path: item.to }"
              nuxt
            >
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
              <v-list-item-icon
                v-if="item.icon"
              >
                <v-icon v-text="item.icon" />
              </v-list-item-icon>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-dialog>
  </v-app-bar>
  <v-app-bar
    v-else
    app
    clipped-left
    clipped-right
    color="#5A6F9F"
    dark
    text
    height="90"
  >
    <v-container>
      <v-row
        align-center
        justify-space-around
      >
        <v-col
          class="px-2"
        >
          <app-bar-search />
        </v-col>

        <v-col
          class="px-2 d-flex justify-center"
        >
          <nuxt-link
            :to="{ path: '/' }"
          >
            <v-img
              src="https://bemusical.us/images/logo.svg"
              :max-width="imgSize.default"
              :width="imgSize.default"
              contain
            />
          </nuxt-link>
        </v-col>

        <v-col
          class="px-2 d-flex justify-end"
        >
          <profile-menu />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts">
import AppBarSearch from '@/components/sUI/AppBarSearch.vue'
import ProfileMenu from '@/components/sUI/ProfileMenu.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    AppBarSearch,
    ProfileMenu
  }
})
export default class AppBar extends Vue {
  dialogSearch: boolean = false
  dialogOptions: boolean = false

  imgSize: any = {
    default: '225',
    xs: '175'
  }

  items: any[] = [
    {
      title: 'Dashboard',
      to: '/patron/dashboard'
    },
    {
      title: 'Notifications',
      to: '/patron/dashboard/notification'
    },
    {
      title: 'Concierge service',
      to: '/patron/dashboard'
    },
    {
      title: 'Account settings',
      to: '/patron/dashboard/account-detail'
    },
    {
      title: 'Logout',
      icon: 'mdi-logout',
      to: '/patron/dashboard'
    }
  ]
}
</script>
