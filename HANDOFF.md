# 🚀 Craft3rBr0s Final Handoff

Everything is live! Your site is pulling **live subscriber, view, and video counts** from YouTube and is fully integrated with Sanity CMS and Fourthwall.

### 🌐 Key URLs
- **Live Website**: [https://craft3rbr0s.com](https://craft3rbr0s.com)
  - *Backup*: [https://craft3rbros-site.vercel.app](https://craft3rbros-site.vercel.app)
- **CMS Dashboard (Sanity)**: [https://craft3rbr0s.com/studio](https://craft3rbr0s.com/studio)
- **Merch Store (Fourthwall)**: [https://craft3rbr0s-shop.fourthwall.com](https://craft3rbr0s-shop.fourthwall.com)
- **GitHub Code**: [https://github.com/Jonathansepulveda91/craft3rbros-site](https://github.com/Jonathansepulveda91/craft3rbros-site)

### 🛠️ Important Credentials
- **Sanity Project ID**: `hy16110k`
- **YouTube API Key**: `AIzaSyBfF9pwg7H...KT2qW0` (Active on Vercel)
- **Sanity API Token**: `skZaDXv3t4OdLPb...OkAAliLMc4ig` (Active on Vercel)

---

### 🔒 Who can access the Studio?
**Is it password protected?** Yes. 
Anyone can visit `/studio`, but they will see a **Sanity Login Screen**. Only YOU (with your Sanity account) can log in and change the videos. No one else can edit your site.

---

### 🎬 How to Manage Videos
Your site is now **automated**:
1.  **Grid**: It automatically pulls your **9 most popular videos** from your YouTube channel by view count. You don't have to do anything!
2.  **Hero/Featured**: If you want to *force* a specific video to the top of the site, go to the **Sanity Studio** → **Featured Videos** → **Create New** → Paste the YouTube ID and toggle **"Is this a featured video?"**. This will override the automatic pick.

---

### 🛒 How to Manage Merch
1.  **Auto-Sync**: Your site now fetches real products from your Fourthwall shop automatically.
2.  **Updating**: Any time you add a new product to Fourthwall, it will appear on your main site within an hour (caching) or immediately after a redeploy.

---

### 🎨 Social Media & SEO
When you share your site link, it shows a **Premium Preview Image**.
- **How to change it**: Replace the file `public/og-image.png` with a new image (recommended size: 1200x630 pixels).
- **Update metadata**: If you want to change the text people see on social media, edit the `metadata` object in `/app/layout.tsx`.

---

Enjoy your new brand hub! 🎮🔥

