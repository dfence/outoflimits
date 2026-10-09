# 🌐 Out Of Limits Customer Website

Beautiful, responsive customer-facing website for Out Of Limits booking and activity management system.

## Features

- ✨ Modern, responsive design (mobile-first)
- 📱 Fully mobile optimized
- 🎯 Easy activity discovery
- 📅 Online booking system
- 🗺️ Location information
- 💬 Contact form
- ⚡ Fast, lightweight (vanilla HTML/CSS/JS)

## Structure

```
├── index.html        # Homepage with activities showcase
├── booking.html      # Online booking form
├── styles.css        # Global styling
├── script.js         # Shared JavaScript functionality
├── Dockerfile        # Nginx container configuration
├── nginx/
│   └── default.conf  # Nginx reverse proxy config
```

## Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Server**: Nginx (lightweight, fast)
- **Build**: Docker container
- **API Integration**: RESTful API to FastAPI backend
- **Icons**: Font Awesome 6.4

## Setup

### Development (Local)

```bash
# Simply open index.html in a browser
# Or use a local server:
python -m http.server 8000
# Visit http://localhost:8000
```

### Docker

```bash
# Build container
docker build -t outdoor-website .

# Run container
docker run -p 80:80 outdoor-website
```

### Docker Compose (Recommended)

```bash
cd ..
docker-compose up -d website
# Visit http://localhost:20080
```

## Pages

### 1. **Homepage (index.html)**

Landing page featuring:
- Hero banner with CTA
- Feature highlights (flexibility, locations, team, etc.)
- Activities showcase (first 4 from API)
- Location information (2 indoor/outdoor + mobile)
- Customer testimonials
- Contact section
- Footer with links and social media

### 2. **Booking Form (booking.html)**

Complete reservation system:
- Personal information (name, email, phone)
- Activity selection (dynamic dropdown from API)
- Group size and duration
- Date and time selection
- Location choice
- Special requirements/notes
- Real-time price estimation
- Form validation
- Success/error notifications

## API Integration

The website connects to the FastAPI backend at:

```
Default (dev):  http://localhost:20000
Docker Compose: http://backend:8000 (internal)
```

### Endpoints Used

- `GET /api/packages` - List all activities
- `POST /api/bookings` - Create new booking

## Customization

### Change Colors

Edit `styles.css`:

```css
:root {
  --primary: #ff6b35;      /* Orange - main color */
  --secondary: #004e89;    /* Blue - titles */
  --accent: #f77f00;       /* Darker orange - hover */
  --dark: #1a1a1a;
  --light: #f8f9fa;
}
```

### Add Logo

Replace logo placeholder in `index.html` and `booking.html`:

```html
<!-- Current: -->
<div class="logo-placeholder">
  <i class="fas fa-mountain"></i>
  <span>Out Of Limits</span>
</div>

<!-- Change to: -->
<img src="path/to/logo.png" alt="Out Of Limits" class="logo">
```

Then in CSS:

```css
.logo {
  height: 40px;
  width: auto;
}
```

### Update Contact Information

Edit `index.html` footer section:

```html
<p><a href="tel:+32495677187">0495 67 71 87</a></p>
<p><a href="mailto:info@outoflimits.be">info@outoflimits.be</a></p>
```

### Add Social Media Links

Update social links in footer:

```html
<a href="https://www.facebook.com/outoflimits.be" target="_blank">
  <i class="fab fa-facebook"></i>
</a>
```

## Responsive Design

Website is fully responsive across:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

All breakpoints handled with CSS media queries.

## Performance

- Lightweight: ~50KB HTML/CSS/JS (no frameworks)
- Fast load times
- Optimized images and compression
- Nginx gzip compression
- Browser caching for static assets

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility

- Semantic HTML5 markup
- ARIA labels where needed
- Keyboard navigation
- High contrast colors
- Mobile-friendly touch targets

## Future Enhancements

- [ ] Activity gallery with images
- [ ] Customer reviews/ratings system
- [ ] Real-time availability calendar
- [ ] Payment integration (Stripe/PayPal)
- [ ] Multi-language support (EN/NL/FR)
- [ ] Email notifications
- [ ] Admin dashboard integration
- [ ] Analytics tracking

## Security

- HTTPS recommended for production
- CORS configured on backend
- Form validation (client + server)
- No sensitive data stored locally

## Deployment

### Production Checklist

- [ ] Update all contact information
- [ ] Add company logo
- [ ] Configure SSL certificate
- [ ] Update social media links
- [ ] Change API_BASE_URL to production domain
- [ ] Enable analytics
- [ ] Test all forms
- [ ] Optimize images
- [ ] Add privacy policy and terms
- [ ] Configure backup system
- [ ] Set up monitoring/alerts

### Deploy to Nginx Server

```bash
# Build image
docker build -t outdoor-website:latest .

# Push to registry or copy to server
docker run -p 80:80 outdoor-website:latest
```

### Deploy to Cloud

Using DigitalOcean App Platform:

```yaml
name: outdoor-website
services:
- name: website
  source_dir: customer-website
  build_command: "docker build -t website ."
  http_routes:
  - path: /
    component_name: website
  envs:
  - key: API_BASE_URL
    value: "https://api.outoflimits.be"
```

## Testing

### Manual Testing Checklist

- [ ] All links work
- [ ] Forms validate input
- [ ] API calls complete successfully
- [ ] Mobile menu opens/closes
- [ ] Smooth scrolling works
- [ ] Contact form sends messages
- [ ] Booking form submits bookings
- [ ] Images load correctly
- [ ] Colors are correct
- [ ] Fonts display properly

### Browser Testing

- [ ] Desktop Chrome
- [ ] Desktop Firefox
- [ ] Safari (Mac)
- [ ] iPhone/iPad
- [ ] Android phones

## Support

For issues or feature requests:
- Email: info@outoflimits.be
- Phone: 0495 67 71 87
- Hours: Mon-Fri 9:00-17:00

## License

© 2026 Out Of Limits. All rights reserved.

---

**Questions?** Check the main README.md in the project root.
