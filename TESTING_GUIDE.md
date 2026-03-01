# FleetGuard AI - Driver Interface Testing Guide

## 🧪 Testing All 17 Driver Pages

---

## 📋 PRE-TESTING CHECKLIST

Before you start testing, ensure:
- ✅ All packages are installed: `npm install` or `pnpm install`
- ✅ Development server is running: `npm run dev`
- ✅ Browser console is open (F12) to check for errors
- ✅ Test in both light and dark mode
- ✅ Test on different screen sizes (mobile, tablet, desktop)

---

## 🔐 AUTHENTICATION FLOW (Pages 1-2)

### Page 1: Driver Login (`/driver/login`)

**Test Cases:**
1. **Empty Form Submission**
   - Leave fields empty
   - Click "Login"
   - ✅ Should show validation errors

2. **Invalid Email**
   - Enter: `notanemail`
   - ✅ Should show email validation error

3. **Valid Login**
   - Email: `driver@example.com`
   - Password: `password123`
   - ✅ Should redirect to `/driver/dashboard`

4. **Remember Me**
   - Check "Remember me"
   - Login
   - ✅ Checkbox should persist (future: save to localStorage)

5. **Google OAuth**
   - Click "Sign in with Google"
   - ✅ Should open Google OAuth flow

6. **Forgot Password Link**
   - Click "Forgot Password?"
   - ✅ Should navigate to `/driver/forgot-password`

7. **Dark Mode**
   - Toggle dark mode
   - ✅ All elements should be visible and styled correctly

---

### Page 2: Password Reset (`/driver/forgot-password`)

**Test Cases:**
1. **Empty Email**
   - Click "Send Reset Link"
   - ✅ Should show validation error

2. **Invalid Email**
   - Enter: `notanemail`
   - ✅ Should show email format error

3. **Valid Email**
   - Enter: `driver@example.com`
   - Click "Send Reset Link"
   - ✅ Should show success message
   - ✅ Should show countdown timer (60s)

4. **Resend Link**
   - Wait for countdown to finish
   - Click "Resend Link"
   - ✅ Should restart countdown

5. **Back to Login**
   - Click "Back to Login"
   - ✅ Should navigate to `/driver/login`

---

## 🏠 MAIN PAGES (Pages 3-4)

### Page 3: Driver Dashboard (`/driver/dashboard`)

**Test Cases:**
1. **Navigation Elements**
   - ✅ Logo is visible
   - ✅ Profile icon is clickable
   - ✅ Welcome message shows "Welcome, Driver"

2. **Location Status**
   - ✅ GPS indicator shows status
   - Click "Update Location"
   - ✅ Should trigger location update

3. **Quick Actions**
   - Click "Start Inspection" card
   - ✅ Should navigate to `/driver/select-vehicle`
   
   - Click "View History" card
   - ✅ Should navigate to `/driver/history`
   
   - Click "My Profile" card
   - ✅ Should navigate to `/driver/profile`

4. **Recent Inspections**
   - ✅ Should show 3 recent inspections
   - ✅ Health scores should be color-coded (green/yellow/red)
   - Click "View Details" on any inspection
   - ✅ Should navigate to inspection detail

5. **Bottom Navigation (Mobile)**
   - Resize to mobile width (<768px)
   - ✅ Bottom nav should appear
   - ✅ Home icon should be highlighted
   - Click History icon
   - ✅ Should navigate to history page

---

### Page 4: Vehicle Selection (`/driver/select-vehicle`)

**Test Cases:**
1. **Vehicle Grid**
   - ✅ Should show vehicle cards with photos
   - ✅ Each card shows: number, make/model, health score, status

2. **Search**
   - Type "CAB" in search bar
   - ✅ Should filter vehicles in real-time
   - ✅ Clear button (×) should appear
   - Click clear button
   - ✅ Should reset search

3. **Filters**
   - Select Status: "Available"
   - ✅ Should show only available vehicles
   - ✅ Filter chip should appear
   - Click × on chip
   - ✅ Should remove filter

4. **Select Vehicle**
   - Click "Select" on any vehicle
   - ✅ Should navigate to `/driver/inspection/customer-details`
   - ✅ Vehicle info should be stored in context

