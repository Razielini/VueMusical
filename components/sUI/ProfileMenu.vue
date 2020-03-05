<template>
  <v-menu
    v-model="showMenu"
    close-on-click
    close-on-content-click
    offset-y
  >
    <template v-slot:activator="{ on }">
      <v-avatar
        size="50"
        v-on="on"
      >
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
    </template>
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
          class="px-6 text-center body-2"
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
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ProfileMenu extends Vue {
  showMenu: boolean = false
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
