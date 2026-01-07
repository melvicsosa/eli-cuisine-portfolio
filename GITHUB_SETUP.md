# GitHub Setup Workflow

Follow these steps to connect your local project to GitHub.

## 1. Initialize Git Locally

Open your terminal in the project folder and run:

```bash
# Initialize a new git repository
git init

# Add all files to the staging area
git add .

# Create the first commit
git commit -m "Initial commit: Next.js portfolio setup"
```

## 2. Create a Repository on GitHub

1.  Log in to [GitHub.com](https://github.com).
2.  Click the **+** icon in the top right and select **New repository**.
3.  **Repository name**: `eli-cuisine-portfolio` (or your preferred name).
4.  **Public/Private**: Choose your preference.
5.  **Do not** check "Initialize with README" (since we already have code).
6.  Click **Create repository**.

## 3. Connect and Push

Copy the commands provided by GitHub under "…or push an existing repository from the command line", which look like this:

```bash
# Link your local repo to the remote GitHub repo
# Replace <YOUR_USERNAME> with your actual GitHub username
git remote add origin https://github.com/<YOUR_USERNAME>/eli-cuisine-portfolio.git

# Rename the branch to main (best practice)
git branch -M main

# Push your code
git push -u origin main
```

## 4. Next Steps

Once your code is on GitHub, you can proceed to **Render** deployment.
Refer to the `DEPLOY_RENDER.md` file significantly for those steps.
