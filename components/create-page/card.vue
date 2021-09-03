<template>
     <div  class="card">
                    <img :src="db.img" alt="">
                    <div class="select">
                        <div class="sel">
                            <div class="desc">
                                <span>Type</span>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49996 1.83317C3.47492 1.83317 1.83329 3.47479 1.83329 5.49984C1.83329 7.52488 3.47492 9.1665 5.49996 9.1665C7.525 9.1665 9.16663 7.52488 9.16663 5.49984C9.16663 3.47479 7.525 1.83317 5.49996 1.83317ZM0.916626 5.49984C0.916626 2.96853 2.96865 0.916504 5.49996 0.916504C8.03126 0.916504 10.0833 2.96853 10.0833 5.49984C10.0833 8.03114 8.03126 10.0832 5.49996 10.0832C2.96865 10.0832 0.916626 8.03114 0.916626 5.49984Z" fill="#C4C4C4"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49996 4.58317C5.75309 4.58317 5.95829 4.78837 5.95829 5.0415V7.7915C5.95829 8.04463 5.75309 8.24984 5.49996 8.24984C5.24683 8.24984 5.04163 8.04463 5.04163 7.7915V5.0415C5.04163 4.78837 5.24683 4.58317 5.49996 4.58317Z" fill="#C4C4C4"/>
                                    <path d="M6.18746 3.43734C6.18746 3.81703 5.87966 4.12484 5.49996 4.12484C5.12026 4.12484 4.81246 3.81703 4.81246 3.43734C4.81246 3.05764 5.12026 2.74984 5.49996 2.74984C5.87966 2.74984 6.18746 3.05764 6.18746 3.43734Z" fill="#C4C4C4"/>
                                    </svg>

                            </div>
                            <div class="boxes">
                                <checkbox desc="Front"  @value="setVal"/>
                                <checkbox desc="Left"  @value="setVal"/>
                                <checkbox desc="Right"  @value="setVal"/>
                                <checkbox desc="Top"  @value="setVal"/>
                                <checkbox desc="Bottom"  @value="setVal"/>

                            </div>
                        </div>
                        <div class="sel">
                            <div class="desc">
                                <span>Parameter</span>
                                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49996 1.83317C3.47492 1.83317 1.83329 3.47479 1.83329 5.49984C1.83329 7.52488 3.47492 9.1665 5.49996 9.1665C7.525 9.1665 9.16663 7.52488 9.16663 5.49984C9.16663 3.47479 7.525 1.83317 5.49996 1.83317ZM0.916626 5.49984C0.916626 2.96853 2.96865 0.916504 5.49996 0.916504C8.03126 0.916504 10.0833 2.96853 10.0833 5.49984C10.0833 8.03114 8.03126 10.0832 5.49996 10.0832C2.96865 10.0832 0.916626 8.03114 0.916626 5.49984Z" fill="#C4C4C4"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.49996 4.58317C5.75309 4.58317 5.95829 4.78837 5.95829 5.0415V7.7915C5.95829 8.04463 5.75309 8.24984 5.49996 8.24984C5.24683 8.24984 5.04163 8.04463 5.04163 7.7915V5.0415C5.04163 4.78837 5.24683 4.58317 5.49996 4.58317Z" fill="#C4C4C4"/>
                                    <path d="M6.18746 3.43734C6.18746 3.81703 5.87966 4.12484 5.49996 4.12484C5.12026 4.12484 4.81246 3.81703 4.81246 3.43734C4.81246 3.05764 5.12026 2.74984 5.49996 2.74984C5.87966 2.74984 6.18746 3.05764 6.18746 3.43734Z" fill="#C4C4C4"/>
                                    </svg>

                            </div>
                            <div class="boxes">
                                <checkbox desc="Data" @value="setParam"/>
                                <checkbox desc="To Process" @value="setParam"/>
                                <checkbox desc="System" @value="setParam"/>
                                <checkbox desc="Label" @value="setParam"/>
                            </div>
                        </div>
                    </div>
                </div>
</template>

<script>
export default {
    props:['data'],
    computed:{
        db(){
            return JSON.parse(this.data)
        },

    },
    methods:{
        setVal(val){
            this.$emit('setType',{id:this.db.id,value:val})
        },
        setParam(val){
            this.$emit('setParam',{id:this.db.id,value:val})
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.card{
            width: 250px;
            height: 350px;
            background: #FFFFFF;
            border: 1px solid #DDDDDD;
            box-sizing: border-box;
            border-radius: 10px;
            img{
                width: 100%;
                height: 187px;
                border-radius: 10px 10px 0px 0px;
            }
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
</style>