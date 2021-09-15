<template>
    <div class="main">
        <header>
            <div class="container" :class="{'center':check}">
                <div @click="$router.push('/')" class="logo">
                    <div class="block"></div>
                    <div class="logo-text">
                        Pythagoras <br>
                        Portal
                    </div>
                </div>

                <div class="search">
                        <input placeholder="Search" type="text">
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C3.51472 2 1.5 4.01472 1.5 6.5C1.5 8.98528 3.51472 11 6 11C8.48528 11 10.5 8.98528 10.5 6.5C10.5 4.01472 8.48528 2 6 2ZM0 6.5C0 3.18629 2.68629 0.5 6 0.5C9.31371 0.5 12 3.18629 12 6.5C12 7.88653 11.5297 9.16322 10.7399 10.1792L14.7803 14.2197C15.0732 14.5126 15.0732 14.9874 14.7803 15.2803C14.4874 15.5732 14.0126 15.5732 13.7197 15.2803L9.67923 11.2399C8.66322 12.0297 7.38653 12.5 6 12.5C2.68629 12.5 0 9.81371 0 6.5Z" fill="#69B7FF"/>
                        </svg>

                </div>

                <div v-if="!check" @click="$router.push('/create')" class="add-btn">
                    <span>+Add New Product</span>
                </div>
            </div>
        </header>

        <div class="body">
            <Nuxt/>
        </div>

    </div>
</template>


<script>
export default {
    computed:{
        check(){
            return this.$route.path.includes('create')
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
header{
    min-height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .container{
        width: 90%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .center{
    justify-content: flex-start;
    .search{
        margin-left: 150px;
    }
    }
    .logo{
        display: flex;
        gap:10px;
        align-items: center;
        &-text{
            @include h4;
            line-height: 20px;
        }
        .block{
            width: 40px;
            height: 40px;
            left: 120px;
            top: 10px;

            background: rgba(105, 183, 255, 0.1);
            border-radius: 3px;
        }
    }

    .add-btn{
        cursor: pointer;
        width: 180px;
        height: 40px;
        background: $blue;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        span{
            @include h5;
            font-size: 16px;
            color: $white;
        }
    }

    .search{
        width: 50%;
        height: 35px;
        background: #F0F8FF;
        border: 2px solid $blue;
        box-sizing: border-box;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 10px 17px;
        gap: 30px;
        input{
            width: 100%;
            height:20px;
            background: transparent;
            border: none;
            outline: none;
        }
    }

}
.body{
    background: #F0F8FF;
    min-height: calc( 100vh - 60px );
    padding-bottom: 40px;
}
.main{
    width: 100%;
}


</style>