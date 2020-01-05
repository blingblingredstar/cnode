<template>
  <div class="PostList">
    <div class="loading" v-show="isLoading">
      <img src="../assets/loading.gif" alt="loading" />
    </div>
    <article class="posts" v-show="!isLoading">
      <ul>
        <li>
          <div class="topbar">
            <span>全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </div>
        </li>
        <li v-for="topic in topics" :key="topic.id">
          <!-- 头像 -->
          <img :src="topic.author.avatar_url" alt="avatar" />
          <span>
            <!-- 回复/浏览 -->
            <span class="reply_count">{{ topic.reply_count }}</span>
            / {{ topic.visit_count }}
          </span>
          <!-- 分类 -->
          <span
            :class="[
              {
                put_good: topic.good === true,
                put_top: topic.top === true,
                'topiclist-tab': topic.good !== true && topic.top !== true
              }
            ]"
          >
            <span>{{ topic | formatTab }}</span>
          </span>

          <!-- 标题 -->
          <router-link
            :to="{
              name: 'post_content',
              params: {
                id: topic.id,
                name: topic.author.loginname
              }
            }"
          >
            <span>{{ topic.title }}</span>
          </router-link>

          <!-- 回复时间 -->
          <span class="last_reply">{{ topic.last_reply_at | formatDate }}</span>
        </li>

        <!-- 分页组件 -->
        <li>
          <Pagination @update:page="renderList" key="pagination" />
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import axios from "axios";
import Pagination from "./Pagination.vue";

export default {
  name: "PostList",
  data() {
    return {
      isLoading: false,
      topics: [],
      currentPage: 1
    };
  },
  components: {
    Pagination
  },
  methods: {
    getTopics() {
      this.isLoading = true;
      axios
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.currentPage,
            limit: 20
          }
        })
        .then(res => {
          this.isLoading = false;
          this.topics = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    renderList(page) {
      this.currentPage = page;
      this.getTopics();
    }
  },
  beforeMount() {
    this.getTopics();
  }
};
</script>

<style scoped lang="scss">
.PostList {
  background-color: #e1e1e1;
}
.posts {
  margin-top: 10px;
}

.PostList img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
}

ul {
  list-style: none;
  width: 100%;
  max-width: 1344px;
  margin: 0 auto;
}

ul li:not(:first-child) {
  padding: 9px;
  font-size: 15px;
  font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma,
    "Hiragino Sans GB", STHeiti, sans-serif !important;
  font-weight: 400;
  background-color: white;
  color: #333;
  border-top: 1px solid #f0f0f0;
}

li:not(:first-child):hover {
  background: #f5f5f5;
}

li:last-child:hover {
  background: white;
}

li span {
  line-height: 30px;
}

.allcount {
  width: 70px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
}

.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.topbar {
  height: 40px;
  background-color: #f5f5f5;
}

.topbar span {
  font-size: 14px;
  color: #80bd01;
  line-height: 40px;
  margin: 0 10px;
  cursor: pointer;
}

.topbar span:hover {
  color: #9e78c0;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.loading {
  text-align: center;
  padding-top: 300px;
}
</style>
