# FleetGuard AI - Driver Interface Flow Diagram

## 📊 Complete Navigation Flow

```
┌─────────────────────────────────────────────────────────────────────┐
│                          DRIVER LOGIN (1)                            │
│                       /driver/login                                  │
│                                                                       │
│  ┌───────────────┐  ┌────────────────┐  ┌──────────────────┐       │
│  │  Email Input  │  │ Password Input │  │ Remember Me ☑️   │       │
│  └───────────────┘  └────────────────┘  └──────────────────┘       │
│                                                                       │
│       ┌────────────┐  ┌─────────────────────┐                       │
│       │   Login    │  │ Sign in with Google │                       │
│       └─────┬──────┘  └─────────────────────┘                       │
│             │                                                         │
│             └──────────────────┐                                     │
│                                │                                     │
│         Forgot Password? ──────┼────────────────────┐               │
│                                │                    │               │
└────────────────────────────────┼────────────────────┼───────────────┘
                                 │                    │
                                 │                    │
                                 ▼                    ▼
┌────────────────────────────────────┐   ┌──────────────────────────┐
│      DRIVER DASHBOARD (3)          │   │  PASSWORD RESET (2)      │
│      /driver/dashboard              │   │  /driver/forgot-password │
│                                    │   │                          │
│  Welcome, Driver Name              │   │  Enter Email             │
│                                    │   │  ┌────────────────┐      │
│  📍 GPS: Active (Last 5 mins)     │   │  │  Email Input   │      │
│  ┌──────────┐                     │   │  └────────────────┘      │
│  │ Update   │                     │   │  Send Reset Link         │
│  └──────────┘                     │   │                          │
│                                    │   │  ✅ Success!             │
│  ┌─────────┬──────────┬─────────┐ │   │  Check your email        │
│  │ Start   │  View    │   My    │ │   │  Resend in 60s...        │
│  │Inspection History  │ Profile │ │   │                          │
│  └────┬────┴─────┬────┴────┬────┘ │   └──────────────────────────┘
│       │          │         │      │
│       │          │         │      │
│  Recent Inspections (Last 3)      │
│  ┌──────────────────────────────┐ │
│  │ ABC-1234  |  85/100  | 2 hrs│ │
│  │ XYZ-5678  |  92/100  | 1 day│ │
│  │ LMN-9012  |  78/100  | 2 day│ │
│  └──────────────────────────────┘ │
│                                    │
│  [Home] [History] [Profile] ←─────┼──── Bottom Nav (Mobile)
│                                    │
└────────┬───────────┬───────────┬───┘
         │           │           │
         ▼           ▼           ▼
         │      HISTORY(13) PROFILE(15)
         │
         ▼
┌────────────────────────────────────┐
│    VEHICLE SELECTION (4)           │
│    /driver/select-vehicle           │
│                                    │
│  🔍 Search: [________________]     │
│  🎛️  Filters: Status | Health      │
│                                    │
│  ┌──────┬──────┬──────┬──────┐   │
│  │ CAB  │ VAN  │ SUV  │ TUK  │   │
│  │-1234 │-5678 │-7890 │-3456 │   │
│  │ 92/  │ 85/  │ 65/  │ 88/  │   │
│  │ 100  │ 100  │ 100  │ 100  │   │
│  │[SEL] │[SEL] │[SEL] │[SEL] │   │
│  └──────┴──────┴──────┴──────┘   │
│                                    │
│  Showing 15 of 47 vehicles         │
│                                    │
└───────────────┬────────────────────┘
                │
                ▼ (Select Vehicle)
┌────────────────────────────────────────────────────────────┐
│           CUSTOMER DETAILS (5)                             │
│           /driver/inspection/customer-details               │
│                                                            │
│  ⓵──────⓶──────⓷                                          │
│  Customer Photos Report                                   │
│                                                            │
│  Selected: ABC-1234 Toyota KDH 2020 [85/100]             │
│                                                            │
│  Customer Name: [_________________] *                     │
│  NIC/Passport:  [_________________] *                     │
│  Phone:         [+94 __ ___ ____] *                       │
│  Rental Start:  [📅 Pick Date] *                          │
│  Rental End:    [📅 Pick Date] *                          │
│                                                            │
│  [Cancel]  [Next: Take Photos] ──────────────────┐        │
│                                                   │        │
└───────────────────────────────────────────────────┼────────┘
                                                    │
                                                    ▼
┌──────────────────────────────────────────────────────────────┐
│              PHOTO CAPTURE (6)                               │
│              /driver/inspection/photos                        │
│                                                              │
│  ⓵──────⓶──────⓷                                            │
│  Customer Photos Report                                     │
│                                                              │
│  📷 Front View - Ensure entire front is visible             │
│                                                              │
│  ┌────────────────────────────────────────────┐             │
│  │                                            │             │
│  │         [Live Camera Feed]                 │             │
│  │              ┌───┐                         │             │
│  │         💡 📷 🔄                           │             │
│  │            Flash Camera Grid               │             │
│  │                                            │             │
│  │              ┌─────┐                       │             │
│  │              │  📸 │ ← Large Capture       │             │
│  │              └─────┘                       │             │
│  └────────────────────────────────────────────┘             │
│                                                              │
│  Photo 3 of 8 | 3/8 captured                                │
│  [███░░░░░] 37.5%                                           │
│                                                              │
│  [①][②][③][④][⑤][⑥][⑦][⑧] ← Thumbnails                    │
│  [✓][✓][✓][·][·][·][·][·]                                  │
│                                                              │
│  8 Required Photos:                                         │
│  • Front View ✓  • Rear View ✓  • Left Side ✓             │
│  • Right Side    • Interior      • Dashboard               │
│  • Damage 1      • Damage 2                                │
│                                                              │
│            [Review (3/8)] ────────────────────┐             │
│                                               │             │
└───────────────────────────────────────────────┼─────────────┘
                                                │
                       ┌────────────────────────┘
                       │ (All 8 photos or click Review)
                       ▼
┌──────────────────────────────────────────────────────────────┐
│              PHOTO REVIEW (7)                                │
│              /driver/inspection/review-photos                 │
│                                                              │
│  ⓵──────⓶──────⓷                                            │
│  Customer Photos Report                                     │
│                                                              │
│  Review Photos (8/8)                                        │
│                                                              │
│  ┌────────┬────────┬────────┬────────┐                     │
│  │ Front  │ Rear   │ Left   │ Right  │                     │
│  │ [IMG✓] │ [IMG✓] │ [IMG✓] │ [IMG✓] │                     │
│  │ Retake │ Retake │ Retake │ Retake │                     │
│  ├────────┼────────┼────────┼────────┤                     │
│  │Interior│Dash    │Damage1 │Damage2 │                     │
│  │ [IMG✓] │ [IMG✓] │ [IMG✓] │ [IMG✓] │                     │
│  │ Retake │ Retake │ Retake │ Retake │                     │
│  └────────┴────────┴────────┴────────┘                     │
│                                                              │
│  ☑️ All photos are clear and accurate                       │
│                                                              │
│  [Back to Camera] [Upload & Analyze] ───────────┐          │
│                                                  │          │
└──────────────────────────────────────────────────┼──────────┘
                                                   │
                                                   ▼
┌──────────────────────────────────────────────────────────────┐
│               AI PROCESSING (8)                              │
│               /driver/inspection/processing                   │
│                                                              │
│         🤖 Processing Photos                                 │
│         AI is analyzing your vehicle inspection             │
│                                                              │
│              ┌─────────────┐                                │
│              │   ╱──────╲  │                                │
│              │  │  🤖   │  │ ← Spinning animation           │
│              │   ╲──────╱  │                                │
│              └─────────────┘                                │
│                                                              │
│         Analyzing damage...                                 │
│                                                              │
│              [██████████████] 65%                           │
│                                                              │
│         ✅ Uploading photos...                              │
│         🔄 Analyzing damage...                              │
│         ⏳ Calculating health score...                      │
│         ⏳ Generating report...                             │
│                                                              │
│         About 30 seconds remaining                          │
│                                                              │
│    ⚠️  Do not close this page while processing             │
│                                                              │
│         (Auto-redirects at 100%) ─────────────┐            │
│                                                │            │
└────────────────────────────────────────────────┼────────────┘
                                                 │
                                                 ▼
┌──────────────────────────────────────────────────────────────┐
│            INSPECTION RESULTS (9)                            │
│            /driver/inspection/results                         │
│                                                              │
│  ⓵──────⓶──────⓷                                            │
│  Customer Photos Report                                     │
│                                                              │
│  ABC-1234 | Toyota KDH 2020                                │
│  Customer: John Doe | Date: Jan 27, 2026                   │
│                                                              │
│         ┌──────────────┐                                    │
│         │      72      │  ← Circular Progress               │
│         │    ──────    │                                    │
│         │     /100     │                                    │
│         │   [FAIR]     │                                    │
│         └──────────────┘                                    │
│                                                              │
│  ⚠️  Damage Summary                                         │
│  5 damages detected                                         │
│  [2 Minor] [1 Moderate] [0 Major]                          │
│                                                              │
│  📸 AI Analysis Photos                                      │
│  ┌────┬────┬────┬────┐                                     │
│  │[1] │[2] │[3] │[4] │ ← Photos with damage badges         │
│  │ ❌2│    │ ❌1│    │                                     │
│  └────┴────┴────┴────┘                                     │
│                                                              │
│  📋 Detailed Damage Report                                  │
│  ┌─────────────────────────────────────┐                   │
│  │ ⚠️  Scratch - MINOR                 │ ▼                │
│  │ 📍 Front bumper, driver side        │                   │
│  │ AI Confidence: 92%                  │                   │
│  └─────────────────────────────────────┘                   │
│  ┌─────────────────────────────────────┐                   │
│  │ ⚠️  Dent - MODERATE                 │ ▼                │
│  │ 📍 Rear door, passenger side        │                   │
│  │ AI Confidence: 88%                  │                   │
│  └─────────────────────────────────────┘                   │
│                                                              │
│  [Retake Photos] [Continue to Signatures] ──────┐          │
│                                                  │          │
└──────────────────────────────────────────────────┼──────────┘
                                                   │
                                                   ▼
┌──────────────────────────────────────────────────────────────┐
│            DIGITAL SIGNATURES (10)                           │
│            /driver/inspection/signatures                      │
│                                                              │
│  ⓵──────⓶──────⓷                                            │
│  Customer Photos Report                                     │
│                                                              │
│  ABC-1234 | John Doe | 72/100 | Jan 27, 2026              │
│                                                              │
│  📝 Please obtain signatures from driver and customer       │
│                                                              │
│  Driver Signature *                                         │
│  Signing as: Driver Name                                   │
│  ┌──────────────────────────────────────┐                  │
│  │                                      │                  │
│  │  [Signature Drawing Area]     ✓      │                  │
│  │                              Signed  │                  │
│  └──────────────────────────────────────┘                  │
│  [Clear]                                                    │
│                                                              │
│  Customer Signature *                                       │
│  Customer: John Doe                                        │
│  ┌──────────────────────────────────────┐                  │
│  │                                      │                  │
│  │  [Signature Drawing Area]     ✓      │                  │
│  │                              Signed  │                  │
│  └──────────────────────────────────────┘                  │
│  [Clear]                                                    │
│                                                              │
│  ☑️ I confirm all information is accurate                  │
│                                                              │
│  [Back to Results] [Generate PDF Report] ────────┐         │
│                                                   │         │
└───────────────────────────────────────────────────┼─────────┘
                                                    │
                                                    ▼
┌──────────────────────────────────────────────────────────────┐
│           REPORT GENERATED (11)                              │
│           /driver/inspection/report                           │
│                                                              │
│              ┌──────────┐                                    │
│              │    ✓     │  ← Green checkmark                │
│              └──────────┘                                    │
│                                                              │
│         Inspection Complete!                                │
│         Report ID: #INS-2026-0123                           │
│                                                              │
│  ┌────────────────────────────────────────┐                │
│  │ 📄 Inspection Report                  │                │
│  │ Vehicle: ABC-1234                     │                │
│  │ Customer: John Doe                    │                │
│  │ Date: Jan 27, 2026 2:30 PM           │                │
│  │ Health Score: 72/100                  │                │
│  │ Damages: 5 found                      │                │
│  └────────────────────────────────────────┘                │
│                                                              │
│  ┌──────────────┬──────────────┐                           │
│  │ 📥 Download  │ 💬 WhatsApp  │                           │
│  │     PDF      │              │                           │
│  ├──────────────┼──────────────┤                           │
│  │ 📧 Email     │ 🖨️  Print    │                           │
│  └──────────────┴──────────────┘                           │
│                                                              │
│  [Start New Inspection]                                     │
│  [Back to Dashboard]                                        │
│                                                              │
│  Share Report button opens ───────────────┐                │
│                                            │                │
└────────────────────────────────────────────┼────────────────┘
                                             │
                                             ▼
                              ┌──────────────────────────┐
                              │  SHARE MODAL (12)        │
                              │                          │
                              │  [WhatsApp] [Email]      │
                              │  ─────────────────       │
                              │                          │
                              │  WhatsApp Tab:           │
                              │  Phone: +94 77 123 4567  │
                              │  Message: [________]     │
                              │  [Send via WhatsApp]     │
                              │                          │
                              │  Email Tab:              │
                              │  Email: [_________]      │
                              │  Subject: [_______]      │
                              │  Message: [________]     │
                              │  [Send Email]            │
                              │                          │
                              └──────────────────────────┘

═══════════════════════════════════════════════════════════════

               HISTORY & PROFILE SECTION

═══════════════════════════════════════════════════════════════

From Dashboard, History, or Bottom Nav:

         ▼
┌──────────────────────────────────────────────────────────────┐
│           INSPECTION HISTORY (13)                            │
│           /driver/history                                     │
│                                                              │
│  🔍 Search: [_________________________]                     │
│  🎛️  [Status ▼] [Date Range ▼] [Sort ▼]                    │
│                                                              │
│  Showing 24 inspections                                     │
│                                                              │
│  ┌────────────────────────────────────────┐                │
│  │ Jan 25, 2026                           │ ⋮              │
│  │ ABC-1234 | Toyota KDH                  │                │
│  │ Customer: Michael Brown                │                │
│  │ [92/100] 0 damages  [Completed]        │                │
│  └────────────────────────────────────────┘                │
│  ┌────────────────────────────────────────┐                │
│  │ Jan 24, 2026                           │ ⋮              │
│  │ VAN-5678 | Toyota Hiace                │                │
│  │ Customer: Sarah Johnson                │                │
│  │ [78/100] 3 damages  [Completed]        │                │
│  └────────────────────────────────────────┘                │
│  ┌────────────────────────────────────────┐                │
│  │ Jan 23, 2026                           │ ⋮              │
│  │ CAR-9012 | Suzuki Every                │                │
│  │ Customer: David Lee                    │                │
│  │ [85/100] 2 damages  [Completed]        │                │
│  └────────────────────────────────────────┘                │
│                                                              │
│  [1] [2] [3] ... [10] →                                    │
│                                                              │
│  Click card ────────────────────────────┐                  │
│                                          │                  │
└──────────────────────────────────────────┼──────────────────┘
                                           │
                                           ▼
┌──────────────────────────────────────────────────────────────┐
│         INSPECTION DETAIL (14)                               │
│         /driver/history/:id                                   │
│                                                              │
│  Report ID: #INS-2026-0001  [Completed]                     │
│  Date: Jan 25, 2026 2:30 PM                                 │
│  Inspector: Driver Name                                     │
│                                                              │
│  🚗 Vehicle Information                                     │
│  ┌────────────────────────────────────────┐                │
│  │ [Vehicle Photo]                        │                │
│  │ ABC-1234                               │                │
│  │ Toyota KDH Van 2020                    │                │
│  └────────────────────────────────────────┘                │
│                                                              │
│  👤 Customer Information                                    │
│  ┌────────────────────────────────────────┐                │
│  │ Name: Michael Brown                    │                │
│  │ Phone: +94 77 123 4567 📞              │                │
│  │ NIC: 199012345678                      │                │
│  │ Rental: Jan 25 → Jan 30                │                │
│  └────────────────────────────────────────┘                │
│                                                              │
│         ┌──────────────┐                                    │
│         │      92      │  ← Health Score                    │
│         │    ──────    │                                    │
│         │     /100     │                                    │
│         │  [EXCELLENT] │                                    │
│         └──────────────┘                                    │
│                                                              │
│  ⚠️  Damage Summary                                         │
│  2 damages | [2 Minor] [0 Moderate] [0 Major]              │
│                                                              │
│  📸 Photos (8) ▼                                            │
│  [Collapsible photo grid]                                  │
│                                                              │
│  📋 Damage Details (2) ▼                                    │
│  [Collapsible damage list]                                 │
│                                                              │
│  ✍️  Signatures ▼                                           │
│  [Driver & Customer signatures]                            │
│                                                              │
│  [Download PDF] [Share Report]                             │
│                                                              │
└──────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════

From Dashboard, Profile icon, or Bottom Nav:

         ▼
┌──────────────────────────────────────────────────────────────┐
│            DRIVER PROFILE (15)                               │
│            /driver/profile                                    │
│                                                              │
│  ┌────────────────────────────────────────┐                │
│  │         ┌──────────┐                   │                │
│  │         │  👤📷   │  ← Avatar          │                │
│  │         └──────────┘                   │                │
│  │      Kamal Perera                      │                │
│  │      kamal@kith.lk                     │                │
│  │      +94 77 123 4567                   │                │
│  │      Driver ID: #DRV-0123              │                │
│  │      [Edit Profile]                    │                │
│  └────────────────────────────────────────┘                │
│                                                              │
│  Statistics                                                 │
│  ┌──────────┬──────────┬──────────┐                        │
│  │ 📋 156   │ 📅 23    │ ⭐ 78    │                        │
│  │ Total    │ This     │ Avg      │                        │
│  │Inspec.   │ Month    │ Score    │                        │
│  └──────────┴──────────┴──────────┘                        │
│                                                              │
│  Account Information                                        │
│  Name: Kamal Perera                                        │
│  Email: kamal@kith.lk                                      │
│  Phone: +94 77 123 4567                                    │
│  Joined: Jan 15, 2024                                      │
│                                                              │
│  Settings                                                   │
│  Language: [English ▼]                                     │
│  Notifications: [ON ⚡]                                     │
│  Location: [ON 📍]                                         │
│                                                              │
│  Security                                                   │
│  [🔒 Change Password] ──────────────────┐                 │
│  [🛡️  Privacy Policy]                   │                 │
│  [📄 Terms of Service]                   │                 │
│                                           │                 │
│  [🚪 Logout]                              │                 │
│                                           │                 │
│  Edit Profile ──────────────────┐        │                 │
│                                  │        │                 │
└──────────────────────────────────┼────────┼─────────────────┘
                                   │        │
                 ┌─────────────────┘        │
                 │                          │
                 ▼                          ▼
┌──────────────────────────┐   ┌──────────────────────────┐
│  EDIT PROFILE (16)       │   │  CHANGE PASSWORD (17)    │
│  /driver/profile/edit     │   │  /driver/profile/        │
│                          │   │  change-password         │
│  ┌──────────┐           │   │                          │
│  │  👤📷   │           │   │  Current Password:       │
│  └──────────┘           │   │  [____________] 👁️       │
│  [Change Photo]         │   │                          │
│  [Remove Photo]         │   │  New Password:           │
│                          │   │  [____________] 👁️       │
│  Name: [__________]     │   │  [█████░░░] Strength     │
│  Email: [_________]     │   │                          │
│  Phone: [_________]     │   │  Requirements:           │
│  DOB: [📅________]      │   │  ✓ 8+ characters         │
│  Address: [_______]     │   │  ✓ Uppercase             │
│                          │   │  ✓ Number                │
│  ⚠️  Unsaved changes    │   │  ✓ Special char          │
│                          │   │                          │
│  [Cancel] [Save]        │   │  Confirm:                │
│                          │   │  [____________] 👁️       │
│                          │   │                          │
│                          │   │  [Cancel] [Update]       │
└──────────────────────────┘   └──────────────────────────┘

═══════════════════════════════════════════════════════════════

              BOTTOM NAVIGATION (Mobile)

═══════════════════════════════════════════════════════════════

┌──────────────────────────────────────────────────────────────┐
│  [🏠 Home]     [📋 History]     [👤 Profile]                │
│   Active      (to History)     (to Profile)                 │
└──────────────────────────────────────────────────────────────┘
```

---

## 🔄 Key Navigation Paths

### Primary Inspection Flow
```
Login → Dashboard → Vehicle Selection → Customer Details → 
Photo Capture → Photo Review → AI Processing → Results → 
Signatures → Report Generated → Dashboard
```

### History Flow
```
Dashboard → History List → Inspection Detail → 
(Download PDF / Share)
```

### Profile Flow
```
Dashboard → Profile → Edit Profile → Save → Profile
Dashboard → Profile → Change Password → Update → Profile
```

### Quick Actions
```
Dashboard → [Start Inspection] → Vehicle Selection
Dashboard → [View History] → History List
Dashboard → [My Profile] → Profile
```

---

## 📱 Mobile Bottom Navigation Routes

- **Home Icon** → `/driver/dashboard`
- **History Icon** → `/driver/history`
- **Profile Icon** → `/driver/profile`

---

## 🎯 Entry Points

1. **Login** (`/driver/login`) - Main entry
2. **Dashboard** (`/driver/dashboard`) - After login
3. **Forgot Password** (`/driver/forgot-password`) - From login

---

## 🔒 Protected Routes

All routes except `/driver/login` and `/driver/forgot-password` should be protected and require authentication.

---

**This flow diagram shows the complete navigation structure of all 17 driver pages!**
