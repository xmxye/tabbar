<template>
    <div class="tab-bar-item" @click="itemClick()">   
        <div v-if="!isActive">
            <slot name="slot-icon"></slot>        
        </div>   
        <div v-else>
            <slot name="slot-icon-active"></slot>        
        </div>  
        <div :style="activeColorStyle">
            <slot name="slot-text"></slot>
        </div>
    </div>   
</template>
<script>
export default {
    name:'TabBarItem',
    data(){
        return {
            // isActive:true
        }
    },
    props:{
        link:{
            type:String
        },
        activeColor:{
            type:String,
            default:'yellow'
        }
    },
    methods:{
        itemClick(){
            this.$router.replace({
                path:this.link
            })
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.link) !== -1
        },
        activeColorStyle(){
            return this.isActive?{'color':this.activeColor}:{}
        }
    }
}
</script>
<style lang="">
.tab-bar-item{
  text-align: center;
  cursor: pointer;
}
.tab-bar-item img{
  width:24px;
  height:24px;
}
.active-color{
    color:red
}
</style>