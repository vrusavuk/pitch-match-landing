<template>
  <v-app>
  
    <router-view class="view one" name="navbar"></router-view>
    
    <v-main>
      
      <router-view class="view two" name="home"></router-view>
      <router-view class="view two" name="homeru"></router-view>
      
      
      <router-view class="view three" name="features"></router-view>
      <router-view class="view three" name="featuresru"></router-view>
      
      <router-view class="view four" name="footer"></router-view>
      
    </v-main>
    <router-view />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    //
  }),
};
</script>
