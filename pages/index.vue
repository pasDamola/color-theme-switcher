<template class="dark_background">
  <v-container>
    <v-row>
      <v-col cols="9">
        <v-text-field
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          dense
          solo
          background-color="hsl(209, 23%, 22%)"
          placeholder="Search for a country..."
          style="width : 50%"
        ></v-text-field>
      </v-col>
      <v-col cols="3">
        <v-select
          :items="items"
          label="Solo field"
          dense
          solo
          placeholder="Filter By Region"
          background-color="hsl(209, 23%, 22%);"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 4" :key="n" cols="12" sm="3">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>
              Share
            </v-btn>

            <v-btn color="orange" text>
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 4" :key="n" cols="12" sm="3">
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Top 10 Australian beaches</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Whitehaven Beach</div>

            <div>Whitsunday Island, Whitsunday Islands</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>
              Share
            </v-btn>

            <v-btn color="orange" text>
              Explore
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz']
  })
}
</script>
<style>
.dark_background {
  background-color: hsl(207, 26%, 17%);
}
</style>
