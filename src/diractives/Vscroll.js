export default {
  mounted(el) {
    const scrollToBottom = (mutations) => {
      if (!mutations) return;
      el.scrollTop = el.scrollHeight;
    };

    scrollToBottom();
    const observer = new MutationObserver(scrollToBottom);
    observer.observe(el, { childList: true });

    el.scrollToBottom = scrollToBottom;
  },
  updated(el) {
    el.scrollToBottom();
  },
  name: "scroll-down",
};
