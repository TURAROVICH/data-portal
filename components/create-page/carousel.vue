<template>
    <div class="carousel">
        <div class="carousel-wrapper" :style="{'margin-left':`${next}px`}">
            <Item1 @toSecondSlide="next-=970"/>
            <Item2  @toSecondSlide="next-=970" :iscurrent="chenged"/>
            <Item3  @toSecondSlide="next-=970" :iscurrent="chenged"/>
            <Item4 @toSecondSlide="next-=970" :iscurrent="chenged"/>
            <Item5 @toSecondSlide="next-=970" :iscurrent="chenged"/>
        </div>
    </div>
</template>

<script>
import Item1 from './item-1.vue'
import Item2 from './item-2.vue'
import Item3 from './item-3.vue'
import Item4 from './item-4.vue'
import Item5 from './item-5.vue'
export default {
    data:()=>({
        next:200,
        chenged:0
    }),
    watch:{
        next(n){
            if(this.chenged !== 4){
                this.chenged +=1
                this.$emit('active-slide',this.chenged)
            }
            
        }
    },
    components:{
        Item1,
        Item2,
        Item3,
        Item4,
        Item5
    }
}
</script>


<style lang="scss" scoped>
.carousel{
    width: 100%;
    background: transparent;
    margin-top: 25px;
    overflow: hidden;
    &-wrapper{
        width:1200px;
        display: grid;
        grid-template-columns: repeat(5,1fr );
        grid-gap: 100px;
        transition: all .9s ease;
    }
    &-item{
        width: 900px;
        background: #FFFFFF;
        box-shadow: 0px 2px 6px rgba(188, 181, 219, 0.25);
        border-radius: 20px;
    }
}
</style>


