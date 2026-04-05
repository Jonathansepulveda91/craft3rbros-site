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

### ⚠️ Common Fixes
- **Studio CORS error**: If the Studio won't load, ensure both `https://craft3rbr0s.com` AND `https://www.craft3rbr0s.com` are added in [Sanity Manage > API > CORS](https://sanity.io/manage/project/hy16110k/api).
- **SSL error**: This usually resolves itself within 24 hours of setting up a new domain on Vercel.

Enjoy your new brand hub! 🎮🔥
