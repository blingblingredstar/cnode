<template>
  <div class="authorinfo">
    <div class="authorsummary">
      <div class="topbar">作者</div>
      <router-link
        :to="{
          name: 'user_info',
          params: {
            name: userInfo.loginname
          }
        }"
      >
        <img :src="userInfo.avatar_url" alt="avatar" />
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">最近主题</div>
      <ul>
        <li v-for="topic in topicsLimitedBy5" :key="topic.id">
          <router-link
            :to="{
              name: 'post_content',
              params: {
                id: topic.id,
                name: topic.author.loginname
              }
            }"
          >{{ topic.title }}</router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">最近回复</div>
      <ul>
        <li v-for="reply in repliesLimitedBy5" :key="reply.id">
          <router-link
            :to="{
              name: 'post_content',
              params: {
                id: reply.id,
                name: reply.author.loginname
              }
            }"
          >{{ reply.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SideBar",
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {
    topicsLimitedBy5() {
      const topics = this.userInfo.recent_topics;
      if (!topics) return [];
      return topics.length > 5 ? topics.slice(0, 5) : topics;
    },
    repliesLimitedBy5() {
      const replies = this.userInfo.recent_replies;
      if (!replies) return [];
      return replies.length > 5 ? replies.slice(0, 5) : replies;
    }
  },
  beforeMount() {
    this.getUserInfo();
  },
  methods: {
    getUserInfo() {
      axios
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          if (res.data.success !== true) {
            throw new Error("get user info failure");
          }
          this.userInfo = res.data.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.authorsummary,
.recent_replies,
.recent_topics {
  background-color: #fff;
}
.authorinfo {
  width: 328px;
  float: right;
  margin-top: 0;
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authorsummary .topbar {
  margin-top: 0px;
}
</style>
