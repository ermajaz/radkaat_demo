// Enhanced Collaborations Component - README
/*
ExperienceCollaborationsMobile Component
=======================================

A highly responsive and visually advanced collaborations showcase component
featuring animated brand tiles, interactive hover effects, and modern UI/UX.

Features:
---------
✅ Fully responsive across all device sizes (mobile, tablet, desktop)
✅ Advanced animations with Framer Motion
✅ Interactive hover effects with 3D transforms
✅ Particle animations and floating elements
✅ Gradient backgrounds and lighting effects
✅ Scroll-based animations and parallax effects
✅ Touch-friendly interactions for mobile devices
✅ Accessibility considerations with proper ARIA labels

Responsive Breakpoints:
----------------------
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

Component Structure:
-------------------
ExperienceCollaborationsMobile (Main Container)
├── LeftPanel (Title & Background)
│   ├── Animated background shapes
│   ├── Gradient overlays
│   ├── Floating geometric elements
│   ├── Main title with text effects
│   └── Curved arrow indicator
│
└── RightTilesScroller (Brand Grid)
    ├── Benton grid layout
    ├── Interactive brand tiles
    ├── Hover particles
    ├── 3D transform effects
    └── Ripple animations

Usage:
------
import ExperienceCollaborationsMobile from '@/features/experiences/collaborations/ExperienceCollaborationsMobile';

function ExperiencesPage() {
  return (
    <div>
      <ExperienceCollaborationsMobile />
    </div>
  );
}

Customization:
-------------
- Modify brand data in: features/experiences/collaborations/utils/collaborations-data.ts
- Adjust colors and themes in the component files
- Customize animation timings and effects
- Update responsive breakpoints as needed

Performance:
-----------
- Uses Framer Motion for optimized animations
- Lazy loading for images
- Efficient re-renders with proper state management
- Mobile-first responsive design

Accessibility:
-------------
- Proper semantic HTML structure
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support (respects user preferences)
- High contrast ratios for text readability
*/