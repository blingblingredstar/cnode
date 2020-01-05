<template>
  <header class="header">
    <nav>
      <router-link to="/">
        <img src="../assets/cnodejs_light.svg" alt="logo" />
      </router-link>
      <ul>
        <li>
          <router-link to="/">首页</router-link>
        </li>
        <li>
          <a href="#">新手入门</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
        <li>
          <a href="#">登录</a>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.header {
  background: #5a5555;

  nav {
    max-width: 1400px;
    min-width: 960px;
    height: 50px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      img {
        max-width: 120px;
        min-width: 120px;
      }
    }
  }

  ul {
    display: flex;
  }

  li {
    margin-right: 40px;

    a {
      color: #ccc;
      font-size: 14px;
    }
  }
}
</style>
