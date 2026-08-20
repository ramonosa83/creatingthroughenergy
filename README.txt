CREATING THROUGH ENERGY · WEBSITE
www.creatingthroughenergy.com

WHAT'S IN THIS FOLDER
---------------------
index.html    The site (one page)
privacy.html  Privacy Policy (linked in the footer)
terms.html    Terms of Use (linked in the footer)
styles.css    Design system
script.js     Animations, navbar, email form
ramon.png     Your photo (circular, transparent background, already included)

The site is plain HTML, CSS, and JavaScript. No build step, no install.
Open index.html in any browser to preview it.

DEPLOY: OPTION A · GO HIGH LEVEL (one platform for everything)
--------------------------------------------------------------
GHL hosts pages through its own builder, so the cleanest GHL-native route:
1. In GHL: Sites > Websites > New Website, and recreate the page with the
   copy from index.html (or use a Custom Code / HTML element and paste the
   body sections in).
2. In GHL: Settings > Domains > Add Domain > www.creatingthroughenergy.com.
3. GHL shows you DNS records. At your domain registrar (wherever you bought
   creatingthroughenergy.com), add them:
   - CNAME for "www" pointing to the target GHL gives you
   - A record (or forwarding) for the bare domain, per GHL's instructions
4. Wait for DNS to propagate (minutes to a few hours), then set the page
   as the site's homepage.

DEPLOY: OPTION B · NETLIFY (fastest, free, uses these exact files)
------------------------------------------------------------------
1. Go to https://app.netlify.com/drop
2. Drag this entire folder onto the drop zone. Live in about 10 seconds.
3. Site settings > Domain management > Add custom domain >
   www.creatingthroughenergy.com
4. At your registrar, add the DNS records Netlify shows you:
   - CNAME  www  ->  [your-site].netlify.app
   - A      @    ->  75.2.60.5   (Netlify's load balancer)
5. Netlify provisions free HTTPS automatically once DNS resolves.

GHL only needs your domain to resolve to a real business website. Netlify
hosting the site satisfies that fully.

CONNECT THE EMAIL FORM TO GO HIGH LEVEL
---------------------------------------
The form currently shows a thank-you message without sending data anywhere.
The page promises the Five-Minute Reset as the opt-in gift. When you're
ready:
1. In GHL, build a simple form (email field + consent checkbox).
2. Attach an automation that delivers the Five-Minute Reset by email,
   with a P.S. inviting them into the free WhatsApp community.
3. Copy the form's embed code (an iframe or script snippet).
4. In index.html, find the section with id="connect" and replace the
   <form id="connect-form"> ... </form> block with the GHL embed code.

SWAPPING YOUR PHOTO
-------------------
Your headshot ships as ramon.png (a circular crop with a transparent
background). To swap it later, replace ramon.png with any square or
circular image, at least 700px wide; a higher-resolution original will
look sharper. If the file is missing, a styled monogram shows instead,
so nothing ever looks broken.

CHANGING THE CONTACT EMAIL
--------------------------
The footer and legal pages currently use ramonosa83@gmail.com. To change
it, search for that address in index.html, privacy.html, and terms.html
and replace it with your business address.

VERSION
-------
v1.0 · Built August 2026
