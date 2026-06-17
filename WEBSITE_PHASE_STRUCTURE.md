# MJD Home Improvement - Website Structure by Phase

## Project Context

MJD Home Improvement la cong ty home improvement/construction phuc vu khu vuc Melbourne, tap trung vao:

- Pergola
- Verandah
- Patio
- Aluminium fencing
- Sliding gates
- Swing gates
- Manual gates
- Gate automation
- Outdoor living improvements

Muc tieu ban dau la xay dung website chi phi hop ly, chuan SEO, co the chay Google Ads/Facebook Ads, nhan enquiry/quote request/appointment request. Cac tinh nang nang cao nhu projects map, AI chatbot, customer portal va project management se duoc gioi thieu nhu module mo rong trong cac phase tiep theo.

---

## Phase 1 - SEO Landing Website / Lead Generation Website

### Main Goal

Build website chay that cho MJD de:

- Gioi thieu cong ty va dich vu
- Tang do tin cay voi khach quanh Melbourne
- Chay SEO local
- Chay Google Ads/Facebook Ads
- Nhan enquiry, request quote, appointment booking
- Tao nen tang de upsell cac module Phase 2/3

### Target Users

- Homeowners quanh Melbourne muon lam pergola, verandah, patio, fence, gate
- Khach dang can bao gia nhanh
- Khach muon xem cong trinh da lam truoc khi lien he
- Khach den tu Google Search, Google Ads, Facebook fanpage

### Core Pages

#### 1. Home

Purpose: Trang chinh de convert visitor thanh lead.

Sections:

- Hero section voi anh cong trinh that
- Headline tap trung vao local Melbourne
- CTA buttons:
  - Get Free Quote
  - Book Site Inspection
  - Call Now
- Service overview
- Why Choose MJD
- Completed projects/gallery preview
- Work process
- Areas we service
- Testimonials/reviews neu co
- FAQ
- Quote form
- Contact CTA

Suggested H1:

`Pergolas, Verandahs, Patios & Aluminium Gates Built Around Melbourne`

#### 2. Services

Purpose: Tong quan tat ca dich vu.

Services:

- Pergolas
- Verandahs
- Patios
- Aluminium fencing
- Sliding gates
- Swing gates
- Gate automation

Each service card should include:

- Short description
- Key benefits
- Image
- CTA: Learn More / Request Quote

#### 3. Individual Service Pages

Recommended URLs:

- `/services/pergolas`
- `/services/verandahs`
- `/services/patios`
- `/services/aluminium-fencing`
- `/services/sliding-gates`
- `/services/swing-gates`
- `/services/gate-automation`

Each page should include:

- SEO H1
- Service description
- Benefits
- Materials/options
- Common use cases
- Gallery related to service
- Process
- FAQ
- CTA form

Example:

`Custom Pergola Builders in Melbourne`

#### 4. Gallery / Completed Work

Purpose: Show trust va reference cho khach.

Initial low-cost version:

- Grid gallery
- Filter basic theo project type
- Anh truoc/sau neu co
- Caption theo suburb hoac khu vuc chung, khong show dia chi that

Privacy wording:

- `Completed pergola project in Western Melbourne`
- `Outdoor living project around Point Cook`
- `Aluminium gate reference project in Melbourne`

Avoid:

- Exact street address
- House number
- Car plates
- Faces without permission
- Any wording about permit/council approval unless verified

#### 5. Areas We Service

Purpose: Local SEO.

Main area:

- Melbourne

Suggested suburb clusters:

- Western Melbourne
- Northern Melbourne
- South Eastern Melbourne
- Eastern Melbourne

Possible suburb pages later:

- Point Cook
- Werribee
- Tarneit
- Truganina
- Caroline Springs
- Williams Landing
- Hoppers Crossing
- Deer Park
- Sunshine
- Craigieburn
- Epping
- Dandenong
- Berwick

Phase 1 can start with one `Areas We Service` page. Suburb landing pages can be added gradually.

#### 6. About

Purpose: Build trust.

Content:

- Who MJD is
- What the company builds
- Local Melbourne focus
- Workmanship
- Customer-first process
- Photos of team/work if available
- License/insurance/ABN if available and safe to publish

#### 7. Contact

Include:

- Phone
- Email
- Service area
- Facebook fanpage link
- Contact form
- Business hours
- Google Map embed if there is a public business address