5. **Empty State**
   - Search for non-existent vehicle: "ZZZZZ"
   - ✅ Should show empty state illustration
   - ✅ Should show "Clear filters" button

---

## 🔍 INSPECTION FLOW (Pages 5-12)

### Page 5: Customer Details (`/driver/inspection/customer-details`)

**Test Cases:**
1. **Progress Indicator**
   - ✅ Step 1 should be active (blue)
   - ✅ Steps 2 and 3 should be inactive (gray)

2. **Vehicle Summary**
   - ✅ Should show selected vehicle info

3. **Form Validation**
   - Click "Next: Take Photos" with empty form
   - ✅ Should show validation errors on all required fields

4. **Name Input**
   - Enter: "John Doe"
   - ✅ Error should disappear

5. **NIC Input**
   - Enter: "199012345678"
   - ✅ Should accept

6. **Phone Input**
   - Enter: "+94 77 123 4567"
   - ✅ Should accept with validation

7. **Date Pickers**
   - Click Rental Start date
   - ✅ Calendar should open
   - Select today's date
   - ✅ Should populate field
   
   - Click Rental End date
   - Try selecting a date before start date
   - ✅ Should be disabled

8. **Submit Form**
   - Fill all required fields
   - Click "Next: Take Photos"
   - ✅ Should navigate to `/driver/inspection/photos`
   - ✅ Data should be saved in context

9. **Cancel**
   - Click "Cancel"
   - ✅ Should navigate back to vehicle selection

---

### Page 6: Photo Capture (`/driver/inspection/photos`)

**Test Cases:**
1. **Progress Indicator**
   - ✅ Step 2 should be active
   - ✅ Step 1 should show checkmark

2. **Camera Permission**
   - ✅ Browser should request camera permission
   - If denied:
     - ✅ Should show error message
     - ✅ Should show "Try Again" button

3. **Camera Controls**
   - Click flash toggle
   - ✅ Icon should change
   
   - Click camera flip
   - ✅ Should switch between front/rear camera
   
   - Click grid toggle
   - ✅ Grid overlay should appear/disappear

4. **Capture Photos**
   - Click large capture button
   - ✅ Should capture photo
   - ✅ Photo should appear in thumbnail strip
   - ✅ Progress should update (1/8)
   - ✅ Current photo prompt should advance to next

5. **Retake Photo**
   - Click × on a captured thumbnail
   - ✅ Should reset that photo slot
   - ✅ Should allow re-capture

6. **Complete 8 Photos**
   - Capture all 8 required photos
   - ✅ Progress should show 8/8
   - ✅ Should auto-navigate to review page

7. **Review Button**
   - After capturing 4+ photos
   - Click "Review (4/8)"
   - ✅ Should navigate to review page

---

### Page 7: Photo Review (`/driver/inspection/review-photos`)

**Test Cases:**
1. **Photo Grid**
   - ✅ Should show all captured photos
   - ✅ Each photo should have label
   - ✅ Captured photos should have checkmark

2. **Retake**
   - Click "Retake" on any photo
   - ✅ Should navigate back to camera
   - ✅ Should be on correct photo slot

3. **Enlarge Photo**
   - Click on any photo
   - ✅ Should open modal with full-size image
   - Click outside or close button
   - ✅ Should close modal

4. **Approval Checkbox**
   - Try clicking "Upload & Analyze" without checking
   - ✅ Should show error toast
   
   - Check "All photos are clear and accurate"
   - Click "Upload & Analyze"
   - ✅ Should show upload progress
   - ✅ Should navigate to processing screen

5. **Minimum Photos Warning**
   - If less than 6 photos
   - ✅ Should show warning card
   - ✅ Upload button should be disabled

---

### Page 8: AI Processing (`/driver/inspection/processing`)

**Test Cases:**
1. **Visual Design**
   - ✅ Should show gradient background
   - ✅ Should show animated spinner
   - ✅ Should show AI icon

2. **Progress Updates**
   - ✅ Progress should increment 0% → 100%
   - ✅ Messages should cycle through:
     - "Uploading photos..."
     - "Analyzing damage..."
     - "Calculating health score..."
     - "Generating report..."

3. **Step Indicators**
   - ✅ Completed steps should show checkmark
   - ✅ Active step should have spinner
   - ✅ Pending steps should be dim

