<template>
  <v-container>
    <v-row>
      <v-col
        align-center
        justify-center
        class="secondary text-center py-8 mb-6"
        style="border-radius: 5px;"
      >
        <v-avatar
          color="indigo"
          :size="$vuetify.breakpoint.xs ? 250 : 350"
        >
          <img
            :src="item.img"
          >
        </v-avatar>

        <p
          class="font-weight-bold display-2 mt-6 mb-0"
        >
          {{ item.name }}
        </p>
        <p
          class="title font-weight-light grey--text text--darken-2"
        >
          {{ item.location }}
        </p>

        <p
          class="headline font-weight-bold grey--text text--darken-2"
        >
          <v-rating
            :value="randomness(5)"
            color="#4893B2"
            size="24"
          />
        </p>
        <p
          class="text-center headline font-weight-light"
        >
          {{ item.description }}
        </p>
        <p
          class="display-1 font-weight-black"
        >
          {{ this.$t("musician.instruments") }}
        </p>
        <v-chip
          v-for="(instrument, i) in item.instruments"
          :key="instrument + '-' + i"
          class="ml-0 mr-1 my-1 white--text title font-weight-light pa-4 text-center justify-center align-center"
          label
          color="#6a81af"
          small
        >
          {{ instrument }}
        </v-chip>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        class="px-0"
      >
        <p
          class="px-0 display-1 primary--text mb-4 font-weight-medium"
        >
          {{ this.$t("musician.photos") }}
        </p>

        <v-carousel hide-delimiters>
          <v-carousel-item
            v-for="(item,i) in imgItems"
            :key="'carousel-item-' + i"
            :src="item.src"
          />
        </v-carousel>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        class="px-0"
      >
        <p
          class="px-0 display-1 primary--text mb-4 font-weight-medium"
          style="cursor: pointer;"
          @click="options.bio = !options.bio"
        >
          <v-icon
            left
            size="36"
            color="primary"
            riple="false"
          >
            {{ options.bio ? 'mdi-minus' : 'mdi-plus' }}
          </v-icon>
          {{ this.$t("musician.bio") }} {{ item.name }}
        </p>

        <div
          v-if="options.bio"
        >
          <p
            class="pl-4 subheader"
          >
            Letterpress kale chips aesthetic enamel pin hoodie tattooed sustainable try-hard. Fashion axe man bun coloring book butcher leggings slow-carb green juice. 8-bit viral copper mug tacos photo booth. Hexagon PBR&B celiac flexitarian portland listicle. Cloud bread chicharrones affogato tousled succulents.
          </p>

          <p
            class="pl-4 subheader"
          >
            Fashion axe squid hoodie stumptown microdosing chia, fingerstache organic hashtag. Pickled dreamcatcher kogi, ugh swag raw denim kinfolk deep v fanny pack banjo pok pok. Swag plaid kogi lo-fi fanny pack poke salvia trust fund taiyaki green juice flannel. Tote bag organic flannel selfies.
          </p>

          <p
            class="pl-4 subheader"
          >
            Vinyl yr venmo XOXO echo park prism whatever photo booth four dollar toast typewriter flexitarian drinking vinegar craft beer slow-carb PBR&B. Beard put a bird on it jianbing, flexitarian fashion axe cornhole tilde af snackwave celiac flannel gluten-free mumblecore hammock ramps. Distillery sriracha kinfolk, dreamcatcher slow-carb banh mi pinterest.
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        class="px-0"
      >
        <p
          class="px-0 display-1 primary--text mb-4 font-weight-medium"
        >
          {{ this.$t("musician.reviews") }}
        </p>

        <v-list three-line>
          <template v-for="(review, i) in item.reviews">
            <v-list-item
              :key="review.name + '-' + i"
            >
              <v-list-item-avatar
                size="64"
              >
                <v-img
                  :src="review.avatar"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <label class="title">{{ review.name }}</label> <label class="title font-weight-light">{{ month[randomness(12)] }}, {{ fullyear }}</label>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <label>{{ review.other }}</label>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  <v-rating
                    :value="randomness(5)"
                    color="#4893B2"
                    size="18"
                    dense
                    class="pa-0 ma-0"
                  />
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        align-center
        justify-center
        class="text-center px-0"
      >
        <p
          class="px-0 display-1 primary--text mb-4 font-weight-medium text-left"
        >
          {{ this.$t("musician.styles") }}
        </p>

        <v-chip
          v-for="(instrument, i) in item.instruments"
          :key="instrument + '-' + i"
          class="ml-0 mr-1 my-1 white--text title font-weight-light pa-4 text-center justify-center align-center"
          label
          color="#6a81af"
          small
        >
          {{ instrument }}
        </v-chip>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        class="px-0"
      >
        <p
          class="px-0 display-1 primary--text mb-4 font-weight-medium"
        >
          {{ this.$t("musician.repertoire") }}
        </p>
        <v-list-item
          v-for="(reper, i) in item.repertorio"
          :key="reper.name + '-' + i"
          class="md-col-6"
        >
          <v-list-item-avatar>
            <v-icon
              size="48"
            >
              mdi-music-circle
            </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title
              class="title"
              v-text="reper.name"
            />
            <v-list-item-subtitle
              class="subtitle-1"
              v-text="reper.other"
            />
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>

    <v-row
      class="mb-10"
    >
      <v-col
        class="px-0 mb-10"
      >
        <v-btn
          large
          block
          class="primary text-center title mb-10"
        >
          {{ this.$t("musician.hire") }} {{ item.name }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  asyncData ({ params }) {
    console.log('router id :: ', params.id)
  },
  layout: 'default'
})
export default class ViewDashboardIndex extends Vue {
  miniVariant: boolean = false
  viewname: string = 'ViewDashboardIndex'