#### 8. Request a Quote

Dedicated conversion page.

Form fields:

- Full name
- Phone
- Email
- Suburb/postcode
- Service interested
- Project size if known
- Preferred timeframe
- Budget range optional
- Upload photos optional
- Message
- Consent checkbox

After submit:

- Send email to MJD
- Send auto-reply to customer
- Redirect to thank-you page
- Track conversion for Google Ads

#### 9. Book Appointment / Site Inspection

Phase 1 simple version:

- Form-based appointment request
- Preferred date/time
- Contact details
- Service type

Later upgrade:

- Calendar booking integration
- SMS/email reminders

#### 10. Blog / Guides

Purpose: Long-term SEO.

Initial blog topics:

- Pergola vs Verandah vs Patio: What Is the Difference?
- Do You Need Council Approval for a Pergola in Melbourne?
- Aluminium Fence vs Timber Fence
- Manual vs Automatic Sliding Gates
- How Much Does a Pergola Cost in Melbourne?
- Best Patio Roof Options for Melbourne Homes
- How to Prepare for a Site Inspection

### Phase 1 Forms and Lead Handling

Low-cost setup:

- Website form sends email to MJD
- Backup lead saved to Google Sheet or Airtable
- Auto-reply email to customer
- Basic spam protection with Cloudflare Turnstile or reCAPTCHA

Lead statuses can be managed manually:

- New
- Contacted
- Site Visit Booked
- Quote Sent
- Won
- Lost

### Phase 1 SEO Requirements

Technical SEO:

- Mobile responsive
- Fast loading
- Clean URL structure
- Page title and meta description per page
- Sitemap.xml
- Robots.txt
- Canonical URLs
- Open Graph tags for Facebook sharing
- Image alt text
- Compressed WebP images
- Google Analytics 4
- Google Search Console
- Google Ads conversion tracking
- Facebook Pixel optional

Structured data:

- LocalBusiness
- Service
- FAQPage
- BreadcrumbList

Local SEO:

- Google Business Profile optimization
- Consistent NAP: name, address/service area, phone
- Link website and Facebook fanpage
- Encourage customer reviews
- Add real project photos regularly

### Phase 1 Tech Stack Recommendation

Low-cost but scalable:

- Next.js or Astro
- Static/server-rendered pages for SEO
- Tailwind CSS
- Form submission via Resend, Formspree, Netlify Forms, or custom serverless function
- Google Sheet/Airtable as temporary lead storage
- Vercel or Netlify hosting

No database required in Phase 1 unless needed.

---

## Phase 2 - Sales Demo Modules / Upsell Prototype

### Main Goal

Build interactive demo modules de MJD thay duoc tiem nang nang cap, nhung chua can build full production backend.

This phase is mainly for sales demonstration:

- Show future value
- Help client visualize long-term system
- Keep initial project cost low
- Create clear upsell pathway

### Module 1 - Projects Map Demo

Purpose:

- Khoe cac cong trinh da lam quanh Melbourne
- Lam reference cho khach hang
- Tao niem tin rang MJD da lam nhieu project gan khu vuc cua khach

Important privacy principle:

- Do not show exact address
- Use suburb-level location
- Use approximate/offset coordinates
- Hide house number, street number, car plates, faces
- Avoid permit-sensitive details unless approved

Features:

- Melbourne map
- Project markers
- Marker clustering
- Popup preview
- Filter by project type
- Filter by area/suburb
- Filter by size/style
- Project image preview
- CTA: Request Similar Quote

Marker popup content:

- Project title
- General suburb/area
- Project type
- Size
- Structure style
- Completion year
- Featured image
- View Project button

Example popup:

`Pergola Project - Point Cook Area`

Details:

- Type: Pergola
- Size: 6.2m x 3.5m
- Roof: Insulated panel
- Area: Western Melbourne
- CTA: Request Similar Quote

Recommended map tech:

- Mapbox for cost control and design flexibility
- Google Maps if client specifically wants Google ecosystem

Demo data can be static JSON:

```json
[
  {
    "title": "Pergola Project - Point Cook Area",
    "suburb": "Point Cook",
    "region": "Western Melbourne",
    "lat": -37.914,
    "lng": 144.752,
    "projectType": "Pergola",
    "size": "6.2m x 3.5m",
    "style": "Attached insulated roof",
    "completionYear": 2025,
    "images": ["/images/projects/point-cook-pergola-1.webp"]
  }
]
```