4. **Auto-Redirect**
   - Wait for processing to complete (100%)
   - ✅ Should auto-navigate to `/driver/inspection/results`

5. **No Back Button**
   - ✅ Back button should be disabled
   - ✅ User cannot leave during processing

---

### Page 9: Inspection Results (`/driver/inspection/results`)

**Test Cases:**
1. **Health Score**
   - ✅ Should show large circular score
   - ✅ Color should match score:
     - Green: 80-100
     - Yellow: 60-79
     - Red: <60
   - ✅ Should show label (Excellent/Good/Poor)

2. **Damage Summary**
   - ✅ Should show total damage count
   - ✅ Should show severity breakdown badges

3. **Photo Gallery**
   - ✅ Should show all 8 photos in grid
   - ✅ Photos with damage should have red badge with count
   - Click on photo
   - ✅ Should open modal
   - ✅ Should show damage count in modal

4. **Damage List**
   - ✅ Should show all detected damages
   - Click to expand a damage item
   - ✅ Should show full photo
   - ✅ Should show severity badge
   - ✅ Should show location
   - ✅ Should show AI confidence %

5. **Retake Photos**
   - Click "Retake Photos"
   - ✅ Should show confirmation
   - Confirm
   - ✅ Should navigate back to camera

6. **Continue**
   - Click "Continue to Signatures"
   - ✅ Should navigate to `/driver/inspection/signatures`

---

### Page 10: Digital Signatures (`/driver/inspection/signatures`)

**Test Cases:**
1. **Signature Pads**
   - ✅ Should show 2 signature pads
   - ✅ White background with dashed border

2. **Driver Signature**
   - Draw signature on first pad
   - ✅ Should capture signature
   - ✅ Checkmark should appear
   
   - Click "Clear"
   - ✅ Should erase signature
   - ✅ Checkmark should disappear

3. **Customer Signature**
   - Draw signature on second pad
   - ✅ Should capture signature
   - ✅ Checkmark should appear

4. **Agreement Checkbox**
   - Try clicking "Generate Report" without signatures
   - ✅ Should show error toast
   
   - Sign both pads but don't check agreement
   - ✅ Should show error toast
   
   - Check agreement
   - ✅ Button should enable

5. **Generate Report**
   - Complete all requirements
   - Click "Generate PDF Report"
   - ✅ Should show loading spinner
   - ✅ Should navigate to report page

---

### Page 11: Report Generated (`/driver/inspection/report`)

**Test Cases:**
1. **Success Message**
   - ✅ Should show green checkmark
   - ✅ Should show "Inspection Complete!"
   - ✅ Should display Report ID

2. **Report Summary**
   - ✅ Should show vehicle number
   - ✅ Should show customer name
   - ✅ Should show date/time
   - ✅ Should show health score
   - ✅ Should show damage count

3. **Download PDF**
   - Click "Download PDF"
   - ✅ Should generate PDF file
   - ✅ Should trigger download
   - ✅ PDF should contain:
     - Header with logo
     - Vehicle info
     - Customer info
     - Health score
     - Damage details
     - Signatures

4. **Share via WhatsApp**
   - Click "WhatsApp" button
   - ✅ Should open share modal
   - ✅ WhatsApp tab should be active
   - ✅ Phone should be pre-filled
   - ✅ Message should be pre-filled
   
   - Edit message
   - Click "Send via WhatsApp"
   - ✅ Should open WhatsApp

5. **Share via Email**
   - Click "Email" button
   - ✅ Should open share modal
   - Click "Email" tab
   - ✅ Email tab should be active
   - Enter email address
   - Click "Send Email"
   - ✅ Should show success message

6. **Start New Inspection**
   - Click "Start New Inspection"
   - ✅ Should reset context
   - ✅ Should navigate to vehicle selection

7. **Back to Dashboard**
   - Click "Back to Dashboard"
   - ✅ Should navigate to `/driver/dashboard`

---

### Page 12: Share Modal (Part of Page 11)

**Test Cases:**
1. **Modal Open/Close**
   - ✅ Should open when share button clicked
   - Click outside modal
   - ✅ Should close
   
   - Click × button
   - ✅ Should close

2. **Tab Switching**
   - Click "Email" tab
   - ✅ Should switch to email form
   
   - Click "WhatsApp" tab
   - ✅ Should switch back

