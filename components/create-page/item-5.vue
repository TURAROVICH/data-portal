<template>
    <div class="carousel-item">
        <div class="title">The Macallan 18 Years Triple Cask Matured</div>
               
        <div class="container">

            <InputSelect v-for="i in watchName" :key="i.id" :data="i" @remove="remove"/>
            <div @click="add" class="add-btn">
                <img src="@/assets/imgs/create/add.svg" alt="">
                <span>Add Parameter</span>
            </div>
        </div>
        
         <bottomBar v-if="isc" text="The Macallan 18 Years Triple Cask Matured"  :saveproduct="true" />
    </div>
</template>

<script>
import bottomBar from './bottom-bar.vue'
import InputSelect from './input-5.vue'
import 'swiper/swiper-bundle.css'
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
            console.log(this.iscurrent);
            return this.iscurrent == 4
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



</style>



