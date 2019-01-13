<template>
  <div class="shoplist-container">
    <ul class="shop-list">
      <li class="shop-list-item">
        <img src="@/common/img/shop_list/shop_item.png" alt width="100%">
        <h4 class="list-item-title">非特斯甩脂机抖抖机燃脂瘦身腰带减肥震动健身仪器材瘦腿肚子神器</h4>
        <div class="list-item-bottom">
          <span class="item-price">¥26.9</span>
          <span class="item-counter">已拼3545件</span>
          <span class="item-user">
            <img src="@/common/img/shop_list/user1.jpg" alt>
            <img src="@/common/img/shop_list/user2.jpg" alt>
          </span>
          <div class="item-buy">
            <button class>去拼单 ></button>
          </div>
        </div>
      </li>
      <li class="shop-list-item">
        <img src="@/common/img/shop_list/shop_item.png" alt width="100%">
        <h4 class="list-item-title">非特斯甩脂机抖抖机燃脂瘦身腰带减肥震动健身仪器材瘦腿肚子神器</h4>
        <div class="list-item-bottom">
          <span class="item-price">¥26.9</span>
          <span class="item-counter">已拼3545件</span>
          <span class="item-user">
            <img src="@/common/img/shop_list/user1.jpg" alt>
            <img src="@/common/img/shop_list/user2.jpg" alt>
          </span>
          <div class="item-buy">
            <button class>去拼单 ></button>
          </div>
        </div>
      </li>
      <li class="shop-list-item">
        <img src="@/common/img/shop_list/shop_item.png" alt width="100%">
        <h4 class="list-item-title">非特斯甩脂机抖抖机燃脂瘦身腰带减肥震动健身仪器材瘦腿肚子神器</h4>
        <div class="list-item-bottom">
          <span class="item-price">¥26.9</span>
          <span class="item-counter">已拼3545件</span>
          <span class="item-user">
            <img src="@/common/img/shop_list/user1.jpg" alt>
            <img src="@/common/img/shop_list/user2.jpg" alt>
          </span>
          <div class="item-buy">
            <button class>去拼单 ></button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "shoplist"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shoplist-container {
  margin-bottom: 50px;
  background-color: #f5f5f5;
}
.shop-list-item {
  margin-bottom: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}

.list-item-title {
  line-height: 22px;
  width: 94%;
  margin-left: 3%;
  height: 44px;
  overflow: hidden;
}
.list-item-bottom {
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.item-price {
  font-size: 18px;
  text-align: center;
  font-weight: bold;
  color: red;
  flex: 1;
}

.item-counter {
  flex: 2;
  font-size: 12px;
  color: #cccccc;
}

.item-user {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.item-user img {
  width: 40px;
  border-radius: 50%;
}

.item-user img:nth-child(2) {
  margin-left: -10px;
}

.item-buy{
  flex: 2;
}

.item-buy button{
  height: 34px;
  width: 80%;
  border: none;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  background-color:red;
  border-radius: 8px;
}
</style>
