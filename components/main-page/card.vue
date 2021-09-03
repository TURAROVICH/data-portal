<template>
    <div  class="card">
       <img @click="$emit('open')" src="@/assets/imgs/main/Header.png" alt="">
       <div class="info">
           <div class="desc">Brand</div>
           <div class="items">
               The Macallan
           </div>
       </div>
       <div class="info">
           <div class="desc">Product name</div>
           <div class="items">
             The Macallan 15 Years old Double Cask Matured 700ml
           </div>
       </div>

         <div class="info">
           <div class="desc">Type</div>
           <div class="items">
              Whisky
           </div>
           <div class="items">
              Irish
           </div>
           <div class="items">
              Pot Still
           </div>
           <div class="drop-down">
                <svg @click="down" width="12" class="card-btn" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6 4L11 1" stroke="#69B7FF" stroke-width="2" stroke-linecap="round"/>
                </svg>
                <div v-if="Mmodal" id="card-drop">
                   <span>Whiskey</span>      <span>Triple</span>    <span>Cask</span>    <span>Matured</span>     <span>SubType</span>       <span>SubType</span>       <span>SubType</span>  
                </div>
           </div>
       </div>
       <div class="info">
           <div class="desc">Parameters</div>
           <div class="items">
                Abv 40%
           </div>
            <div class="items">
              Age 12 years
           </div>
       </div>
        <div class="info">
           <div class="desc">Connections</div>
           <div class="items">
               Version
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data:()=>({
        Mmodal:false 
    }),
    methods:{
    down() {
        this.Mmodal = !this.Mmodal
    }
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

#card-drop{
    position: absolute;
    width: 386px;
    min-height: 58px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 7px 49px 9px 7px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap:15px;
    span{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    span:not(:first-child)::before{
        content:"";
        display: inline-block;
        width: 5px;
        height: 5px;
        background: $blue;
        border-radius: 50%;
    }
}

.card{
    width: 800px;
    min-height: 90px;
    background: #FFFFFF;
    box-shadow: 0px 2px 2px rgba(188, 181, 219, 0.1);
    border-radius: 10px;
    padding: 8px;display: flex;
    gap: 25px;
.info{
    max-width: 180px;
    .desc{
        @include h5;
        font-size: 10px;
        color: $gray;
    }
    .items{
        @include h5;
        font-size: 12px;
        color: $black;
    }
    .drop-down{
        margin-top: -10px;
    }
}
}
</style>