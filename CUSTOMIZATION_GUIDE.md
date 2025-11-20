# Easy Customization Guide

This guide will help you customize the website for your father's property in simple steps.

## Step 1: Update Property Name

**File:** `index.html`

**Find and Replace:**
- Find: `Uptown Place Apartments`
- Replace with: Your property name

**Locations to update:**
1. Page title (line 6)
2. Logo (line 30)
3. Hero section (line 56)
4. Welcome section (line 75)
5. Footer (line 160)

## Step 2: Update Address

**File:** `index.html`

**Find and Replace:**
- Find: `Big W 704 St Anns Outlake Street Chico, CA 95928`
- Replace with: Your property address

**Locations to update:**
1. Hero section (line 57)
2. Footer (line 161-162)

## Step 3: Update Contact Information

**File:** `index.html`

**Phone Number:**
- Find: `(530) 123-4567`
- Replace with: Your phone number
- Locations: Top bar (line 19) and Footer (line 163)

**Email Address:**
- Find: `info@uptownplace.com`
- Replace with: Your email
- Locations: Top bar (line 20) and Footer (line 164)

## Step 4: Update Welcome Message

**File:** `index.html`
**Lines:** 76-82

Replace the paragraph text with a description of your property. Keep it 2-3 sentences describing:
- Type of units available
- Location benefits
- Key amenities or features

## Step 5: Update Vacancy Listings

**File:** `index.html`
**Starting at line:** 122

For each vacancy, update:
1. **Heading** (e.g., "1 Bedroom Apartment")
2. **Details** - Beds, Baths, Square footage
3. **Price** - Monthly rent amount
4. **Image** - Make sure matching image is in `/images` folder

**To Add More Units:**
Copy lines 122-137 (one complete vacancy-card) and paste below, then modify the details.

## Step 6: Add Your Photos

**Folder:** `/images`

**Required photos:**
1. `hero-apartments.jpg` - Main property photo (wide/landscape)
2. `apartment-1.jpg` - First unit or building photo
3. `apartment-2.jpg` - Second unit or building photo

**Tips:**
- Use horizontal/landscape photos
- Take photos in good lighting
- Show the best features of your property
- You can add more by copying vacancy cards and adding apartment-3.jpg, apartment-4.jpg, etc.

## Step 7: Update Office Hours (Optional)

**File:** `index.html`
**Lines:** 180-183

Update with your actual office hours or remove this section if not needed.

## Step 8: Change Color Scheme (Optional)

**File:** `styles.css`

**Main colors used:**
- Orange accent: `#ff6b35` (buttons, highlights)
- Dark gray: `#2c2c2c` (header, footer, text)
- Light background: `#f9f9f9`

**To change the orange:**
1. Open `styles.css`
2. Use Find & Replace
3. Find: `#ff6b35`
4. Replace with: Your color (hex code)

**Popular alternatives:**
- Blue: `#4a90e2`
- Green: `#7cb342`
- Purple: `#8e24aa`
- Red: `#e53935`

## Quick Test Checklist

After making changes:

- [ ] Property name appears correctly
- [ ] Address is correct
- [ ] Phone and email are updated
- [ ] Photos are showing (or placeholders visible)
- [ ] Vacancy details match your units
- [ ] Mobile menu works (test on phone or resize browser)
- [ ] All links work
- [ ] Footer information is correct

## Opening the Website

**On your computer:**
1. Double-click `index.html`
2. It will open in your default browser

**Testing on mobile:**
1. Resize your browser window to be narrow
2. Or use browser developer tools (F12) and toggle device toolbar

## Need More Help?

**Common issues:**

**Images not showing?**
- Check that image files are in the `/images` folder
- Check that filenames match exactly (including .jpg extension)
- Filenames are case-sensitive

**Layout looks broken?**
- Make sure `styles.css` is in the same folder as `index.html`
- Make sure you didn't accidentally delete any HTML tags

**Want to add more features?**
- Contact a web developer
- Or search for "HTML CSS [feature name] tutorial"

## Publishing the Website

Once you're happy with the customizations:

1. **Option 1: Simple Hosting**
   - Upload all files to a web hosting service
   - Popular options: Bluehost, HostGator, GoDaddy

2. **Option 2: Free Hosting**
   - GitHub Pages (free, requires GitHub account)
   - Netlify (free, drag and drop)

3. **Option 3: Hire a Developer**
   - To add contact forms
   - To connect to a database
   - To add online applications
