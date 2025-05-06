document.getElementById('send-button').addEventListener('click', function() {
    const input = document.getElementById('user-input');
    const message = input.value.toLowerCase();

    displayMessage('Você: ' + message);
    getMusicSuggestion(message);

    input.value = '';
});

function getMusicSuggestion(message) {
    const genre = message.match(/fps|aventura|rpg|moba|terror|ação|esporte|puzzle|simulação|sobrevivência|luta|plataforma|dança/);
    
    if (genre) {
        const genreName = genre[0];
        const suggestions = {
            fps : "Valorant",
            aventura : "Minecraft",
            rpg : "League of Legends",
            moba : "DOTA 2",
            terror : "Resident Evil 2",
            ação : "Hollow Knight",
            esporte : "FIFA",
            puzzle : "Among Us",
            simulação : " The Sims",
            sobrevivência: " The Forest",
            luta: "Tekken",
            plataforma: "Mario Bros",
            dança: "Just Dance"
        };
        displayMessage('GamerBOT: ' + suggestions[genreName] + ' é um bom jogo deste genero :)');
    } else {
        displayMessage("GamerBOT: Desculpe, não entendi. Tente mencionar um gênero de jogo como FPS, Aventura, Terror, RPG.");
    }
}

function displayMessage(msg) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = msg;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Auto-scroll
}