3. **WhatsApp Form**
   - ✅ Phone should be pre-filled from customer data
   - Edit message
   - ✅ Character count should update
   - Click "Send"
   - ✅ Should open WhatsApp with pre-filled message

4. **Email Form**
   - Enter email
   - ✅ Should validate email format
   - Edit subject
   - Edit message
   - Click "Send Email"
   - ✅ Should show loading
   - ✅ Should show success toast
   - ✅ Should close modal

---

## 📋 HISTORY & PROFILE (Pages 13-17)

### Page 13: Inspection History (`/driver/history`)

**Test Cases:**
1. **Inspection List**
   - ✅ Should show list of inspections
   - ✅ Each card should show:
     - Vehicle number
     - Customer name
     - Date
     - Health score
     - Damage count

2. **Search**
   - Type vehicle number in search
   - ✅ Should filter results
   - Type customer name
   - ✅ Should filter results

3. **Filter**
   - Select status filter
   - ✅ Should filter by status
   
   - Select date range
   - ✅ Should filter by date

4. **Sort**
   - Select "Newest First"
   - ✅ Should sort descending
   
   - Select "Health Score (High to Low)"
   - ✅ Should sort by score

5. **View Details**
   - Click on any inspection card
   - ✅ Should navigate to detail page

6. **Three-Dot Menu**
   - Click ⋮ menu
   - ✅ Should show options:
     - View Details
     - Download PDF
     - Share
     - Delete
   
   - Click "Delete"
   - ✅ Should show confirmation
   - Confirm
   - ✅ Should remove from list

7. **Empty State**
   - Apply filters that match nothing
   - ✅ Should show empty state
   - ✅ Should show "Clear filters" button

---

### Page 14: Inspection Detail (`/driver/history/:id`)

**Test Cases:**
1. **Header**
   - ✅ Should show Report ID
   - ✅ Should show status badge
   - ✅ Should show date/time

2. **Vehicle Info**
   - ✅ Should show vehicle photo
   - ✅ Should show vehicle number
   - ✅ Should show make/model

3. **Customer Info**
   - ✅ Should show all customer details
   - Click phone number
   - ✅ Should open dialer
   
   - Click email
   - ✅ Should open email client

4. **Health Score**
   - ✅ Should show large circular score
   - ✅ Should show comparison if available

5. **Damage Details**
   - ✅ Damage section should be expanded by default
   - Click to collapse
   - ✅ Should collapse
   
   - Click to expand
   - ✅ Should expand

6. **Photos Section**
   - Click photos section header
   - ✅ Should expand/collapse
   
   - When expanded:
     - ✅ Should show photo grid
     - Click photo
     - ✅ Should open full-size modal

7. **Action Buttons**
   - Click "Download PDF"
   - ✅ Should download PDF
   
   - Click "Share Report"
   - ✅ Should open share modal

---

### Page 15: Driver Profile (`/driver/profile`)

**Test Cases:**
1. **Profile Header**
   - ✅ Should show avatar
   - ✅ Should show driver name
   - ✅ Should show email, phone
   - ✅ Should show Driver ID

2. **Statistics Cards**
   - ✅ Should show Total Inspections
   - ✅ Should show This Month count
   - ✅ Should show Average Score

3. **Account Information**
   - ✅ Should display all personal details
   - ✅ Should show GPS permission status

4. **Settings**
   - Change language
   - ✅ Should show dropdown with options
   - ✅ Should show success toast
   
   - Toggle notifications
   - ✅ Should toggle switch
   - ✅ Should show toast
   
   - Toggle location sharing
   - ✅ Should toggle switch

5. **Edit Profile**
   - Click "Edit Profile"
   - ✅ Should navigate to edit page

6. **Change Password**
   - Click "Change Password"
   - ✅ Should navigate to change password page

7. **Logout**
   - Click "Logout"
   - ✅ Should show confirmation dialog
   - Confirm
   - ✅ Should navigate to login page

---

### Page 16: Edit Profile (`/driver/profile/edit`)

**Test Cases:**
1. **Form Pre-fill**
   - ✅ All fields should show current values

2. **Photo Upload**
   - Click "Change Photo"
   - ✅ Should open file picker
   
   - Click "Remove Photo"
   - ✅ Should show confirmation
   - ✅ Should remove photo

