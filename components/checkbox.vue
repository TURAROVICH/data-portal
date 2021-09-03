<template>
    <div @click="is=!is" class="box">
<div class="check">        
<svg v-if="is" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7576 0.180429C13.0557 0.442514 13.0826 0.893993 12.8176 1.18884L5.11387 9.76026C4.97682 9.91275 4.78037 10 4.57408 10C4.36778 10 4.17134 9.91275 4.03428 9.76026L0.182434 5.47455C-0.0825619 5.1797 -0.0557092 4.72822 0.242411 4.46614C0.540532 4.20406 0.997028 4.23061 1.26202 4.52546L4.57408 8.21057L11.738 0.239748C12.003 -0.0550971 12.4595 -0.0816547 12.7576 0.180429Z" fill="#69B7FF"/>
</svg>
</div>
<div class="desc">{{desc}}</div>
</div>
</template>

<script>
export default {
    props:['desc'],
    data:()=>({
        is:false
    }),
    watch:{
        is(){
            this.$emit('value', this.desc ? this.desc : false)
        }
    },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.check{
    width: 14px;
height: 14px;
background: #FFFFFF;
border: 1px solid #C4C4C4;
box-sizing: border-box;
border-radius: 2px;
display: flex;
align-items: center;
justify-content: center;
}
.box{
    display: flex;
    gap :14px;
    @include h5;
    color: $dark;
    white-space: nowrap;
}
</style>