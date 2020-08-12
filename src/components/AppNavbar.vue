<template>
  
  <v-app-bar
    v-scroll="onScroll"
    :color="!isScrolling ? 'transparent' : 'transparent'"
    fixed
    flat
    dark
  >
    <v-slide-x-transition>
      <v-img
        v-if="showLogo"
        :src="require('@/assets/logo-pitch-match.png')"
        class="shrink"
        contain
        height="50"
        position="relative"
      />
    </v-slide-x-transition>

    <v-spacer />
     <v-btn-toggle
          rounded
        >
          <v-btn a href="/ru">
            ru
          </v-btn>
          <v-btn a href="/en">
            en
          </v-btn>
         
        </v-btn-toggle>

  </v-app-bar>
</template>

<script>
  export default {
    name: 'AppNavbar',

    data: () => ({
      showLogo: false,
      isScrolling: false,
      
    }),

    methods: {
      onScroll () {
        const offset = window.pageYOffset
        this.isScrolling = offset > 50
        this.showLogo = offset > 200
        
      },
    },
  }
</script>
