<template>
  <div id="app" class="mainbody">
    <div class="appLayout">
            <div class="option">
                <router-link class="nav-link" :to="'/'"><h1 style="text-align: center; 
                font-family: 'Sansita Swashed'; font-size:70px; 
                color: rgb(44,62,80);">Utilities</h1></router-link>
                <ul class="list-group">
                  
                  <li class="a"><router-link class="nav-link" :to="'/tictactoe'">Tic Tac Toe</router-link></li>
                  <li class="b"><router-link class="nav-link" :to="'/passwordgenerator'">Password Generator</router-link></li>
                  <li class="c"><router-link class="nav-link" :to="'/randomnumber'">Random Number Generator</router-link></li>
                  <li class="c"><router-link class="nav-link" :to="'/shagenerator'">SHA512 Generator</router-link></li>
                </ul>
  
            </div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script defer>
// import HelloWorld from './components/HelloWorld.vue'
// import tictactoe from './components/tictactoe'
// import PasswordGenerator from './components/PasswordGenerator'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // tictactoe, PasswordGenerator
  },
 

   
}


</script>

<style>
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
@import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@900&display=swap');


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  .appLayout{
        height: 90vh;
        width: 80vw;
        border-radius: 25px;
        background-color: rgba(204, 255, 255,240);
        box-shadow: 10px 10px 10px grey;
        display:flex;
        /* filter: blur(0.5px); */
        /* margin-top: 20px; */
    }
    .mainbody{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        height: 100%;
        width: 100%;
        margin-top:0;
        /* flex-direction: column; */
    }
    .option
    {
        background-color: rgb(204, 153, 255);
        width: 30%;
        height: 100%;
        border-bottom-left-radius: 25px;
        border-top-left-radius: 25px;
        /* border-right: 10px solid black; */
        display: flex;
        flex-direction: column;
        
    }
    .content
    {
        background-color: pink;
        width:70%;
        height: 100%;
        border-bottom-right-radius: 25px;
        border-top-right-radius: 25px;
        display: flex;
        /* justify-content: center; */
        align-items: center;
        flex-direction: column;
    }

    li{
      background-color: rgb(204, 153, 255)
    }
    li:hover{
      background-color: grey;
      transform: scaleY(1.2);
      
    }
    ul {
    list-style-type: none;
    color:white;
    font-size: 40px;
    font-family: 'Sansita Swashed', cursive;
    
}
.nav-link{
   color:white;
    font-size: 40px;
}
.nav-link:hover{
   color:white;

}
    
</style>
