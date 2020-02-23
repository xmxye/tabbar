<template>
    <tab-bar>
      <tab-bar-item link="/home" activeColor="blue">
        <img slot="slot-icon" src="@/assets/img/tabbar/home.svg" />
        <img slot="slot-icon-active" src="@/assets/img/tabbar/home-active.svg" />
        <div slot="slot-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="about" activeColor="blue">
        <img slot="slot-icon" src="@/assets/img/tabbar/about.svg" />
        <img slot="slot-icon-active" src="@/assets/img/tabbar/about-active.svg" />
        <div slot="slot-text">关于</div>
      </tab-bar-item>
      <tab-bar-item link="shopping" activeColor="blue">
        <img slot="slot-icon" src="@/assets/img/tabbar/shopping.svg" />
        <img slot="slot-icon-active" src="@/assets/img/tabbar/shopping-active.svg" />
        <div slot="slot-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item link="profile" activeColor="blue">
        <img slot="slot-icon" src="@/assets/img/tabbar/profile.svg" />
        <img slot="slot-icon-active" src="@/assets/img/tabbar/profile-active.svg" />
        <div slot="slot-text">我的</div>
      </tab-bar-item>
    </tab-bar>
</template>
    
<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
    name:'MainTabBar',
    components:{
        TabBar,
        TabBarItem
    }
}
</script>
<style lang="" scoped>
    
</style>