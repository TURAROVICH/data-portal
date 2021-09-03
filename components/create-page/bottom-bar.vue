<template>
    <div class="bottom">
        <span v-html="text"></span>
        <div v-if="ss" @click="$emit('save')" class="btn-save">
            <span>Save</span>
        </div>
        <div v-if="bn" @click="$emit('tonext')" class="btn-save">
            <span>Next</span>
        </div>
         <div v-if="sp" @click="$emit('saveproduct')" class="btn-save">
            <span>Save Product</span>
        </div>
    </div>
</template>

<script>
export default {
    props:['text','ssave','next','saveproduct'],
    computed:{
        ss(){
            return this.ssave
        },
        bn(){
            return this.next
        },
        sp(){
            return this.saveproduct
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.bottom{
    width: 100%;
    height: 80px;
    background: #69B7FF;
    box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
    position: fixed;
    left:0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        color: #fff;
    }
    .btn-save{
        width: 130px;
        height: 45px;
        background: #FFFFFF;
        position: absolute;
        border-radius: 5px;
        right: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            @include h5;
            color: $blue;
        }
    }
}
</style>