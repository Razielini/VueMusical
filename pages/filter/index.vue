<template>
  <v-col
    class="px-0 mb-10 pt-0"
  >
    <v-subheader
      class="title pa-0 mx-0"
    >
      Showing results for
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
          <v-layout
            align-start
            justify-start
            row
            fill-height
          >
            <div
              v-for="(item, j) in props.items"
              :key="item.name + '-' + j"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="mr-6 mb-4 pa-0 cursor-pointer"
                  max-width="200"
                  flat
                >
                  <v-img
                    height="250"
                    :src="item.img"
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
              </v-hover>
            </div>
          </v-layout>
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
  miniVariant: boolean = false

  itemsPerPage: number = 10
  page: number = 1
  items: any[] = [
    {
      name: 'Aaron',
      img: 'https://cdn.bemusical.us/user_profile_picture_Vbfji8015626372534148338aY7Ws_cdn.jpeg',
      instruments: ['piano'],
      short_desc: 'Old-time blues piano player. Barrelhouse, boogie, New Orleans styles.'
    },
    {
      name: 'Abigail',
      img: 'https://cdn.bemusical.us/user_profile_picture_ZIUlke14915579611821109IfzjmUr_cdn.jpg',
      instruments: ['Flute'],
      short_desc: 'Highly experienced classical flutist, also performs traditional Celtic music and new ...'
    },
    {
      name: 'Abigail',
      img: 'https://cdn.bemusical.us/user_profile_picture_sTpxOn70815579612087763LQ8Zi9O_cdn.jpg',
      instruments: ['Voice - Alto', 'Voice Mezzo'],
      short_desc: 'New Mexico based cellist Abigail Monroe is currently pursuing her Bachelor of Music d...'
    },
    {
      name: 'Adam',
      img: 'https://cdn.bemusical.us/user_profile_picture_VsczeN12315579598498593GRJK8nH_cdn.jpg',
      instruments: ['Piano', 'Tuba', 'Trombone'],
      short_desc: 'I’m a life-long pianist with perfect pitch who can play a variety of styles.'
    },
    {
      name: 'Adrian Areas',
      img: 'https://cdn.bemusical.us/user_profile_picture_Y6gfP1526155795983118214FFamxL_cdn.jpg',
      instruments: ['Trumpet', 'Bass', 'Drums'],
      short_desc: 'The New Generation of Latin Jazz is the Adrian Areas Latin Jazz Ensemble'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    },
    {
      name: 'Ananya',
      img: 'https://cdn.bemusical.us/user_profile_picture_ccmAU212155796116526875neeDGT_cdn.jpg',
      instruments: ['Singer', 'Sitar'],
      short_desc: 'Ananya Ashok is a highly experienced Indian Classical Vocalist with over ten years of...'
    },
    {
      name: 'Andrew',
      img: 'https://cdn.bemusical.us/user_profile_picture_SrNRC94515579611930924IOXpndC_cdn.jpg',
      instruments: ['Piano', 'Guitar', 'Singer'],
      short_desc: 'Powerhouse pianist in all styles and genres, specializing in jazz, classical, salsa.'
    },
    {
      name: 'Andy',
      img: 'https://cdn.bemusical.us/user_profile_picture_TLbN1L90155796123629012g6JWlD_cdn.jpg',
      instruments: ['Fiddle', 'Violin'],
      short_desc: 'Multi-genre Fiddler and Violinist.'
    },
    {
      name: 'Tony Corman',
      img: 'https://cdn.bemusical.us/ensemble_original_picture_28815587952127087_cdn.jpg',
      instruments: ['Piano', 'Bass', 'Drums'],
      short_desc: 'Jazz guitarist, arrranger and composer.'
    },
    {
      name: 'Eclecta Quartet',
      img: 'https://cdn.bemusical.us/user_profile_picture_tePdZF7215579598481921S3GGajT_cdn.jpg',
      instruments: ['Viola', 'Cello', 'Violin'],
      short_desc: 'With electric instruments and a diverse playlist, Eclecta Quartet rocks your favorite.'
    },
    {
      name: 'Friction Quartet',
      img: 'https://cdn.bemusical.us/user_profile_picture_VGcddf1815579613556957twPxBrC_cdn.jpg',
      instruments: ['Violin', 'Cello', 'Viola'],
      short_desc: 'Friction Quartet is a San Francisco Bay Area string quartet that exists to modernize.'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar', 'Saxophone', 'Drums'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar', 'Saxophone', 'Drums'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar', 'Saxophone', 'Drums'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar', 'Saxophone', 'Drums'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar', 'Saxophone', 'Drums'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar', 'Saxophone', 'Drums'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar', 'Saxophone', 'Drums'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    },
    {
      name: 'GOT THAT SWING!',
      img: 'https://cdn.bemusical.us/user_profile_picture_wjhmKi32615579612856149x6c82dD_cdn.jpg',
      instruments: ['Double Bass', 'Guitar', 'Saxophone', 'Drums'],
      short_desc: 'GOT THAT SWING! is a Swing band that can bring much more to events than live Swing'
    }
  ]

  get filter () {
    return this.$store.state.filter
  }

  closeChip (item: any) {
    console.log('closeChip :: ', item)
    if (item !== null) {
      this.$store.dispatch('filter/remove', item)
    }
  }

  beforeMount (): void {
    console.log(this.$vuetify.breakpoint)
  }
}
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