### Module 2 - Project Detail Demo

Purpose:

- Show each completed project as a sales/reference page
- Help customer imagine similar work
- Support SEO later

Suggested URL:

`/projects/pergola-point-cook-demo`

Content:

- Gallery with multiple angles
- Project type
- General area/suburb
- Size
- Materials
- Structure style
- Timeline
- Challenge/solution
- CTA: Request Similar Quote

SEO benefit later:

- Each project can rank for local long-tail searches
- Example: `pergola builder Point Cook`

### Module 3 - Mini Lead Dashboard Demo

Purpose:

- Show how MJD can manage enquiries later
- Not required for Phase 1 production

Demo columns:

- New Enquiry
- Contacted
- Site Visit Booked
- Quote Sent
- Won
- Lost

Lead card fields:

- Customer name
- Phone/email
- Suburb
- Service type
- Preferred date
- Notes

No real authentication required for demo if shown privately.

### Module 4 - Customer Portal Demo

Purpose:

- Show future customer experience after contract is signed

Demo customer view:

- Project overview
- Contract uploaded
- Quote uploaded
- Deposit status
- Payment stages
- Installation schedule
- Progress photos
- Final payment status

Payment stages:

- Quote
- Deposit
- Progress payment
- Final payment

### Module 5 - AI Chatbot Placeholder

Purpose:

- Show future AI customer support concept without paying for full AI integration yet

Demo version:

- Floating chat button
- Scripted Q&A
- Collects:
  - Suburb
  - Service type
  - Approx size
  - Phone/email
- CTA: Submit enquiry

Future production version:

- AI trained on MJD services, FAQs, process, warranty, quote workflow
- Can qualify leads
- Can answer basic customer questions
- Can hand off to human staff

---

## Phase 3 - Production Projects Map and CMS

### Main Goal

Turn Phase 2 Projects Map demo into real production module.

### Features

- Admin can add/edit projects
- Upload multiple project images
- Set project type
- Set suburb/region
- Set approximate location
- Privacy controls
- Publish/unpublish project
- Featured projects
- Map markers update dynamically
- Project detail pages generated automatically

### Admin Fields

- Project title
- Slug
- Project type
- Suburb
- Region
- Approximate latitude/longitude
- Privacy mode
- Size
- Materials
- Structure style
- Completion year
- Description
- Before images
- After images
- Featured image
- SEO title
- SEO description
- Publish status

### Privacy Modes

#### Public Reference

- Can show suburb
- Can show general project information
- Can show approved photos

#### General Area Only

- Show region only
- Example: Western Melbourne
- Hide exact suburb if needed

#### Private / Cropped Reference

- Use close-up/cropped photos
- Hide identifiable property details
- No map marker or marker appears at regional level only

### SEO Enhancements

- Project detail pages in sitemap
- Project image alt text
- Internal links to service pages
- Internal links from suburb pages
- Breadcrumb schema
- ImageObject schema where useful

---

## Phase 4 - Lead CRM / Admin Dashboard

### Main Goal

Help MJD manage leads and quote pipeline.

### Features

- Admin login
- View all enquiries
- Filter by status
- Filter by service
- Filter by suburb
- Assign lead to staff
- Add internal notes
- Upload quote
- Change lead status
- Email customer
- Export leads CSV

### Lead Status Workflow

- New
- Contacted
- Site Inspection Booked
- Site Inspection Completed
- Quote Preparing
- Quote Sent
- Follow Up
- Won
- Lost

### Benefits

- Less missed enquiries
- Clear sales pipeline
- Easier follow-up
- Better reporting
- Foundation for customer portal

---

## Phase 5 - Customer Portal / Project Management

### Main Goal

Allow signed customers to track project progress.

### Customer Features

- Customer login
- View project summary
- View quote
- View contract
- View schedule
- View progress photos
- View payment status
- Send message/question

### Staff Features

- Create project from won lead
- Upload contract
- Upload quote
- Upload progress photos
- Update timeline
- Update payment stages
- Add internal notes

### Project Status Workflow

- Contract Signed
- Deposit Paid
- Site Measure Completed
- Materials Ordered
- Installation Scheduled
- Installation In Progress
- Final Inspection
- Final Payment Due
- Completed

