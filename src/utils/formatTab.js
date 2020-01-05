export default post => {
  if (post.good == true) {
    return "精华";
  } else if (post.top == true) {
    return "置顶";
  } else if (post.tab == "ask") {
    return "问答";
  } else if (post.tab == "share") {
    return "分享";
  } else {
    return "招聘";
  }
};
