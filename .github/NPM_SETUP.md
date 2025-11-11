# 📦 NPM Auto-Publishing Setup

This guide explains how to set up automatic publishing to NPM when creating a release.

## Prerequisites

1. An account on [npmjs.com](https://www.npmjs.com/)
2. Your package name available on NPM
3. Admin access to this GitHub repository

## Setup Steps

### 1. Create NPM Access Token

1. Go to [npmjs.com/settings/tokens](https://www.npmjs.com/settings/~YOUR_USERNAME/tokens)
2. Click **"Generate New Token"** → **"Classic Token"**
3. Select **"Automation"** type
4. Copy the generated token (starts with `npm_...`)

### 2. Add Token to GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Name: `NPM_TOKEN`
5. Value: Paste your NPM token
6. Click **"Add secret"**

### 3. Create a Release

When you're ready to publish:

1. Go to **Releases** → **Draft a new release**
2. Create a new tag (e.g., `v2.2.5`)
3. Fill in the release title and description
4. Click **"Publish release"**

The GitHub Action will automatically:
- ✅ Run tests
- ✅ Build the package
- ✅ Publish to NPM

## Workflow File

The automation is configured in `.github/workflows/publish.yml`

## Manual Publishing

If you prefer to publish manually:

```bash
npm run build
npm publish
```

## Troubleshooting

**Error: 403 Forbidden**
- Check that your NPM_TOKEN secret is correct
- Verify you have publish permissions for the package

**Error: Package already exists**
- Update the version in `package.json`
- Create a new release tag

**Tests failing**
- Fix the failing tests before publishing
- The workflow won't publish if tests fail

