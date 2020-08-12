<template>
    <v-container>
        <v-row justify="center" align="center">
        <v-col cols="10" sm="3">
   
            <img class="img-fluid" src="./../assets/mockup-2.png" alt="Pitch Match Mockup">
        </v-col>
    </v-row>
    </v-container>
    
</template>

<script>
  export default {
    name: 'Mockup'
}

</script>

<style scoped>

.img-fluid {
  max-height: 70vh;  
  display: flex;
}

.mx-auto {
    display: column;
    
    
}

.col-text {
    max-width: 270px;
}

.title h1 {
    font-weight: bold;
    font-size: 25px;
}

</style>