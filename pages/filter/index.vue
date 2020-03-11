<template>
  <v-col
    class="px-0 mb-10 pt-0"
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
            fill-height
            :class="$vuetify.breakpoint.xs ? 'justify-center' : 'justify-start'"
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
                    class="mr-6 mb-4 pa-0 cursor-pointer"
                    max-width="200"
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
export default class ViewDashboardFilter extends Vue {
  itemsPerPage: number = 10
  page: number = 1
  items: any[] = [
    {
      name: 'Aaron',
      slug: 'aaron',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['piano'],
      short_desc: 'Twee tumeric retro taiyaki, semiotics cloud bread woke actually live-edge portland.'
    },
    {
      name: 'Abigail',
      slug: 'abigail-1',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Flute'],
      short_desc: 'Thundercats bespoke synth fixie kombucha cold-pressed.'
    },
    {
      name: 'Abigail',
      slug: 'abigail-2',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Voice - Alto', 'Voice Mezzo'],
      short_desc: 'Four dollar toast keytar woke listicle, 90\'s cold-pressed health goth gastropub.'
    },
    {
      name: 'Adam',
      slug: 'adam',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Piano', 'Tuba', 'Trombone'],
      short_desc: 'Freegan kogi mlkshk umami YOLO portland.'
    },
    {
      name: 'Adrian Areas',
      slug: 'adrian-areas',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Trumpet', 'Bass', 'Drums'],
      short_desc: 'Jianbing twee vaporware, man bun salvia asymmetrical fashion axe.'
    },
    {
      name: 'GOT THAT SWING!',
      slug: 'got-that-swing',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Double Bass', 'Guitar'],
      short_desc: 'Next level venmo mumblecore, sustainable fanny pack fashion axe post-ironic air plant.'
    },
    {
      name: 'Ananya',
      slug: 'ananyan',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Singer', 'Sitar'],
      short_desc: 'Enamel pin flexitarian edison bulb actually, mustache heirloom tumeric.'
    },
    {
      name: 'Andrew',
      slug: 'aaron',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Piano', 'Guitar', 'Singer'],
      short_desc: 'Glossier XOXO mlkshk, enamel pin helvetica fingerstache kickstarter.'
    },
    {
      name: 'Andy',
      slug: 'andy',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Fiddle', 'Violin'],
      short_desc: 'Blue bottle sartorial single-origin coffee, VHS franzen meggings green juice hexagon listicle XOXO meh neutra.'
    },
    {
      name: 'Tony Corman',
      slug: 'tony-corman',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Piano', 'Bass', 'Drums'],
      short_desc: 'Twee air plant tumeric drinking vinegar paleo chia chambray hexagon.'
    },
    {
      name: 'Eclecta Quartet',
      slug: 'eclecta-quartet',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Viola', 'Cello', 'Violin'],
      short_desc: 'Succulents bushwick wolf authentic cloud bread lo-fi gluten-free intelligentsia.'
    },
    {
      name: 'Friction Quartet',
      slug: 'friction-quartet',
      img: 'https://i.pravatar.cc/200?img=' + this.randomness(70),
      instruments: ['Violin', 'Cello', 'Viola'],
      short_desc: 'Mumblecore copper mug vape pinterest tote bag sartorial paleo helvetica artisan ramps.'
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

  beforeMount (): void {
    // console.log('beforeMount :: ', this.$vuetify.breakpoint.xs)
  }
}
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
