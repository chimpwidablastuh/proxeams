(function () {
  // Sauvegarde de l'original XMLHttpRequest et fetch
  const originalXhrSend = XMLHttpRequest.prototype.send;
  const originalFetch = window.fetch;

  // Surcharge de XMLHttpRequest
  XMLHttpRequest.prototype.send = function (body) {
    // Afficher une alerte avec le corps de la requête
    if (body) {
      console.log(`XHR Request Body: ${body}`);
    }
    // Appel à la fonction originale
    return originalXhrSend.apply(this, arguments);
  };

  // Surcharge de la fonction fetch
  window.fetch = async function (url, options) {
    if (options && options.body) {
      console.log(`Fetch Request Body: ${options.body}`);
      const object = {};
      options.body.forEach(function (value, key) {
        object[key] = value;
      });
      const json = JSON.stringify(object);
      console.log(`Fetch Request Body JSON: ${json}`);
    }
    // Appel de la fonction fetch originale avec les options non modifiées
    return originalFetch(url, options);
  };
})();
