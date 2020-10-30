<template>
<div class='mainContent'>
    <div class='col-12 mainContainer'>
        <img src='../assets/Hashing.jpg'>
        <form v-on:submit.prevent="convertSha" action="" class="row formClass container">
             <h2 class="text-primary align-middle mt-0" 
             style="font-size: 55px;text-align:center;  font-family: 'Sansita Swashed', cursive;">SHA512 Generator</h2>
     
            <textarea rows="5" v-model="inputMessage" type="textarea" class="form-control inputStyle col-12 mt-3" placeholder="Message to Convert">
                </textarea>
  
        </form>
        <div class="row center-content mt-3">
            <button v-on:click='convertSha' class='btn btn-primary'>Convert</button>
        </div>
        <div class="row container">
            <textarea rows="5" v-model="outputMessage" type="textarea" class="form-control inputStyle col-12 mt-3" placeholder="Converted to SHA512">
                </textarea>
        </div>

    </div>
</div>
</template>

<style scoped>
.mainContent{
  display: flex;
  flex-direction: column;
  /* height: 100%; */
  width: 100%;
  /* background-color: green; */
  justify-content: center;
}
.center-content{
    display:flex;
    justify-content: center;
}
.mainContainer{
    margin-top:50px;
}
</style>

<script>
import { sha512 } from 'js-sha512'
export default {
    name:'ShaGenerator',
    data(){
        return{
            inputMessage: '',
            outputMessage: ''
        }
    },
    methods: {
        convertSha(){
            this.outputMessage = sha512(this.inputMessage)
        }
    }
}
</script>