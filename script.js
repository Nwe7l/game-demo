const storyText = document.getElementById('story-text');
const userInput = document.getElementById('user-input');

const beginnings = [
  "The city was asleep, but the green lights under the sewer flickered with life...",
  "She woke up in a cold room, a glowing symbol pulsing on the ceiling...",
  "Through the fog, a neon tower blinked silently, calling her name..."
];

let currentStory = "";

// Pick a random beginning
function getRandomBeginning() {
  return beginnings[Math.floor(Math.random() * beginnings.length)];
}

// Typing effect
function typeText(text, callback) {
  let index = 0;
  const interval = setInterval(() => {
    storyText.textContent += text[index];
    index++;
    if (index === text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 30);
}

// OpenAI call
async function getContinuation(prompt) {
  const apiKey = "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";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a storyteller continuing a neon cyberpunk story. Respond with 1-2 short sentences only." },
        { role: "user", content: prompt }
      ],
      temperature: 0.9
    })
  });

  const data = await response.json();
  const message = data.choices?.[0]?.message?.content || "[No response from AI]";
  return message.trim();
}

// Handle user input
userInput.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter' && userInput.value.trim() !== "") {
    const userLine = userInput.value.trim();
    currentStory += "\n" + userLine;
    storyText.textContent += "\n" + userLine + "\n";
    userInput.value = "";

    const aiText = await getContinuation(currentStory);
    typeText(aiText + "\n");
    currentStory += "\n" + aiText;
  }
});

// Start with a random beginning
const beginning = getRandomBeginning();
currentStory = beginning;
typeText(beginning);
