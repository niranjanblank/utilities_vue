<template>
  <div class="hello">
     <h1 style="text-align: center; font-family: 'Sansita Swashed'; font-size:70px;">Utilities</h1>
     <div>
       <h3 class="textStyle"> 1. Utilities is a simple webapp having some useful tools. </h3>
       <h3 class="textStyle"> 2. Tictactoe is a simple game which can be played with any friend. </h3>
       <h3 class="textStyle"> 3. Password generator helps to generate strong passwords. </h3>
       <h3 class="textStyle"> 4. Random number generator helps to generate random numbers which can be used in lucky draw. </h3>
       
     </div>
    <div class="brandIcons">
      <h2> niranjanshah474@gmail.com</h2>
      <div>
        <a href='https://github.com/niranjanblank'><font-awesome-icon class="gb" :icon="['fab', 'github']"  /></a>
        <a href='https://www.facebook.com/niranjanBlanK/'><font-awesome-icon class="fb" :icon="['fab', 'facebook']" /></a>
        <a href='https://twitter.com/niranjanblank'><font-awesome-icon class="tw" :icon="['fab', 'twitter']" /></a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Utilities',
  props: {
    msg: String
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.textStyle{
  font-family: 'Sansita Swashed', cursive;
  color: white;
}
.hello{
  display: flex;
  flex-direction: column;
  height:100%;
  width: 100%;
  /* background-color: green; */
  justify-content: center;
}
.brandIcons{
  display: flex;
  justify-content: center;
  align-self: center;
  flex-direction: column;
  width:100%;
  margin-top:200px;
  /* background-color: red; */
}
.gb, .tw, .fb{
font-size:100px;
margin-left: 10px;
margin-left: 10px;
}
.gb:hover, .tw:hover, .fb:hover
{
  color:indigo

}
</style>
