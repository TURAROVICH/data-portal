<template>
<div class="v-select">
    <div @click="$emit('remove',data.id)" class="remove">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 1.5C3.75 0.671573 4.42157 0 5.25 0H9.75C10.5784 0 11.25 0.671573 11.25 1.5V3H12.7423C12.7469 2.99996 12.7515 2.99996 12.7562 3H14.25C14.6642 3 15 3.33579 15 3.75C15 4.16421 14.6642 4.5 14.25 4.5H13.4483L12.7978 13.6069C12.7418 14.3918 12.0886 15 11.3017 15H3.69834C2.91138 15 2.25822 14.3918 2.20215 13.6069L1.55166 4.5H0.75C0.335786 4.5 0 4.16421 0 3.75C0 3.33579 0.335786 3 0.75 3H2.24381C2.24846 2.99996 2.25311 2.99996 2.25774 3H3.75V1.5ZM5.25 3H9.75V1.5H5.25V3ZM3.05548 4.5L3.69834 13.5H11.3017L11.9445 4.5H3.05548ZM6 6C6.41421 6 6.75 6.33579 6.75 6.75V11.25C6.75 11.6642 6.41421 12 6 12C5.58579 12 5.25 11.6642 5.25 11.25V6.75C5.25 6.33579 5.58579 6 6 6ZM9 6C9.41421 6 9.75 6.33579 9.75 6.75V11.25C9.75 11.6642 9.41421 12 9 12C8.58579 12 8.25 11.6642 8.25 11.25V6.75C8.25 6.33579 8.58579 6 9 6Z" fill="#999999"/>
        </svg>
    </div>
    <div class="select">
        <div class="type">Parameter</div>
        <select >
            <option selected>{{data.type}}</option>
            <option>Пункт 2</option>
        </select>
    </div>
     <div class="select">
        <div class="type">Type</div>
        <select >
            <option selected>{{data.type}}</option>
            <option>Пункт 2</option>
        </select>
    </div>
    <div class="name">
        <div class="type">Value</div>
        <input type="text" :value="data.name">
    </div>
        
</div>
</template>

<script>

export default {
    props:['data'],
    data:()=>({
    }),
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.v-select{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    margin: 20px 0;
    .select{
        display: flex;
        flex-direction: column;
        .type{
            @include h6;
            color: $gray;
            margin-left: 15px;
        }

    }
    .name{
        display: flex;
        flex-direction: column;
        .type{
            @include h6;
            color: $gray;
            margin-left: 15px;
        }
        input{
            width: 270px;
            height: 40px;
            border: none;
            outline: none;
            background: rgba(105, 183, 255, 0.1);
            border-radius: 5px;
            padding: 0 20px;
        }
    }
}
select{
    width: 170px;
height: 40px;
background: rgba(255, 255, 255, 0.1);
border: 1px solid #69B7FF;
box-sizing: border-box;
border-radius: 5px;
padding: 20px ;
outline: #69B7FF;
}
.check{
    width: 20px;
height: 20px;
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
    @include h6;
    color: $gray;
    white-space: nowrap;
    align-items: center;
}
</style>