  itemsPerPage: number = 10
  options: any = {
    bio: true
  }

  fullyear: any = parseInt(new Date().getFullYear().toLocaleString()) - 1
  month: any[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
    'Octubre', 'Noviembre', 'Diciembre'
  ]

  imgItems: any[] = [
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
    },
    {
      src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
    }
  ]

  page: number = 1
  item: any = {
    name: 'Aaron',
    img: 'https://i.pravatar.cc/300?img=55',
    instruments: ['Piano', 'Cello'],
    styles: ['Piano', 'Cello'],
    rate: 4,
    repertorio: [
      {
        name: 'Bei Mir Bist Du Schon',
        other: 'Jacob Jacobs (lyricist) and Sholom Secunda (composer)'
      },
      {
        name: 'Stray Cat Strut',
        other: 'Stray Cats'
      },
      {
        name: 'Kiss',
        other: 'Prince'
      }
    ],
    reviews: [
      {
        name: 'Bei Mir Bist Du Schon',
        avatar: 'https://i.pravatar.cc/100?img=' + this.randomness(70),
        other: 'Jacob Jacobs (lyricist) and Sholom Secunda (composer)'
      },
      {
        name: 'Stray Cat Strut',
        avatar: 'https://i.pravatar.cc/100?img=' + this.randomness(70),
        other: 'Stray Cats'
      },
      {
        name: 'Kiss',
        avatar: 'https://i.pravatar.cc/100?img=' + this.randomness(70),
        other: 'Prince'
      }
    ],
    location: 'San Francisco',
    short_desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ligula ex, gravida id consequat sed, commodo sit amet nisl.'
  }

  randomness (max: number) {
    const min: number = 1 + Math.floor((max - 1) * Math.random())
    return min + Math.floor((max - min) * Math.random())
  }

  beforeMount (): void {
    console.log('beforeMount :: ', this.viewname)
  }
}
</script>

<style>
  .cursor-pointer {
    cursor: pointer;
  }
</style>
