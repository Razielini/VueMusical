<template>
  <v-card
    v-if="$vuetify.breakpoint.xs"
    outlined
  >
    <v-text-field
      prepend-inner-icon="mdi-magnify"
      placeholder="Prueba 'piano', o 'Barcelona'"
      solo
      light
      hide-details
      flat
      depressed
      autocomplete="off"
      v-on="on"
    />
    <v-divider />
    <v-card-text
      class="pb-0"
    >
      <v-btn
        outlined
        block
        color="primary"
      >
        Buscar cerca de mí
        <v-icon
          right
        >
          mdi-compass
        </v-icon>
      </v-btn>
      <v-subheader
        class="body-2 pl-0"
      >
        Explora en BeMusical
      </v-subheader>
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          class="py-0"
        >
          <v-btn-toggle
            mandatory
          >
            <v-btn
              small
            >
              Todos
            </v-btn>
            <v-btn
              small
            >
              Solistas
            </v-btn>
            <v-btn
              small
            >
              Bandas
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>
      <v-subheader
        class="body-2 pl-0"
      >
        Sugerencias
      </v-subheader>
      <v-list
        dense
        class="pa-0"
      >
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            nuxt
            :to="{ path: '/filter/' }"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
    <v-card-actions
      class="py-0"
    >
      <v-spacer />
      <v-img
        width="100"
        src="https://www.connexient.com/images/logo_lockup_maps_for_work_color.png"
      />
    </v-card-actions>
  </v-card>
  <v-menu
    v-else
    v-model="showMenu"
    :close-on-content-click="false"
    offset-y
    nudge-bottom="10"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        placeholder="Prueba 'piano', o 'Barcelona'"
        solo
        light
        hide-details
        :flat="$vuetify.breakpoint.xs"
        :depressed="$vuetify.breakpoint.xs"
        :style="$vuetify.breakpoint.xs ? '' : 'max-width: 300px;'"
        autocomplete="off"
        v-on="on"
      />
    </template>

    <v-card
      max-width="300"
      width="300"
      outlined
    >
      <v-card-text
        class="pb-0"
      >
        <v-btn
          outlined
          block
          color="primary"
        >
          Buscar cerca de mí
          <v-icon
            right
          >
            mdi-compass
          </v-icon>
        </v-btn>
        <v-subheader
          class="body-2 pl-0"
        >
          Explora en BeMusical
        </v-subheader>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            class="py-0"
          >
            <v-btn-toggle
              mandatory
            >
              <v-btn
                small
              >
                Todos
              </v-btn>
              <v-btn
                small
              >
                Solistas
              </v-btn>
              <v-btn
                small
              >
                Bandas
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
        <v-subheader
          class="body-2 pl-0"
        >
          Sugerencias
        </v-subheader>
        <v-list
          dense
          class="pa-0"
        >
          <v-list-item-group color="primary">
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
              nuxt
              :to="{ path: '/filter/' }"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card-text>
      <v-card-actions
        class="py-0"
      >
        <v-spacer />
        <v-img
          width="100"
          src="https://www.connexient.com/images/logo_lockup_maps_for_work_color.png"
        />
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AppBarSearch extends Vue {
  showMenu: boolean = false
  fav: boolean = true
  menu: boolean = false
  message: boolean = false
  hints: boolean = true
  items: any[] = [
    {
      title: 'Ned Flanders',
      icon: 'mdi-face'
    },
    {
      title: 'Okilly Dokilly',
      icon: 'mdi-account-group'
    },
    {
      title: 'Is a Place',
      icon: 'mdi-map-marker-radius'
    }
  ]
}
</script>
