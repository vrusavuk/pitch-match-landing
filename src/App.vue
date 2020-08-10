<template>
  <v-app>
  
    <router-view name="navbar"></router-view>
    
    <v-main>
      <router-view name="home"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
