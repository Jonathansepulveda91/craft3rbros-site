const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const API_KEY = process.env.YOUTUBE_API_KEY;
const IDs = ['QY687WX0kkc', 'LN2Q1ATXk_k'];

async function test() {
  const url = `${BASE_URL}/videos?part=snippet,contentDetails&id=${IDs.join(',')}&key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  
  data.items.forEach(item => {
    const duration = item.contentDetails.duration;
    const title = item.snippet.title;
    const isShort = !duration.includes('M') && !duration.includes('H');
    console.log(`Title: ${title} | Duration: ${duration} | isShort: ${isShort}`);
  });
}

test();
