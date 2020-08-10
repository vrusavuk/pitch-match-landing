  <!--INTRO-->
  <template>
      <section class="intro-bg">  
        <div class="intro">
          <div>
            <h1>Pitch-Match</h1>
            <p>Soccer available for everyone at any time!</p>
            <div class="row">
              <div class="column">
                <a href="https://search.itunes.apple.com/WebObjects/MZContentLink.woa/wa/link?mt=8&path=appstore">
                  <img alt="App Store Badge" src="./../assets/app-store-badge.png"
                  width="200" height="auto">
                </a> 
              </div>
              <div class="column">
                <a href="https://play.google.com/store/apps?hl=en">
                  <img alt="App Store Badge" src="./../assets/google-play-badge.png"
                  width="200" height="auto">
                </a> 
              </div>
            </div>
          </div>
          <img class="img-fluid" src="./../assets/mocukup.png" alt="Pitch Match Mockup">
        </div>
      </section>
  </template>
  <!--INFO-->

<script>
  export default {
    return () {
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

.intro h1 {
  font-size: 80px;
  font-weight: bold;
  color: #01380d;
  margin-top: 180px;
  margin-bottom: 20px;
}

.intro p {
  font-size: 40px;
  font-weight: regular;
  color: #ffffff;
  max-width: 379px;
  line-height: 36px;
  margin-bottom: 36px;
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 50px;
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

.row {
  display: flex;
}

.row::after, .row::before {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 33.3%;
  padding-left: 0%;
  padding-right: 10%;
}
</style>