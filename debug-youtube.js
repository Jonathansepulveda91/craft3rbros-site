const API_KEY = 'AIzaSyBfF9pwg7HfwrJN3tWq10l5dO-T0KT2qW0';
const CHANNEL_HANDLE = '@Craft3rBr0s';

async function debugYouTube() {
  console.log('Testing YouTube API for handle:', CHANNEL_HANDLE);
  
  // 1. Try to find the channel ID by handle
  const handleUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=${CHANNEL_HANDLE}&key=${API_KEY}`;
  
  try {
    const res = await fetch(handleUrl);
    const data = await res.json();
    
    if (!res.ok) {
      console.error('YouTube API error (Handle):', res.status, data.error);
      return;
    }
    
    if (data.items && data.items.length > 0) {
      const channel = data.items[0];
      console.log('--- Channel Found ---');
      console.log('Title:', channel.snippet.title);
      console.log('ID:', channel.id);
      console.log('Subscribers:', channel.statistics.subscriberCount);
      console.log('Views:', channel.statistics.viewCount);
      console.log('Videos:', channel.statistics.videoCount);
    } else {
      console.log('No channel found for handle:', CHANNEL_HANDLE);
      console.log('Full response:', JSON.stringify(data, null, 2));
      
      // Fallback test: Try searching for the channel if forHandle failed
      console.log('\nTrying fallback search...');
      const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&q=${encodeURIComponent(CHANNEL_HANDLE)}&key=${API_KEY}`;
      const searchRes = await fetch(searchUrl);
      const searchData = await searchRes.json();
      console.log('Search metadata:', searchData.pageInfo);
      if (searchData.items && searchData.items.length > 0) {
        console.log('Top search result:', searchData.items[0].snippet.title, 'ID:', searchData.items[0].id.channelId);
      }
    }
  } catch (err) {
    console.error('Fetch failed:', err);
  }
}

debugYouTube();
