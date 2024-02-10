export default {
  mounted(el) {
    const state = {
      initialed: false,
      messagesPerPage: 10,
    };

    const scrollToBottom = (mutations) => {
      if (!mutations) return;

      if (!state.initialed) {
        el.scrollTop = el.scrollHeight;
        state.initialed = true;
        return;
      }

      if (state.initialed && mutations.length < state.messagesPerPage) {
        el.scrollTop = el.scrollHeight;
      }
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
