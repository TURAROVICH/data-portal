<template>
    <div class="carousel-item" >
         <div v-if="showImport" class="import">
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99992 0.166668C9.59823 0.166668 10.0833 0.651693 10.0833 1.25V12.7179L12.5672 10.234C12.9903 9.8109 13.6762 9.8109 14.0993 10.234C14.5224 10.657 14.5224 11.343 14.0993 11.766L9.76595 16.0994C9.34288 16.5224 8.65695 16.5224 8.23388 16.0994L3.90055 11.766C3.47748 11.343 3.47748 10.657 3.90055 10.234C4.32362 9.8109 5.00955 9.8109 5.43262 10.234L7.91658 12.7179V1.25C7.91658 0.651693 8.40161 0.166668 8.99992 0.166668ZM1.41659 16.4167C2.01489 16.4167 2.49992 16.9017 2.49992 17.5V19.6667H15.4999V17.5C15.4999 16.9017 15.9849 16.4167 16.5832 16.4167C17.1816 16.4167 17.6666 16.9017 17.6666 17.5V19.6667C17.6666 20.8633 16.6965 21.8333 15.4999 21.8333H2.49992C1.3033 21.8333 0.333252 20.8633 0.333252 19.6667V17.5C0.333252 16.9017 0.818277 16.4167 1.41659 16.4167Z" fill="#69B7FF"/>
                </svg>
            <div class="desc">
                Select product photos <br>
                        or <br>
                You can Drag and Drop items here
            </div>
           <label for="upload-photo">+Add Photos</label>
            <input ref="img" @change="take" accept=".png,.jpg,.jpeg" type="file" name="photo" id="upload-photo" />
         </div>

        <div v-if="imgs.length" class="imgs">
            <div class="title"><strong>Data</strong> & <strong>To process</strong> can have several photos of the same type <br> <strong>System</strong> of only one type</div>

            <div class="cards">
                   <card v-for="i in images" :key="i.id"  :data="JSON.stringify(i)" @setParam="setParam" @setType="setType"/>
            </div>
        </div>

        <div class="cards">
            <div v-for="i in result" :key="i.id" class="res-card">
                <img :src="i.img" alt="">
                <div class="about">
                    <div class="type">
                        <strong>Type</strong><span v-for="(j,k) in i.type" :key="k">{{j}}</span>
                    </div>
                    <div class="type">
                        <strong>Parameter</strong><span v-for="(j,k) in i.parameter" :key="k">{{j}}</span>
                    </div>
                </div>
            </div>
           
        </div>
         
        <bottomBar v-if="showBottom" :text="bts" :ssave="btsave" @save="save" :next="next" @tonext="toNext" />
    </div>
</template>



<script>
import checkbox from '../checkbox.vue'
import bottomBar from './bottom-bar.vue'
import Card from './card.vue'
export default {
  components: { checkbox ,bottomBar,Card},
    data:()=>({
        id:0,
        imgs:[],
        img:false,
        bt:'<strong>Data</strong> & <strong>To process</strong> can have several photos of the same type.<strong> System</strong> of only one type',
        bts:'выберите изображение',
        next:false,
        showImport:true,
        showBottom:true
    }),
    methods:{
        take(){
        this.imgs.push({
        img:URL.createObjectURL(this.$refs.img.files[0]),
        id:this.id,
        parameter:[],
        type:[],
        
        })  
        this.id += 1
        },
        setType(data){
            this.imgs[data.id].type.push(data.value)
        },
        setParam(data){
            this.imgs[data.id].parameter.push(data.value)
        },
        save(){
            this.$store.dispatch('data/fetchImg',this.imgs)
            this.bt = ""
            this.imgs = []
            this.bts = ''
            this.next = true
            this.showImport=false

        },
        toNext(){
        this.showBottom=false
        this.$emit('toSecondSlide')
        }
    },
    computed:{
        btsave(){
            return this.imgs.length ? true : false
        },
        images(){
            return this.imgs
        },
        result(){
            return this.$store.getters['data/imgs']
        }
    }
}
</script>



<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.cards{
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 30px;
margin-top: 26px;
.res-card{
    img{
        width: 100%;
        height: 187px;
        background: #F0F8FF;
        border-radius: 10px 10px 0px 0px;
    }
    .about{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 20px;
        .type{
            strong{
                @include h6;
                color:$gray;
                margin: 0 5px
            }
            span{
                @include h6;
                color: $blue;
                margin: 0 2px;
            }
        }
    }
    width:100%;
    height: 222px;
    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 10px;
}
}
.imgs{
    width: 100%;
    .title{
        @include h5;
        font-weight: normal;
        text-align: center;
        margin-top: 28px;
    }

    .cards{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
        margin-top: 26px;
        
    }

    .select{
        display: flex;
        justify-content: space-between;
        .sel{
            padding: 9px 20px;
            .desc{
                display: flex;
                margin: 9px 0 12px 0;
                span{
                    @include h6;
                    color:$gray;
                }
            }
           .boxes{
            display: flex;
           flex-direction: column;
           } 
          
        }
    }
}
label {
   cursor: pointer;
    width: 170px;
    height: 35px;

    background: $blue;
    border-radius: 5px;
    color: $white;
    display: flex;
    align-items: center;
    justify-content: center;
}

#upload-photo {
   opacity: 0;
   position: absolute;
   z-index: -1;
}

 .carousel-item{
        width: 900px;
        min-height: 90vh;
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(188, 181, 219, 0.25);
        border-radius: 20px;
        color: turquoise;
        padding: 35px ;
    }


    .import{
        width: 280px;
        height: 187px;
        left: 580px;
        top: 202px;

        background: rgba(105, 183, 255, 0.1);
        border: 2px dashed rgba(105, 183, 255, 0.1);
        box-sizing: border-box;
        border-radius: 10px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .desc{
            @include h5;
            text-align: center;
            font-size: 12px;
            color: $gray;
            margin: 14px 0 18px 0;
        }
    }
</style>