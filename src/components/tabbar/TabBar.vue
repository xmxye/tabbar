<template>
  <div id="tab-bar">   
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar',
  components:{
    
  }
}
</script>

<style>
#tab-bar{
  display: flex;
  justify-content: space-around;
  height: 49px;
  background-color: rgba(0, 0, 0, .03);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -2px 2px rgba(0, 0, 0, .03); 
}

</style>