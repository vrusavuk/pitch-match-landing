<template>
<div>
    <v-container
        v-for="align in alignments"
        :key="align"
        
    >
    <v-row class="header">
    <h1>
        Features
    </h1>    
    </v-row>       
    <v-row class="p">
    <p>
        Pitch-Match is a user friendly app and is very easy to use. We made sure you fully enjoy your experience, from meeting with people up to playing soccer!
    </p>    
    </v-row> 
    
        <v-content>
      <v-container grid-list-md>
        <v-layout>
          <v-flex xs4>
            <v-card flat>
              <v-card-text>  <mockup /> </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card>
              <v-card-text>  12 </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs4>
            <v-card flat>
              <v-card-text>  <mockup /> </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>  
    </v-content>
     
      <v-row
        :align="align"
        
        style="height: 150px;"
      >
        <v-col
          v-for="n in 1"
          :key="n"
        >
         <mockup />
        </v-col>
      </v-row>
    </v-container>

</div>
</template>

<script>
import Mockup from './../components/Mockup';
export default {
    name: 'FeaturesText',
    components: {
      Mockup
    },
    data: () => ({
      alignments: [
        'center',
    
      ],
    }),
    
}
</script>

<style scoped>

.header h1 {
  font-size: 45px;
  font-weight: bold;
  color: #01380d;
  max-width: 379px;
  line-height: 36px;
  padding: 25px;
  max-width: 500px;
  margin: 0 auto;
}

.p p {
  font-size: 25px;
  font-weight: 300;
  color: #291e33;
  max-width: 900px;
  line-height: 36px;
  padding: 0px;
  margin: 0 auto;
  text-align: center;
}

.col {
    display: column;
}

.text {
}
</style>