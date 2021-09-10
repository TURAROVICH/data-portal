<template>
    <div class="main">
       <div class="b-1">
           <h1>Pythagoras <br>Portal</h1>
       </div>
       <div class="b-2">
           <div class="form">
               <div class="title">
                Log In
               </div>

               <div class="inputs">
                   <div class="input">
                        <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.0769 17H3.92308C2.31538 17 1 15.6909 1 14.0909V3.90909C1 2.30909 2.31538 1 3.92308 1H17.0769C18.6846 1 20 2.30909 20 3.90909V14.0909C20 15.6909 18.6846 17 17.0769 17Z" stroke="#BEBEBE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M1 4.63635L10.2121 10.4545L19.4242 4.63635" stroke="#BEBEBE" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                       <input placeholder="E-mail" type="email">
                   </div>
                    <div class="input">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13 0C9.89838 0 7.375 2.4673 7.375 5.5V7.7H6.25C5.00912 7.7 4 8.6867 4 9.9V19.8C4 21.0133 5.00912 22 6.25 22H19.75C20.9909 22 22 21.0133 22 19.8V9.9C22 8.6867 20.9909 7.7 19.75 7.7H18.625V5.5C18.625 2.4673 16.1016 0 13 0ZM9.625 5.5C9.625 3.6806 11.1392 2.2 13 2.2C14.8608 2.2 16.375 3.6806 16.375 5.5V7.7H9.625V5.5ZM19.7523 19.8H14.125V17.2942C14.7944 16.9125 15.25 16.2107 15.25 15.4C15.25 14.1867 14.2409 13.2 13 13.2C11.7591 13.2 10.75 14.1867 10.75 15.4C10.75 16.2096 11.2056 16.9125 11.875 17.2942V19.8H6.25V9.9H19.75L19.7523 19.8Z" fill="#BEBEBE"/>
                        </svg>


                       <input placeholder="password" :type="type">

                        <svg @click="type=='password' ? type='text' : type='password'" width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 7C19 7 14.9846 13 10 13C5.01538 13 1 7 1 7C1 7 5.01538 1 10 1C14.9846 1 19 7 19 7Z" stroke="#BEBEBE" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                        <path d="M9.99994 10C11.5293 10 12.7692 8.65685 12.7692 7C12.7692 5.34315 11.5293 4 9.99994 4C8.47054 4 7.23071 5.34315 7.23071 7C7.23071 8.65685 8.47054 10 9.99994 10Z" stroke="#BEBEBE" stroke-width="2" stroke-miterlimit="10" stroke-linejoin="round"/>
                        </svg>

                   </div>
                   <div class="forgot">Forgot password?</div>

                   <div class="login-btn">
                       <span>Log In</span>
                   </div>
               </div>
           </div>
       </div>
    </div>
</template>


<script>
export default {
    layout:'empty',
    data:()=>({
        type:'password'
    })
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.main{
    width: 100%;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    grid-gap: 0;
    .b-1{
        background: url("@/assets/imgs/login/main.png") no-repeat;
        background-size: cover;
        background-position: center center;
        display: flex;
        align-items: center;
        justify-content: center;
        @include h1;
    }
    .b-2{
        display: flex;
        align-items: center;
        justify-content: center;
        .inputs{
            display: flex;
            flex-direction: column;
            gap: 15px;
            margin-top: 57px;
        }
        .form  {
            width: 80%;
        }
        .title{
            @include h2;
        }
        input{
            width: 100%;
            height: 90%;
            border: none;
            outline: none;
            background: transparent;
        }
        .input{
            padding: 22px 21px;
            gap: 10px;
            width: 100%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(105, 183, 255, 0.1);
            border-radius: 10px;
        }
        .forgot{
            @include h5;
            color: $blue;
            align-self: flex-end;
            justify-self: flex-end;
        }
        .login-btn{
            width: 120%;
            width: 100%;
            height: 60px;
            margin-top: 56px;
            background: $blue;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
                @include h5;
                color: $white;
            }
        }
    }
}

</style>