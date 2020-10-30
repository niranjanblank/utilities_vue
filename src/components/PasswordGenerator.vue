<template>
    
    <div class="container center-screen" style="margin-top:150px;display:flex; justify-content: center;">
            <div  class="row password-content " >
                <div class="col-12">
                    <img src='../assets/password.png' width="150px" height="120px">
                    <h2 class="text-primary align-middle" style="font-size: 55px;text-align:center;  font-family: 'Sansita Swashed', cursive;">Password Generator</h2>
                    <form v-on:submit.prevent="generatePassword" action="" class="row">
                        <input v-model="length" type="text" class="form-control" placeholder="Please enter any number">
                    </form>
                    <div class="row mt-2" style="display: flex;
                    justify-content: center;">
                        <button @click="generatePassword" class="btn btn-primary">Generate Password</button>
                    </div>
                    <h2 ><p class="ow mt-3" style="text-justify: center;">{{password}}</p></h2>
                    
                </div>
            </div>
   

    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Permanent+Marker&family=Sansita+Swashed:wght@900&display=swap');
.ow{
            overflow-wrap: break-word;
         word-wrap: break-word;
        hyphens: auto;

        }
.center-screen {
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: center; */
  text-align: center;

}
.password-content{
    width:80%;
    height:100%;
}

</style>
<script>
export default {
    name:'PasswordGenerator',
    data(){
        return {
            password: 'Password',
                        length: ''
        }
    },
    methods: {
         generatePassword(){
                            let number = parseInt(this.length);
                            if(!isNaN(number)){     
                               
                                let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                                let lowercase = 'abcdefghijklmnopqrstuvwxyz';
                                let numbers = '0123456789';
                                let symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';
                                let all = uppercase + lowercase + numbers + symbols;
                                this.password = '';
                                for (let index = 0; index < number; index++) {
                                    let character = Math.floor(Math.random() * all.length); //Math.random() always gets number between 0 and 1 
                                    this.password += all.substring(character, character + 1);
                                }
                            
                            }   
                            
                            else{
                                alert('Please Input Numbers');
                            }
                            
                        }
    }
}
</script>