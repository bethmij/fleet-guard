# Driver Panel Text Visibility Fixes

## Pattern to Apply Across ALL Driver Panel Pages

Replace all instances of these text color classes to make them visible in both light and dark themes:

### Primary Text
- `text-white` → `text-gray-900 dark:text-white`

### Secondary Text  
- `text-slate-300` → `text-gray-700 dark:text-slate-300`
- `text-slate-400` → `text-gray-600 dark:text-slate-400`
- `text-slate-200` → `text-gray-800 dark:text-slate-200`
- `text-slate-500` → `text-gray-500 dark:text-slate-500`

### Icons
- Icons with `text-slate-300` → `text-gray-600 dark:text-slate-300`
- Icons with `text-white` → `text-gray-900 dark:text-white`

### Backgrounds for Glass Cards
- `bg-white/5` → `bg-white dark:bg-white/5`
- `bg-white/10` → `bg-gray-50 dark:bg-white/10`
- `border-white/10` → `border-gray-200 dark:border-white/10`
- `border-white/20` → `border-gray-300 dark:border-white/20`

### Hover States
- `hover:text-white` → `hover:text-gray-900 dark:hover:text-white`
- `hover:bg-white/5` → `hover:bg-gray-100 dark:hover:bg-white/5`
- `hover:bg-white/10` → `hover:bg-gray-100 dark:hover:bg-white/10`

## Files Requiring Updates

### Completed:
✅ DriverDashboard.tsx - ALL text now visible in light mode

### Remaining:
- [ ] DriverProfile.tsx
- [ ] EditDriverProfile.tsx  
- [ ] ChangePassword.tsx
- [ ] InspectionHistory.tsx
- [ ] InspectionDetail.tsx
- [ ] inspection/VehicleSelection.tsx
- [ ] inspection/CustomerDetails.tsx
- [ ] inspection/PhotoCapture.tsx (keep dark for camera UI)
- [ ] inspection/PhotoReview.tsx
- [ ] inspection/AIProcessing.tsx
- [ ] inspection/InspectionResults.tsx
- [ ] inspection/DigitalSignatures.tsx
- [ ] inspection/ReportGenerated.tsx

## Implementation Strategy

For each page:
1. Read the file
2. Apply the text color replacements
3. Update glass card backgrounds
4. Fix button text colors
5. Test in both light and dark modes
