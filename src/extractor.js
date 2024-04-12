function extractConversations() {
  const chatItems = document.querySelectorAll('div[id*="chat-list-item"]');

  const seenIds = new Set(); // Un ensemble pour suivre les conversation_id déjà traités
  const conversations = Array.from(chatItems)
    .map((item) => {
      const nameElement = item.querySelector('[dir="auto"]');
      const name = nameElement ? nameElement.textContent.trim() : "Unknown";

      const conversationIdMatch = /chat\-list\-item_(.*)/.exec(item.id);
      const conversationId = conversationIdMatch
        ? conversationIdMatch[1]
        : "Unknown";

      // Encoder le conversation_id pour le format attendu
      const endpoint =
        encodeURIComponent(conversationId) +
        "_63bcb120-44a8-433f-b1c4-9f4708877389%40unq.gbl.spaces";

      return {
        name,
        conversation_id: conversationId,
        endpoint,
      };
    })
    .filter((conv) => {
      // Vérifier si le name est de type "At hh:mm" ou "On jj/mm" en utilisant une expression régulière
      const timePattern = /^At \d{2}:\d{2}$|^On \d{2}\/\d{2}$/;
      if (timePattern.test(conv.name)) {
        return false; // Exclure de la liste finale
      }

      if (seenIds.has(conv.conversation_id)) {
        return false; // Exclure les doublons
      }

      seenIds.add(conv.conversation_id); // Ajouter l'ID à l'ensemble des vus
      return true; // Inclure dans la liste finale
    });

  return conversations;
}

const conversations = extractConversations();
console.log(conversations);
