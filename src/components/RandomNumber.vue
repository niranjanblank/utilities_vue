<template>
    <div class="randomNumberContainer" style="margin-top:100px;">
         <img src='../assets/random.png' width="200px" height="200px">
         <h2 class="text-primary align-middle mt-0" style="font-size: 55px;text-align:center;  font-family: 'Sansita Swashed', cursive;">Random Number Generator</h2>
        <form v-on:submit.prevent="generateNumber(fromNumber,toNumber)" action="" class="row formClass">
                        <input v-model="fromNumber" type="text" class="form-control inputStyle" placeholder="Smaller Number">
                        <div class="totext">To</div>
                        <input v-model="toNumber" type="text" class="form-control inputStyle" placeholder="Larger Number">
        </form>
        <button @click="generateNumber(fromNumber,toNumber)" class="btn btn-primary mt-2" >Generate Number </button>
        <h2 class='mt-2'>{{generatedNumber}}</h2>
    </div>
</template>

<style>
.inputStyle{
    width:150px;
}
.totext{
    /* color: white; */
    text-align:center;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 32px;
    font-family: 'Sansita Swashed', cursive;
}
.formClass{
    display:flex;
     justify-content: center;
}
.randomNumberContainer{
    display: flex;
    flex-direction: column;
    margin-top:30px;
    justify-content: center;
    align-items: center;
}


</style>


<script>
export default {
    name: 'Random Number',
    data(){
        return{
            fromNumber:0,
            toNumber:100,
            generatedNumber: 'Number'
        }
    },
    methods: {
        generateNumber(min,max){
            min=parseInt(min)
            max=parseInt(max)
            if(isNaN(min) || isNaN(max))
            {
                alert('Please input numbers only')
            }
            this.generatedNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        }
    }
}
</script>