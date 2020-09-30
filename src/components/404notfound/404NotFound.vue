<template>
  <div class="notfound">
      <!-- 喔哦~~~！ -->
    <h3>页面找不到</h3>
    <p>您将在{{ times }}秒后,回到首页</p>
  </div>
</template>

<script>
export default {
    data(){
        return {
            times: 3,
            timerId: null,
        }
    },
    created(){
        this.timerId=setInterval(()=>{
            if(this.times<=1){
                clearInterval(this.timerId)
                this.$router.push('/')
                return
            }
            this.times--
        },1000)
    }
}
</script>
<style scoped>
 .notfound{
     width: 100%;
     height: 100%;
     text-align: center;
     margin-top: 200px;
 }
</style>


