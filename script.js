function sendSettings() {
    const settings = {
      decks: parseInt(document.getElementById("deck-count").value),
    };
  
    fetch("/set_settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
  }
  
  sendSettings();

