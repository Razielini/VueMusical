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
          src="https://i.pravatar.cc/300?img=55"
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
          dense
          class="px-6 text-center body-2"
          color="primary"
          :to="{ path: '/patron/dashboard' }"
          nuxt
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('menu.dashboard') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          dense
          class="px-6 text-center body-2"
          color="primary"
          :to="{ path: '/patron/dashboard/notification' }"
          nuxt
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('menu.notification') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          dense
          class="px-6 text-center body-2"
          color="primary"
          :to="{ path: '/patron/dashboard/account-detail' }"
          nuxt
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('menu.concierge') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          dense
          class="px-6 text-center body-2"
          color="primary"
          nuxt
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('menu.account') }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          dense
          class="px-6 text-center body-2 primary"
          color="white"
          v-if="$i18n.locale === 'es'"
          @click="$i18n.locale = 'en'"
        >
          <v-list-item-content>
            <v-list-item-title
              class="white--text"
            >
              To English
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon
              color="white"
            >
              mdi-translate
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item
          dense
          class="px-6 text-center body-2 primary"
          color="white"
          v-if="$i18n.locale === 'en'"
          @click="$i18n.locale = 'es'"
        >
          <v-list-item-content>
            <v-list-item-title
              class="white--text"
            >
              Cambiar a Español
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon
              color="white"
            >
              mdi-translate
            </v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item
          dense
          class="px-6 text-center body-2"
          color="primary"
          nuxt
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ $t('menu.logout') }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon>
              mdi-logout
            </v-icon>
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
}
</script>