3. **Edit Fields**
   - Change name
   - ✅ Unsaved changes warning should appear
   
   - Change email
   - ✅ Should validate email format
   
   - Change phone
   - ✅ Should validate phone format

4. **Date Picker**
   - Click date of birth
   - ✅ Calendar should open
   - Select date
   - ✅ Should populate field

5. **Cancel**
   - Make changes
   - Click "Cancel"
   - ✅ Should show unsaved changes warning
   - Confirm
   - ✅ Should navigate back

6. **Save**
   - Make valid changes
   - Click "Save Changes"
   - ✅ Should show loading
   - ✅ Should show success toast
   - ✅ Should navigate to profile page

---

### Page 17: Change Password (`/driver/profile/change-password`)

**Test Cases:**
1. **Password Fields**
   - ✅ All should be type="password"
   - Click show/hide icons
   - ✅ Should toggle visibility

2. **Current Password**
   - Leave empty
   - Click "Update Password"
   - ✅ Should show validation error

3. **New Password**
   - Type: "abc"
   - ✅ Strength indicator should show "Weak"
   - ✅ Requirements should show X marks
   
   - Type: "Abc123!@"
   - ✅ Strength indicator should show "Strong"
   - ✅ Requirements should show checkmarks

4. **Password Requirements**
   - ✅ Should show 5 requirements
   - ✅ Should update in real-time as you type
   - ✅ Met requirements should be green with ✓
   - ✅ Unmet should be gray with ×

5. **Confirm Password**
   - Type different password
   - ✅ Should show "Passwords do not match" error
   
   - Type matching password
   - ✅ Error should disappear

6. **Submit**
   - Fill all fields correctly
   - Click "Update Password"
   - ✅ Should show loading
   - ✅ Should show success toast
   - ✅ Should auto-redirect to profile

---

## 🌓 DARK MODE TESTING

Test **every page** in dark mode:

1. Toggle dark mode (use browser extension or system settings)
2. ✅ Text should be readable (light on dark)
3. ✅ Cards should have dark background
4. ✅ Borders should be visible
5. ✅ Buttons should maintain contrast
6. ✅ Forms should have proper input background
7. ✅ Icons should be visible
8. ✅ Health scores should maintain color coding
9. ✅ Badges should be readable

---

## 📱 RESPONSIVE TESTING

Test **every page** at these breakpoints:

### Mobile (375px - iPhone)
- ✅ Bottom navigation appears
- ✅ Single column layout
- ✅ Cards stack vertically
- ✅ Buttons are full-width
- ✅ Text is readable
- ✅ Touch targets are 44x44px minimum

### Tablet (768px - iPad)
- ✅ 2-column grids
- ✅ Sidebar collapses (manager pages)
- ✅ Cards in 2 columns
- ✅ Appropriate spacing

### Desktop (1440px)
- ✅ 3-4 column grids
- ✅ Sidebar visible (manager pages)
- ✅ Proper max-width containers
- ✅ Larger cards and spacing

---

## 🐛 BUG REPORTING

If you find issues, report them with:
1. **Page name** (e.g., "Photo Capture")
2. **Route** (e.g., `/driver/inspection/photos`)
3. **Steps to reproduce**
4. **Expected behavior**
5. **Actual behavior**
6. **Screenshot** (if visual)
7. **Browser** and **device**

---

## ✅ COMPLETION CHECKLIST

After testing all 17 pages:

- [ ] All pages load without errors
- [ ] All navigation works correctly
- [ ] All forms validate properly
- [ ] All buttons perform expected actions
- [ ] All modals open and close correctly
- [ ] Dark mode works on all pages
- [ ] Mobile responsive on all pages
- [ ] No console errors
- [ ] Context data flows correctly through inspection
- [ ] PDF generates correctly
- [ ] Sharing features work
- [ ] Search and filters work
- [ ] Camera captures photos
- [ ] Signatures save correctly

---

## 🎉 SUCCESS!

If all tests pass, you have a **fully functional Driver Interface** ready for production!

Next steps:
1. Connect to real backend API
2. Add real authentication
3. Integrate actual AI damage detection
4. Deploy to production

---

**Happy Testing! 🚀**
