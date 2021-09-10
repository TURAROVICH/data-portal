<template>
    <div class="carousel-item">
        <div class="title">Create Name of Product</div>
                                    <!-- Slider main container -->
                <div class="swiper">
                <!-- Additional required wrapper -->
                <div  class="swiper-wrapper">
                    <!-- Slides -->
                   
                   
                <div v-for="i of savedimgs" :key="i.id" class="swiper-slide">
                        <div class="container-slide">
                            <img :src="i.img" alt="">
                            <div class="text">The Macallan 15 Years old Double Cask Matured 700ml</div>
                        </div>
                    </div>

                </div>
                <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
        <div class="container">

            <InputSelect v-for="i in watchName" :key="i.id" :data="i" @remove="remove"/>
            <div @click="add" class="add-btn">
                <img src="@/assets/imgs/create/add.svg" alt="">
                <span>Add Name</span>
            </div>
        </div>
        
         <bottomBar v-if="isc" text="Create <strong>Name of Product</strong> in this category" @tonext="$emit('toSecondSlide')" :next="true"/>
    </div>
</template>

<script>
import bottomBar from './bottom-bar.vue'
import InputSelect from './input.vue'
export default {
    props:['iscurrent'],
    data:()=>({
        id:0,
        names:[{
            id:0,
            name:'The Maccallan',
            type:'None'
        }]
    }),
    mounted(){
    const Swiper = require('swiper/swiper-bundle.min.js');
     new Swiper('.swiper', {
             slidesPerView: 3,
             loop:true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
            });
    },
    methods:{
        remove(id){
            this.names = this.names.filter(i => i.id!==id)
        },
        add(){
            this.id+=1
            this.names.push({
                id:this.id,
                name:'The Maccallan',
                type:'None'
            })
        }
    },
    computed:{
        watchName(){
            return this.names
        },
        isc(){
            return this.iscurrent == 1 
        },
        savedimgs(){
            return this.$store.getters['data/imgs']
        }
    },
    components:{
        bottomBar,InputSelect
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.swiper{
    width: 90%;
    margin: 0 auto;
    height: 100px;
    &-slide{
        width: 300px;
    }
    .container-slide  {
    width: 99%;
    height: 90%;
    background: #FFFFFF;
    box-shadow: 0px 0px 2px rgba(188, 181, 219, 0.5);
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap:11px;
    img{
        width: 76px;
        height:100%;
        border-radius: 5px;
    }
    .text{
        @include h5;
    }
    }
}
 .carousel-item{
        width: 900px;
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(188, 181, 219, 0.25);
        border-radius: 20px;
        padding: 52px 0 0 0;
        .title{
            @include h4;
            font-size: 18px;
            text-align: center;
            margin: 0 0 40px 0;
        }
        .container{
            width: 70%;
            margin: 0  auto;
            height: 100%;
            .add-btn{
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 30px;
                gap:20px;
                span{
                    @include h5;
                    color: $blue;
                }
            }
        }
    }





















    /**
 * Swiper 7.0.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2021 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: August 31, 2021
 */
.swiper-button-prev,
.swiper-button-next {
  position: absolute;
  top: 50%;
  width:18px;
  height: 18px;
  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));
  z-index: 10;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #69B7FF;
  border-radius: 50%;
  color: #fff;
}
.swiper-button-prev.swiper-button-disabled,
.swiper-button-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  font-family: swiper-icons;
  text-transform: none !important;
  letter-spacing: 0;
  text-transform: none;
  font-variant: initial;
  line-height: 1;
  width: 4.8px;
  height: 9.6px;
  font-size: 9px;
}
.swiper-button-prev,
.swiper-rtl .swiper-button-next {
  left: 10px;
  right: auto;
}
.swiper-button-prev:after,
.swiper-rtl .swiper-button-next:after {
  content: 'prev';
}
.swiper-button-next,
.swiper-rtl .swiper-button-prev {
  right: 10px;
  left: auto;
}
.swiper-button-next:after,
.swiper-rtl .swiper-button-prev:after {
  content: 'next';
}
.swiper-button-lock {
  display: none;
}
</style>