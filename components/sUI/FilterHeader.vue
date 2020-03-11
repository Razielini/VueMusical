<template>
  <v-content
    fluid
    class="px-0"
    style="max-height: fit-content"
  >
    <v-container
      v-if="$vuetify.breakpoint.xs"
      class="py-0 px-0"
    >
      <v-btn
        depressed
        block
        tile
        color="primary"
        @click="showFilter = !showFilter"
      >
        <v-icon
          left
        >
          mdi-filter
        </v-icon>
        {{ showFilter ? $t("filter.show_filter_off") : $t("filter.show_filter_on") }}
      </v-btn>
      <v-row
        v-if="showFilter"
        class="px-4"
      >
        <v-combobox
          :items="isType"
          label="Type"
          hide-details
          outlined
          dense
          block
          class="py-2"
        />
        <v-menu
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          transition="scale-transition"
          offset-y
          min-width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="date"
              label="Date"
              readonly
              outlined
              hide-details
              dense
              class="py-2"
              v-on="on"
            />
          </template>
          <v-date-picker v-model="date" @input="menu2 = false" />
        </v-menu>
        <v-combobox
          :items="styles"
          label="Styles"
          hide-details
          outlined
          dense
          class="py-2"
        />
        <v-combobox
          :items="instruments"
          label="Instruments"
          hide-details
          outlined
          dense
          class="py-2"
        />
        <v-combobox
          :items="locations"
          label="Locations"
          hide-details
          outlined
          dense
          class="py-2"
        />
        <v-combobox
          :items="sorts"
          label="Sort"
          prepend-inner-icon="mdi-sort-alphabetical"
          hide-details
          outlined
          dense
          class="py-2"
        />
      </v-row>
    </v-container>
    <v-container
      v-else
      class="py-1 px-0"
    >
      <v-row>
        <v-col>
          <v-combobox
            :items="isType"
            label="Type"
            hide-details
            outlined
            dense
            block
          />
        </v-col>
        <v-col>
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="date"
                label="Date"
                readonly
                outlined
                hide-details
                dense
                v-on="on"
              />
            </template>
            <v-date-picker v-model="date" @input="menu2 = false" />
          </v-menu>
        </v-col>
        <v-col>
          <v-combobox
            v-model="bFilter.style"
            :items="styles"
            label="Styles"
            hide-details
            outlined
            dense
            :search-input.sync="search.style"
          />
        </v-col>
        <v-col>
          <v-autocomplete
            v-model="bFilter.instrument"
            :items="instruments"
            label="Instruments"
            hide-details
            outlined
            dense
            :search-input.sync="search.instrument"
          />
        </v-col>
        <v-col>
          <v-combobox
            :items="locations"
            label="Locations"
            hide-details
            outlined
            dense
          />
        </v-col>
        <v-col>
          <v-combobox
            v-model="bFilter.sort"
            :items="sorts"
            label="Sort"
            prepend-inner-icon="mdi-sort-alphabetical"
            hide-details
            outlined
            dense
            :search-input.sync="search.sort"
          />
        </v-col>
      </v-row>
    </v-container>
    <v-divider
      v-if="!$vuetify.breakpoint.xs"
    />
  </v-content>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class FilterHeader extends Vue {
  date: string = new Date().toISOString().substr(0, 10)
  menu2: boolean = false
  showFilter: boolean = false
  search: any = {
    instrument: '',
    style: '',
    sort: ''
  }

  bFilter: any = {
    type: null,
    date: null,
    instrument: null,
    style: null,
    location: null,
    sort: null
  }

  get filter () {
    return Object.assign({}, this.$store.state.filter)
  }

  @Watch('filter.instrument')
  watchFilterInstrument (v: any) {
    console.log('filter.instrument :: ', v)
    if (v === null) {
      this.bFilter.instrument = null
      this.search.instrument = ''
    }
  }

  @Watch('bFilter.instrument')
  watchBFilterInstrument (v: any) {
    console.log('bFilter.instrument :: ', v)
    if (v) {
      this.search.instrument = ''
      this.$store.dispatch('filter/add', { type: 'instrument', value: v })
    }
  }

  @Watch('bFilter.style')
  watchBFilterStyle (v: any) {
    console.log('bFilter.style :: ', v)
    if (v) {
      this.search.style = ''
      this.$store.dispatch('filter/add', { type: 'style', value: v })
    }
  }

  @Watch('bFilter.sort')
  watchBFilterSort (v: any) {
    console.log('bFilter.sort :: ', v)
    if (v) {
      this.search.sort = ''
      this.$store.dispatch('filter/add', { type: 'sort', value: v })
    }
  }

  isType: string[] = [
    'All',
    'Soloist',
    'Ensembles'
  ]

  styles: string[] = [
    'Alternative Rock',
    'Bachata',
    'Cabaret',
    'Dixieland',
    'Electronic music',
    'Fandango',
    'G-funk',
    'Habanera',
    'Impressionist',
    'Jazz',
    'K-pop',
    'Latin jazz',
    'Mariachi',
    'Opera'
  ]

  instruments: string[] = [
    'Accordion',
    'Banjo',
    'Castanets',
    'Daiko',
    'Electric guitar',
    'Fiddle',
    'Gaita',
    'Handbells',
    'Kora',
    'Lute',
    'Mandolin',
    'Oboe',
    'Pan pipes',
    'Quena'
  ]

  locations: string[] = [
    'San Francisco',
    'South San Francisco',
    'San Francisco, CA, USA',
    'San Francisco International',
    'San Francisco del Rincón',
    'San Francisco, Nayarit, Nayarit',
    'San Francisco, Mazatlán, Sinaloa'
  ]

  sorts: string[] = [
    'ASC',
    'DESC',
    '- Booking',
    '+ Booking'
  ]

  beforeMount (): void {
    this.bFilter = Object.assign({}, this.filter)
  }
}
</script>
