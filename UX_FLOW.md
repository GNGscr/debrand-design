
# 🧭 UX Flow – DEBRAND Portfolio Website

This document walks through the **user journey** and interaction experience within the `debrand-design` portfolio app.  
The focus is on **entry flow**, **section progression**, **interactions**, and **responsiveness**, from both **desktop** and **mobile** perspectives.

---

## 🖥 Desktop Flow

### 1. **Hero Section** - Created using gsap
- Fades in with animation.
- Shows the logo and short tagline.
- Navigation appears subtly, not stealing focus from the center.

### 2. **Projects Section**

- **👋 Dolphin animation**
    - Upon load, users are greeted with an animated **waving dolphin**.
    - The dolphin animation is built using **Rive**, inspired by modern playful animation styles.
    - Animation fades smoothly, leading into the main screen.
    **🎯 Purpose**
    - Create delight and personality.
    - Set a playful but professional tone for the site.
    - Visually signal that this is a custom-crafted experience.
- Scroll-reveal with staggered entrance of project cards.
- Each card includes:
  - Image preview
  - Project title + description
  - Call-to-action link
- Hover triggers microinteractions:
  - Button grows
  - Card lifts or highlights

### 3. **About/CTA Section**
- Concluding call-to-action.
- Link to contact or LinkedIn.
- Light scroll-reveal or fade-in.

---

## 🔄 Transitions & Motion

- Built using **Framer Motion**
- Animations include:
  - Page fade-in
  - Section-by-section scroll entry
  - Hover microinteractions
  - Dolphin entry

---

## 🎯 UX Considerations

- **Focus**: Clear hierarchy — project section is prioritized.
- **Delight**: Use of motion and animation for engagement.
- **Performance**: Lightweight animations for mobile devices.
- **Clarity**: Tactile and understandable buttons, links, and CTAs.

---

## ✅ Flow Summary

| Step            | Interaction/Animation                              | Notes                                  |
|-----------------|-----------------------------------------------------|----------------------------------------|
| Page Load       | Dolphin appears, waves, fades out                   | Built in Rive                          |
| Hero Reveal     | Fades in, logo and nav                              | Focused, clean intro                   |
| Project Cards   | Scroll reveal + hover animation                     | Encourages discovery                   |
| Call to Action  | Light animation and clear contact links             | Simple and direct                      |

---

This walkthrough helps understand the **narrative experience** built into `debrand-design`, and how users are led through the portfolio journey with clear visual storytelling.
