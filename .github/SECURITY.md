# Security Policy

## Supported Versions

We actively support the following versions of Vue3 Tooltip with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 2.3.x   | :white_check_mark: |
| 2.2.x   | :white_check_mark: |
| 2.1.x   | :x:                |
| < 2.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please follow these steps:

### 🔒 Private Disclosure

**Please DO NOT open a public issue.** Instead, report security vulnerabilities privately:

1. **Email:** [neluckoff@gmail.com](mailto:neluckoff@gmail.com)
2. **Subject:** `[SECURITY] Vue3 Tooltip - Brief description`
3. **Include:**
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)
   - Your contact information

### ⏱️ Response Timeline

- **Initial Response:** Within 48 hours
- **Status Update:** Within 7 days
- **Fix Timeline:** Depends on severity
  - Critical: 1-3 days
  - High: 1-2 weeks
  - Medium: 2-4 weeks
  - Low: Next release cycle

### 🎯 Severity Levels

- **Critical:** Remote code execution, data breach
- **High:** XSS vulnerabilities, authentication bypass
- **Medium:** Information disclosure, DoS
- **Low:** Minor issues with limited impact

### ✅ What Happens Next

1. We'll acknowledge receipt of your report
2. We'll investigate and validate the issue
3. We'll develop and test a fix
4. We'll release a security patch
5. We'll publicly disclose the issue (with credit to you, if desired)

### 🏆 Recognition

We appreciate security researchers who help keep Vue3 Tooltip safe:
- You'll be credited in the release notes (unless you prefer anonymity)
- Your contribution will be mentioned in our CHANGELOG
- We'll add you to our security acknowledgments

## Security Best Practices

When using Vue3 Tooltip:

1. **Always use the latest version** to benefit from security patches
2. **Sanitize user input** if passing dynamic content to tooltips
3. **Review CSP policies** to ensure compatibility
4. **Monitor dependencies** using `npm audit` regularly

## Known Security Considerations

### Content Sanitization

Vue3 Tooltip renders text content. If you're displaying user-generated content:

```vue
<!-- ❌ Avoid -->
<div v-tooltip="userInput">...</div>

<!-- ✅ Better -->
<div v-tooltip="sanitizeInput(userInput)">...</div>
```

Vue 3's template compiler provides built-in XSS protection, but always sanitize untrusted input.

## Contact

For security-related questions or concerns:
- **Email:** neluckoff@gmail.com
- **GitHub:** [@neluckoff](https://github.com/neluckoff)

---

**Thank you for helping keep Vue3 Tooltip and its users safe!** 🛡️

