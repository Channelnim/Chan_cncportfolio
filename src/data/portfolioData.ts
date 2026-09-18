import { SlideImage, ProjectItem, CapabilityItem, TimelineItem } from '../types';

export const nimsSlideImages: SlideImage[] = [
  {
    id: 'IMG_9799',
    url: '/images/nims/IMG_9799.JPG',
    alt: 'NIMS CNC Milling Component - Isometric 45° Angle (IMG_9799)',
    title: 'Isometric Angle View (IMG_9799)',
    description: '45-degree angle showcasing edge chamfers, surface finish, pocket depth, and hole concentricity on Haas CNC Mill.',
    viewAngle: '45° Isometric',
    fit: 'cover',
    scaleClass: 'scale-[1.12]'
  },
  {
    id: 'IMG_9797',
    url: '/images/nims/IMG_9797.JPG',
    alt: 'NIMS CNC Milling Component - Top View (IMG_9797)',
    title: 'Top Orthographic View (IMG_9797)',
    description: 'Precision contour milling showing the stepped shelf, counterbored holes, center slot, and circular arc feature machined to ±0.003" tolerance.',
    viewAngle: 'Top Plan View'
  },
  {
    id: 'IMG_9810',
    url: '/images/nims/IMG_9810.JPG',
    alt: 'NIMS CNC Milling Component - Front Shoulder Profile (IMG_9810)',
    title: 'Step Shoulder & Slot Profile (IMG_9810)',
    description: 'Low-angle perspective highlighting the milled shelf step height, slot depth consistency, and clean surface transitions.',
    viewAngle: 'Front Step Angle'
  },
  {
    id: 'IMG_9811',
    url: '/images/nims/IMG_9811.JPG',
    alt: 'NIMS CNC Milling Component - Low Elevation Profile (IMG_9811)',
    title: 'Profile Elevation View (IMG_9811)',
    description: 'Direct elevation view inspecting overall stock thickness, milled step shoulder flatness, and edge deburring.',
    viewAngle: 'Side Elevation'
  },
  {
    id: 'IMG_9812',
    url: '/images/nims/IMG_9812.JPG',
    alt: 'NIMS CNC Milling Component - Rear Arc Cutout View (IMG_9812)',
    title: 'Semicircular Arc & Slot View (IMG_9812)',
    description: 'High-angle perspective highlighting the circular interpolation milling toolpath, internal pocket finish, and corner chamfers.',
    viewAngle: 'Arc Feature Angle'
  },
  {
    id: 'IMG_9813',
    url: '/images/nims/IMG_9813.JPG',
    alt: 'NIMS CNC Milling Component - Perspective View (IMG_9813)',
    title: 'Full Perspective Angle (IMG_9813)',
    description: 'Comprehensive view of all machined features ready for CMM and micrometer quality verification.',
    viewAngle: 'Full Perspective'
  }
];

export const waxSlideImages: SlideImage[] = [
  {
    id: 'IMG_9687',
    url: '/images/wax/IMG_9687.JPG',
    alt: 'NIMS Part Machining in Wax (IMG_9687)',
    title: 'NIMS Part (IMG_9687)',
    description: 'NIMS milling practice workpiece machined in machinable wax, verifying feature geometry, step heights, and hole coordinates prior to aluminum stock machining.',
    viewAngle: 'NIMS',
    fit: 'cover'
  },
  {
    id: 'IMG_9556',
    url: '/images/wax/IMG_9556.JPG',
    alt: 'Radius + Canned Cycle + Slot - Radius & Counterbore Holes (IMG_9556)',
    title: 'Radius & Counterbore Holes (IMG_9556)',
    description: 'Machinable wax block featuring top corner radii, precision counterbored holes, and clean through-hole grid.',
    viewAngle: 'Radius & Holes',
    fit: 'contain',
    scaleClass: 'scale-[1.30]'
  },
  {
    id: 'IMG_9557',
    url: '/images/wax/IMG_9557.JPG',
    alt: 'Radius + Canned Cycle + Slot - Milled Slots & Holes (IMG_9557)',
    title: 'Milled Slots & Holes (IMG_9557)',
    description: 'Horizontal slotting operations with varying lengths and depths, combined with bottom drilled holes.',
    viewAngle: 'Slot Milling',
    fit: 'contain',
    scaleClass: 'scale-[1.30]'
  },
  {
    id: 'IMG_9558',
    url: '/images/wax/IMG_9558.JPG',
    alt: 'Radius + Canned Cycle + Slot - Diamond Pattern & Canned Cycles (IMG_9558)',
    title: 'Diamond Pattern & Canned Cycles (IMG_9558)',
    description: 'Diamond 4-hole coordinate positioning and canned drill cycle depth testing along the edge.',
    viewAngle: 'Canned Drill Cycles',
    fit: 'contain',
    scaleClass: 'scale-[1.30]'
  }
];

