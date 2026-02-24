
const apiKey = "AIzaSyCbfAyIJ2YuF_NjJs4ai68sPDVU9v-OQUo";
const channelId = "UCw838b6jU39JdlmAa7pUBUQ";

async function fetchYouTubeData() {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`
  );
  const data = await response.json();
  const stats = data.items[0].statistics;

  document.getElementById("subscribers").innerText = stats.subscriberCount;
  document.getElementById("views").innerText = stats.viewCount;
}

fetchYouTubeData();
setInterval(fetchYouTubeData, 10000);
