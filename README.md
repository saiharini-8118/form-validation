# JavaScript Form Validation Project

A creative and responsive Form Validation Web Application developed using HTML, CSS, Bootstrap, and JavaScript. The project includes an interactive landing page, smooth scrolling registration form, custom validation logic, and a success page after successful registration.

---

## Features

### Landing Page
- Modern introduction section
- Smooth scroll navigation
- Responsive UI design

### Registration Form
- Full Name Validation
- Email Validation
- Phone Number Validation
- Password Strength Validation
- Confirm Password Matching
- Error Messages for Invalid Inputs
- Responsive Bootstrap Form Design

### Success Page
- Redirects after successful validation
- Registration success message
- Navigation back to homepage

---

## Validation Rules

- Name must contain at least 5 characters
- Email must contain `@`
- Phone number must:
  - Be exactly 10 digits
  - Not be `1234567890`
- Password must:
  - Be at least 8 characters
  - Not be `password`
  - Not match the user's name
- Password and Confirm Password must match

---

## Technologies Used

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- GitHub
- Netlify

---

## Project Structure

```bash
form-validation/
│
├── form.html
├── success.html
├── form.css
└── form.js
