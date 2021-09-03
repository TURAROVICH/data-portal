<template>
  <div class="main">
    <div class="filter">
                <div class="dropdown">
                    <button @click="down" class="dropbtn">
                      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 0.292893C4.68342 -0.0976311 5.31658 -0.0976311 5.70711 0.292893L9.70711 4.29289C10.0976 4.68342 10.0976 5.31658 9.70711 5.70711C9.31658 6.09763 8.68342 6.09763 8.29289 5.70711L6 3.41421V15C6 15.5523 5.55228 16 5 16C4.44772 16 4 15.5523 4 15V3.41421L1.70711 5.70711C1.31658 6.09763 0.683417 6.09763 0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289L4.29289 0.292893ZM14 12.5858V1C14 0.447715 14.4477 1.49012e-08 15 1.49012e-08C15.5523 1.49012e-08 16 0.447715 16 1V12.5858L18.2929 10.2929C18.6834 9.90237 19.3166 9.90237 19.7071 10.2929C20.0976 10.6834 20.0976 11.3166 19.7071 11.7071L15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16C14.7348 16 14.4804 15.8946 14.2929 15.7071L10.2929 11.7071C9.90237 11.3166 9.90237 10.6834 10.2929 10.2929C10.6834 9.90237 11.3166 9.90237 11.7071 10.2929L14 12.5858Z" fill="#69B7FF"/>
                      </svg>
                      <span>
                      Filter
                      </span>
                      <svg width="10" class="right" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0L5 6L0 0H10Z" fill="#69B7FF"/>
                      </svg>

                    </button>
                    <div v-if="filter" id="myDropdown" class="dropdown-content show">
                      <a @click="active=1" href="#" :class="{'active-filter':active==1}">Sort by Product Type</a>
                      <a @click="active=2" href="#" :class="{'active-filter':active==2}"><span>Sort Alphabetically</span>
                      <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.41286 0.587138C5.18484 0.359121 4.81516 0.359121 4.58714 0.587138L0.871386 4.30289C0.643369 4.53091 0.643369 4.9006 0.871386 5.12861C1.0994 5.35663 1.46909 5.35663 1.69711 5.12861L5 1.82572L8.30289 5.12861C8.53091 5.35663 8.9006 5.35663 9.12861 5.12861C9.35663 4.9006 9.35663 4.53091 9.12861 4.30289L5.41286 0.587138ZM5.58387 11L5.58387 1L4.41613 1L4.41613 11L5.58387 11Z" :fill="fill"/>
                      </svg>
                      </a>
                      <a @click="active=3" href="#" :class="{'active-filter':active==3}">
                        <span>Sort by Date</span>
                          <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4.58714 10.4129C4.81516 10.6409 5.18484 10.6409 5.41286 10.4129L9.12861 6.69711C9.35663 6.46909 9.35663 6.0994 9.12861 5.87139C8.9006 5.64337 8.53091 5.64337 8.30289 5.87139L5 9.17428L1.69711 5.87139C1.46909 5.64337 1.0994 5.64337 0.871386 5.87139C0.643369 6.0994 0.643369 6.46909 0.871386 6.69711L4.58714 10.4129ZM4.41613 2.5522e-08L4.41613 10L5.58387 10L5.58387 -2.5522e-08L4.41613 2.5522e-08Z" :fill="fill1"/>
                          </svg>
                        </a>
                    </div>
            </div>

            <div class="ignore">
              <input type="checkbox" id="cb1"> <label for="cb1">Ignore “The”</label>
            </div>
        </div>

        <div class="cards">
          <card v-for="i of 10" :key="i" @open="mod=true" />
        </div>

        <Modal v-if="mod" @close="mod=false" />

    
  </div>
</template>


<script>
import Card from '../components/main-page/card.vue'
import Modal from '../components/main-page/modal.vue'

export default {
  data:()=>({
    active:0,
    filter:false,
    mod:false
  }),
  computed:{
    fill(){
      return this.active==2 ? 'white' : 'black'
    },
     fill1(){
      return this.active==3 ? 'white' : 'black'
    }
  },
  methods:{
      down() {
      this.filter = !this.filter
      }
  },
  mounted(){
                window.onclick = (event) => {
             if (!event.target.matches('.dropbtn') && this.filter == true) {
                this.filter = false
              }
            }
  },
 
  components:{
    Card,
    Modal
  }
}
</script>


<style lang="scss" scoped>
@import '@/assets/styles/main.scss';
.main{
  width: 80%;
  padding: 40px 0 0 0;
  margin: 0 auto;
}

.cards{
  margin-top: 17px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter{
  display: flex;
  align-items: center;
  gap: 31px;
  .ignore{
    @include h5;
  }
/* Dropdown Button */
.dropbtn {
  border: none;
  cursor: pointer;
  width: 257px;
  height: 26px;
  background: #FFFFFF;
  border: 1px solid #69B7FF;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;
  padding: 5px 8px;
  @include h5;
  font-size: 12px;;
  .right{
    margin-left: 70%;
  }
}


/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  width: 100%;
  svg{
    top: 15px;
    right: 20px;
    position: absolute;
  }
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}
.active-filter{
  background: $blue;
  color: $white;
}
}
</style>