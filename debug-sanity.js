const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: 'hy16110k',
  dataset: 'production',
  token: 'skZaDXv3t4OdLPbJ0CqOaB0MuCCFVKop7A3RnHlSLFj0sYtSlanmmAbYfhvZ4Ffsq6jXFFD0FONl7iUWN06ueOdQ4mODRSkfdW9qBdjNgiEhaBMsTAEe48soNig1T7oawZ0ejX8GC4L0S38CjZOp650wn1dPqiDLuTrOOkUWOkAAliLMc4ig',
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function test() {
  console.log('Testing Sanity connection...');
  try {
    const result = await client.fetch('*[_type == "featuredVideo"]');
    console.log('Connection successful! Found videos:', result.length);
  } catch (err) {
    console.error('Connection failed!');
    console.error('Status:', err.statusCode);
    console.error('Response body:', err.response?.body);
    console.error('Full error:', err.message);
  }
}

test();
