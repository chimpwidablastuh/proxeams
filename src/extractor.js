function extractConversations() {
  const chatItems = document.querySelectorAll('div[id*="chat-list-item"]');

  const seenIds = new Set();

  const conversations = Array.from(chatItems)
    .map((item) => {
      const nameElement = item.querySelector('[dir="auto"]');
      const name = nameElement ? nameElement.textContent.trim() : "Unknown";

      const conversationIdMatch = /chat\-list\-item_(.*)/.exec(item.id);
      const conversationId = conversationIdMatch
        ? conversationIdMatch[1]
        : "Unknown";

      const endpoint = encodeURIComponent(conversationId);

      return {
        name,
        conversation_id: conversationId,
        endpoint,
      };
    })
    .filter((conv) => {
      const timePattern = /^At \d{2}:\d{2}$|^On \d{2}\/\d{2}$/;

      if (timePattern.test(conv.name)) return false;

      if (seenIds.has(conv.conversation_id)) return false;

      seenIds.add(conv.conversation_id);

      return true;
    });

  return conversations;
}

const conversations = extractConversations();

console.log(conversations);
