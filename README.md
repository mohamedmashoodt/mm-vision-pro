# 🎬 MM Vision Pro - AI-Powered Content Creator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Open Source](https://img.shields.io/badge/open-source-blue)](https://github.com)
[![Free Forever](https://img.shields.io/badge/Free-Forever-brightgreen)]()

**Free, open-source, AI-powered multimodal content creator** using Gemini Vision + Groq LLaMA.

Create Instagram captions, blog posts, YouTube descriptions, and email content from photos - instantly!

## ✨ Features

- 📸 **Image Analysis** - Gemini Vision analyzes your photos in detail
- 🤖 **AI Content Generation** - Groq generates platform-specific content
- 📱 **Mobile-First** - Works perfectly on iPhone, iPad, and Android
- 🌐 **Web-Based** - No installation needed, just open in browser
- 💾 **Offline Capable** - Progressive Web App (PWA) support
- 🎨 **4 Output Formats** - Instagram, Blog, YouTube, Email
- 🔒 **Private** - All data processed locally, API keys stored securely
- 💰 **100% Free** - Uses free API tiers

## 🚀 Quick Start

### Option 1: Online (No Setup)
```
1. Open: https://mohamedmashood.github.io/mm-vision-pro/
2. Get free API keys:
   - Gemini: https://makersuite.google.com/app/apikey
   - Groq: https://console.groq.com/keys
3. Paste keys
4. Select photo
5. Generate content!
```

### Option 2: Install as App
```
1. Open in Safari/Chrome
2. Tap "Add to Home Screen"
3. Opens like native app
4. Works offline!
```

### Option 3: Download & Run Locally
```
git clone https://github.com/mohamedmashood/mm-vision-pro.git
cd mm-vision-pro
python -m http.server 8000
# Open http://localhost:8000
```

## 📋 Requirements

- **Gemini API Key** (Free) - https://makersuite.google.com/app/apikey
- **Groq API Key** (Free) - https://console.groq.com/keys
- Modern browser (Chrome, Safari, Firefox, Edge)

## 💻 Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **APIs**: Gemini 1.5 Vision, Groq Mixtral-8x7b
- **Storage**: LocalStorage (client-side only)
- **PWA**: Service Worker, Web App Manifest

## 📁 File Structure

```
mm-vision-pro/
├── index.html           # Main application
├── manifest.json        # PWA manifest
├── sw.js               # Service worker
├── README.md           # This file
├── LICENSE             # MIT License
└── docs/               # Documentation
    ├── SETUP.md        # Setup guide
    ├── USAGE.md        # Usage guide
    └── API.md          # API documentation
```

## 🎯 How It Works

### Flow Diagram

```
iPhone/PC Photo
     ↓
[Gemini Vision Analysis]
  ├─ Scene description
  ├─ Mood & tone
  ├─ Composition
  └─ Objects & colors
     ↓
[Groq Content Generation]
  ├─ Instagram caption
  ├─ Blog article
  ├─ YouTube metadata
  └─ Email template
     ↓
Copy/Share Ready Content
```

### Processing Timeline

```
Per Photo:
├─ Gemini Analysis: 3-5 seconds
├─ Groq Generation: 5-10 seconds
└─ Total: ~10 seconds per photo
```

## 🎬 Use Cases

### 📸 Photography
- Generate captions for every photo instantly
- Create portfolio blog posts automatically
- YouTube video descriptions in seconds

### 🛍️ E-Commerce
- Product descriptions from photos
- Amazon/eBay listing content
- Social media product posts

### 📱 Social Media
- Instagram captions + hashtags
- LinkedIn posts
- Twitter threads
- TikTok descriptions

### 📝 Blogging
- Full blog articles from images
- SEO-optimized titles
- Meta descriptions
- Internal link suggestions

### 📧 Email Marketing
- Newsletter templates
- Email campaign copy
- Promotional emails

## 📊 API Limits (Free Tier)

| API | Monthly Limit | Cost |
|-----|---------------|------|
| Gemini Vision | ~12,000 requests | FREE |
| Groq Mixtral | Unlimited | FREE |
| **Total** | ~12,000 photos/month | **FREE** |

## 🔒 Privacy & Security

- ✅ No user data stored on servers
- ✅ API keys saved locally only
- ✅ No tracking, no analytics
- ✅ No ads
- ✅ Open source (audit-able code)
- ✅ HTTPS only

## 🛠️ Installation

### From GitHub Pages (Recommended)

```
https://mohamedmashood.github.io/mm-vision-pro/
```

### Self-Hosted

```bash
# Clone repository
git clone https://github.com/mohamedmashood/mm-vision-pro.git

# Navigate to directory
cd mm-vision-pro

# Serve locally
python -m http.server 8000

# Open http://localhost:8000
```

### Docker

```bash
docker run -p 8000:8000 -v $(pwd):/app \
  python:3.9 python -m http.server -d /app 8000
```

## 📖 Documentation

- [Setup Guide](./docs/SETUP.md) - Detailed setup instructions
- [Usage Guide](./docs/USAGE.md) - How to use the app
- [API Reference](./docs/API.md) - API documentation
- [FAQ](./docs/FAQ.md) - Frequently asked questions

## 🎨 Screenshots

### Desktop View
```
[Image of desktop interface]
```

### Mobile View
```
[Image of mobile interface]
```

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Gemini API** by Google for vision analysis
- **Groq** for lightning-fast LLM inference
- **Open Source Community** for inspiration

## 📞 Support

- 📧 Email: mohamedmashoodt@gmail.com
- 🐛 [Report Bug](https://github.com/mohamedmashood/mm-vision-pro/issues)
- 💡 [Request Feature](https://github.com/mohamedmashood/mm-vision-pro/issues)
- 💬 [Discussions](https://github.com/mohamedmashood/mm-vision-pro/discussions)

## 🚀 Roadmap

### Version 1.0 ✅
- [x] Image analysis with Gemini Vision
- [x] Content generation with Groq
- [x] Instagram format
- [x] Blog format
- [x] YouTube format
- [x] Email format
- [x] PWA support

### Version 1.1 (Planned)
- [ ] Batch processing
- [ ] Custom prompt templates
- [ ] Multiple language support
- [ ] Offline content generation
- [ ] Export to various formats
- [ ] Analytics dashboard

### Version 2.0 (Planned)
- [ ] Video content support
- [ ] Audio content support
- [ ] AI image generation
- [ ] Content scheduling
- [ ] Social media publishing
- [ ] Team collaboration

## 📈 Stats

- ⭐ Free forever
- 🌍 No server dependencies
- 🔓 100% open source
- 🚀 Single file deployment
- 📱 Mobile first design
- ⚡ Fast (< 1s load time)

## 🎯 Goal

Make professional content creation **free and accessible to everyone**.

No credit cards. No limits. No catches.

Just upload a photo and get ready-to-publish content in seconds.

---

**Made with ❤️ by [Mohamed Mashood](https://github.com/mohamedmashood)**

_Last Updated: 2024_