export const fusionSlideImages: SlideImage[] = [
  {
    id: 'PJ_Nims_02',
    url: '/images/fusion/PJ_Nims_02.png',
    alt: 'Fusion 360 NIMS Machining Component - Top-Isometric Shaded CAD Model',
    title: 'Top-Isometric Shaded Solid (PJ_Nims_02)',
    description: 'Parametric 3D CAD modeling of the NIMS milling component on a stock block, showing center racetrack pocket, counterbored holes, stepped shoulder, and circular arc cutout.',
    viewAngle: 'Isometric Shaded Solid'
  },
  {
    id: 'PJ_Nims_wire',
    url: '/images/fusion/PJ_Nims_wire.png',
    alt: 'Fusion 360 NIMS Machining Component - Technical Wireframe Model',
    title: 'Technical Wireframe Projection (PJ_Nims_wire)',
    description: 'Clear hidden-line wireframe representation on a construction grid, showing through-hole cylinders, pocket depth, and corner radii.',
    viewAngle: 'Wireframe Projection'
  },
  {
    id: 'PJ_Nims_03',
    url: '/images/fusion/PJ_Nims_03.png',
    alt: 'Fusion 360 NIMS Machining Component - Angled Wireframe CAD',
    title: 'Reverse-Angle Isometric Wireframe (PJ_Nims_03)',
    description: 'Perspective CAD viewport illustrating internal feature relationships and stepped shelf geometry for toolpath planning.',
    viewAngle: 'Reverse Wireframe CAD'
  },
  {
    id: 'pj01',
    url: '/images/fusion/pj01.png',
    alt: 'Fusion 360 Mechanical Screw Clamp - Front Orthographic View',
    title: 'Clamp Assembly - Front Orthographic (pj01)',
    description: 'Orthographic front projection of mechanical screw clamp assembly featuring extruded U-channel base bracket, threaded lead screw spindle, and collar.',
    viewAngle: 'Front Orthographic CAD'
  },
  {
    id: 'pj01_02',
    url: '/images/fusion/pj01_02.png',
    alt: 'Fusion 360 Mechanical Screw Clamp - Side Profile Elevation',
    title: 'Clamp Assembly - Side Elevation (pj01_02)',
    description: 'Side profile projection displaying channel width, hub mounting transition, and horizontal dual handle lever bars.',
    viewAngle: 'Side Elevation CAD'
  },
  {
    id: 'pj01_03',
    url: '/images/fusion/pj01_03.png',
    alt: 'Fusion 360 Mechanical Screw Clamp - 3D Perspective Assembly',
    title: 'Clamp Assembly - 3D Isometric View (pj01_03)',
    description: 'Full 3D parametric multi-body assembly combining the machined U-bracket, threaded spindle, hub collar, and T-handle pins.',
    viewAngle: '3D Assembly Isometric'
  }
];

export const capabilities: CapabilityItem[] = [
  {
    number: '01',
    title: 'CNC Milling',
    description: 'Hands-on Haas milling training with machine setup, operation, offsets, tool handling, and G-code fundamentals.'
  },
  {
    number: '02',
    title: 'Blueprint Reading',
    description: 'Interpreting dimensions, tolerances, technical drawings, and GD&T concepts to understand what the finished part must achieve.'
  },
  {
    number: '03',
    title: 'Precision Measurement',
    description: 'Calipers, micrometers, depth gauges, and protractors used to verify dimensions and support quality-focused work.'
  },
  {
    number: '04',
    title: 'G-Code',
    description: 'Writing and editing basic CNC code and working with feeds, speeds, drilling cycles, slots, and radius operations in training projects.'
  },
  {
    number: '05',
    title: 'Fusion 360',
    description: 'Ongoing self-study in parametric CAD, multi-body modeling, assemblies, and the design-to-part workflow.'
  },
  {
    number: '06',
    title: 'Shop Discipline',
    description: 'Safety, consistency, documentation, careful tool handling, and a methodical approach to setup and problem solving.'
  }
];

export const projects: ProjectItem[] = [
  {
    id: 'nims-milling',
    number: '01',
    category: 'NIMS',
    title: 'NIMS CNC Milling Component',
    description: 'Aluminum part machined on a Haas mill. Training focused on blueprint interpretation, feeds and speeds calculations, setup, and working to the documented ±0.003" tolerance.',
    tags: ['HAAS MILL', 'ALUMINUM', '±0.003"'],
    isNims: true
  },
  {
    id: 'canned-cycle',
    number: '02',
    category: 'CNC Practice',
    title: 'Radius + Canned Cycle + Slot',
    description: 'Machining-wax practice covering radius work, slotting, drilling operations, and canned cycles. Demonstrates turning a blueprint into programmed machine movements.',
    tags: ['G-CODE', 'CANNED CYCLES', 'RADIUS', 'SLOT MILLING'],
    imageUrl: 'https://images.unsplash.com/photo-1533729969566-fbdcb0865e8a?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'fusion-cad',
    number: '03',
    category: 'CAD',
    title: 'Fusion 360 Design Practice',
    description: 'Ongoing Fusion 360 self-study using parametric modeling and assembly practice, including a mechanical screw clamp and a wireframe interpretation of a CNC part drawing.',
    tags: ['PARAMETRIC CAD', 'ASSEMBLY', 'DESIGN TO PART'],
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  }
];

export const timeline: TimelineItem[] = [
  {
    period: '2026',
    title: 'CNC Machinist Training',
    description: 'JARC Fast Track — 500+ hours of hands-on CNC training in milling, turning, measurement, setup, programming, and NIMS-oriented work.'
  },
  {
    period: 'ONGOING',
    title: 'Fusion 360 Study',
    description: 'Building CAD/CAM capability through self-study, with emphasis on parametric modeling and design-to-part thinking.'
  },
  {
    period: '7 YEARS',
    title: 'Graphic / UI/UX Design',
    description: 'Professional design experience developed visual accuracy, documentation habits, spatial thinking, and attention to detail.'
  },
  {
    period: 'NOW',
    title: 'Building a Career',
    description: 'Looking for an opportunity to contribute, learn from experienced machinists, and grow into increasingly capable setup and production work.'
  }
];