### Payment Tracking

- Quote issued
- Deposit invoice
- Deposit paid
- Progress payment if required
- Final invoice
- Fully paid

This is not a full accounting system at first. It can simply track payment stages and link to invoice files.

---

## Phase 6 - AI Chatbot and Automation

### Main Goal

Use AI to support customer enquiries and reduce manual response time.

### AI Chatbot Capabilities

- Answer basic service questions
- Explain difference between pergola, verandah, patio
- Ask qualifying questions
- Collect customer details
- Recommend next step
- Create enquiry lead
- Suggest relevant project references
- Hand off to staff

### Knowledge Base

The chatbot should use approved MJD content only:

- Services
- FAQs
- Areas served
- Quote process
- Site inspection process
- Gallery/project references
- General permit disclaimer
- Contact details

Important:

- Chatbot should not give legal/council approval guarantees
- Chatbot should use wording like:
  - `Permit requirements may depend on your property, council, structure size, and project details. MJD can discuss your project and recommend the next step.`

### Automation Ideas

- Auto-reply after enquiry
- Follow-up email after 2 days
- Review request after project completion
- Reminder before site inspection
- Lead notification to staff

---

## Suggested Pricing Structure

### Package 1 - Basic SEO Website

Suggested price:

`AUD $2,500 - $3,500`

Includes:

- Home
- Services overview
- Basic gallery
- Areas served
- Contact
- Quote form
- Basic SEO
- Analytics/Search Console
- Google Ads conversion tracking

### Package 2 - Growth Website + Phase 2 Demo

Suggested price:

`AUD $4,500 - $6,500`

Includes:

- Everything in Basic
- Individual service pages
- Blog foundation
- Better gallery
- Detailed quote form
- Google Sheet/Airtable lead backup
- Projects Map demo
- Project detail demo
- Mini dashboard demo
- Customer portal mock
- Chatbot placeholder

Recommended package to pitch.

### Package 3 - Premium Local SEO + Interactive Demo

Suggested price:

`AUD $7,500 - $10,000`

Includes:

- Full multi-page SEO website
- More service/location pages
- 10-20 project entries
- Stronger interactive map demo
- Better project detail templates
- Lead workflow setup
- More complete SEO content structure

### Future Module Pricing

- Production Projects Map: `AUD $2,500 - $5,000`
- Lead CRM Dashboard: `AUD $2,000 - $4,000`
- Customer Portal: `AUD $5,000 - $12,000`
- Basic AI Chatbot: `AUD $1,500 - $3,500`
- Custom AI Chatbot with knowledge base: `AUD $4,000 - $8,000`
- Project/payment management system: `AUD $8,000 - $20,000`

### Monthly Maintenance

Basic care:

`AUD $150 - $250/month`

Includes:

- Hosting checks
- Small content/image updates
- Form monitoring
- Basic technical support

Growth care:

`AUD $350 - $600/month`

Includes:

- Monthly SEO/content updates
- Blog upload
- Conversion review
- Gallery updates
- Basic reporting

Ads/SEO management:

`AUD $800 - $1,500/month`

Google Ads budget is separate and paid directly by MJD.

---

## Recommended Sales Approach

Pitch the project as:

`Phase 1 is the live SEO and lead generation website. Phase 2 demo modules show how the website can grow into a project reference map, lead CRM, customer portal, and AI assistant later. This keeps the first build affordable while giving MJD a clear long-term digital roadmap.`

Recommended initial offer:

`Growth Website + Phase 2 Demo at around AUD $5,500`

If offering introductory/portfolio price:

`AUD $3,800 - $4,500`

Make it clear this is a limited introductory price and future modules are priced separately.

---

## Build Priority

### Must Have for Launch

- Home
- Services
- Quote form
- Contact
- Gallery
- Areas served
- Basic SEO
- Analytics/conversion tracking

### Nice to Have for Launch

- Individual service pages
- Blog foundation
- Google Sheet lead backup
- Auto-reply email
- Thank-you page

### Demo Only at Launch

- Projects Map
- Project detail demo
- Lead dashboard mock
- Customer portal mock
- Chatbot placeholder

### Build Later as Paid Add-ons

- Production project map CMS
- Lead CRM
- Customer portal
- AI chatbot
- Payment/project management

