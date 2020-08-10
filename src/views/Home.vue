  <!--INTRO-->
<template>
  <v-app>
    <section class="intro-bg">  
      <div class="intro">
        <intro-english />
        <img class="img-fluid" src="./../assets/mocukup.png" alt="Pitch Match Mockup">
      </div>
    </section>
  </v-app>  
</template>
  <!--INFO-->

<script>
  export default {
    name: 'Home',

    components: {
      IntroEnglish: () => import('@/components/IntroEnglish'),
    }
}
</script>

<style scoped>

.intro-bg {
  height: 800px;
  background: linear-gradient(36.1deg, #949494 0%, #d4d4d4 100%);
}

.intro {
  padding: 50px 15px;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.img-fluid {
  width: 33%;
  padding: 70px 0;
  animation: fadein 5s;
  -moz-animation: fadein 5s;
  -webkit-animation: fadein 5s;
  -o-animation: fadein 5s;
  align-self: center; 
}

</style>