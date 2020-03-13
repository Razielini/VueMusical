<template>
  <v-col
    :class="$vuetify.breakpoint.xs ? 'px-4 mb-10 pt-0' : 'px-0 mb-10 pt-0'"
  >
    <v-subheader
      class="title pa-0 mx-0"
    >
      {{ this.$t("filter.title_search") }}
    </v-subheader>

    <span
      v-for="(item, i) in filter"
      :key="'chip-' + i"
    >
      <v-chip
        v-if="item !== null"
        class="ma-1 primary"
        close
        outlined
        label
        color="primary"
        close-icon="mdi-close"
        @click:close="closeChip(item)"
      >
        {{ item.value }}
      </v-chip>
    </span>

    <v-row
      v-if="items.length <= 0"
    >
      <v-col>
        <p
          class="error--text display-2 text-center font-weight-bold my-6"
        >
          We're sorry, we couldn't find any match with your requirements
        </p>
      </v-col>
    </v-row>

    <v-container
      v-else
      fluid
      grid-list-md
      class="mt-2"
    >
      <v-data-iterator
        :items="items"
        :items-per-page.sync="itemsPerPage"
        hide-default-footer
      >
        <template v-slot:default="props">
          <v-row
            align-start
            justify-start
            fill-height
          >
            <div
              v-for="(item, j) in props.items"
              :key="item.name + '-' + j"
            >
              <v-hover v-slot:default="{ hover }">
                <nuxt-link
                  :to="{ path: '/musician/' + item.slug }"
                  style="text-decoration: none;"
                >
                  <v-card
                    :class="$vuetify.breakpoint.xs ? 'mr-0 mb-4 pa-0 cursor-pointer' : 'mr-6 mb-4 pa-0 cursor-pointer'"
                    :max-width="$vuetify.breakpoint.xs ? 400 : 200"
                    flat
                  >
                    <v-img
                      height="250"
                      :src="item.img"
                      :lazy-src="item.img"
                      :class="hover ? 'elevation-12' : ''"
                    />

                    <v-card-text
                      class="pa-2"
                    >
                      <p
                        class="title mb-0"
                      >
                        {{ item.name }}
                      </p>
                      <v-chip
                        v-for="(instrument, i) in item.instruments"
                        :key="item.name + '-' + instrument + '-' + i"
                        class="ml-0 mr-1 my-1 white--text caption font-weight-light pa-1"
                        label
                        color="primary"
                        small
                      >
                        {{ instrument }}
                      </v-chip>
                      <p
                        class="my-2 caption"
                      >
                        {{ item.short_desc }}
                      </p>
                    </v-card-text>
                  </v-card>
                </nuxt-link>
              </v-hover>
            </div>
          </v-row>
        </template>
      </v-data-iterator>
    </v-container>

    <v-pagination
      v-model="page"
      color="primary"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      class="mb-10 mt-0 mx-auto primary--text"
    />
  </v-col>
</template>

<script lang="ts">
import DashboardHeader from '@/components/sUI/DashboardHeader.vue'
import Logo from '@/components/Logo.vue'
import VuetifyLogo from '@/components/VuetifyLogo.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    DashboardHeader,
    Logo,
    VuetifyLogo
  },
  layout: 'filter'
})
export default class ViewDashboardIndex extends Vue {
  itemsPerPage: number = 10
  page: number = 1
  items: any[] = [
    {
      name: 'Aaron',
      slug: 'aaron',
      img: '/avatar/pravatar_aaron_60_300.jpg',
      instruments: ['piano'],
      short_desc: 'Twee tumeric retro taiyaki, semiotics cloud bread woke actually live-edge portland.'
    },
    {
      name: 'Abigail',
      slug: 'abigail-1',
      img: '/avatar/pravatar_abigail_47_300.jpg',
      instruments: ['Flute'],
      short_desc: 'Thundercats bespoke synth fixie kombucha cold-pressed.'
    },
    {
      name: 'Sharon',
      slug: 'sharon',
      img: '/avatar/pravatar_sharon_38_300.jpg',
      instruments: ['Voice - Alto', 'Voice Mezzo'],
      short_desc: 'Four dollar toast keytar woke listicle, 90\'s cold-pressed health goth gastropub.'
    },
    {
      name: 'Adam',
      slug: 'adam',
      img: '/avatar/pravatar_adam_59_300.jpg',
      instruments: ['Piano', 'Tuba', 'Trombone'],
      short_desc: 'Freegan kogi mlkshk umami YOLO portland.'
    },
    {
      name: 'Adrian',
      slug: 'adrian',
      img: '/avatar/pravatar_adrian_60_300.jpg',
      instruments: ['Trumpet', 'Bass', 'Drums'],
      short_desc: 'Jianbing twee vaporware, man bun salvia asymmetrical fashion axe.'
    },
    {
      name: 'GOT THAT SWING!',
      slug: 'got-that-swing',
      img: '/avatar/pravatar_got_that_swing_50_300.jpg',
      instruments: ['Double Bass', 'Guitar'],
      short_desc: 'Next level venmo mumblecore, sustainable fanny pack fashion axe post-ironic air plant.'
    },
    {
      name: 'Ananya',
      slug: 'ananyan',
      img: '/avatar/pravatar_ananya_50_300.jpg',
      instruments: ['Singer', 'Sitar'],
      short_desc: 'Enamel pin flexitarian edison bulb actually, mustache heirloom tumeric.'
    },
    {
      name: 'Andrew',
      slug: 'aaron',
      img: '/avatar/pravatar_andrew_50_300.jpg',
      instruments: ['Piano', 'Guitar', 'Singer'],
      short_desc: 'Glossier XOXO mlkshk, enamel pin helvetica fingerstache kickstarter.'
    },
    {
      name: 'Andy',
      slug: 'andy',
      img: '/avatar/pravatar_andy_60_300.jpg',
      instruments: ['Fiddle', 'Violin'],
      short_desc: 'Blue bottle sartorial single-origin coffee, VHS franzen meggings green juice hexagon listicle XOXO meh neutra.'
    },
    {
      name: 'Random Quartet',
      slug: 'ramdom-quartet',
      img: '/avatar/pravatar_random_quarter_50_300.jpg',
      instruments: ['Viola', 'Cello', 'Violin'],
      short_desc: 'Succulents bushwick wolf authentic cloud bread lo-fi gluten-free intelligentsia.'
    }
  ]

  get filter () {
    return this.$store.state.filter
  }

  randomness (max: number) {
    const min: number = 1 + Math.floor((max - 1) * Math.random())
    return min + Math.floor((max - min) * Math.random())
  }

  closeChip (item: any) {
    console.log('closeChip :: ', item)
    if (item !== null) {
      this.$store.dispatch('filter/remove', item)
    }
  }
}
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
