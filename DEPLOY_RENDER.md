# Deployment to Render

This project is built with Next.js and is ready to deploy on **Render.com**.

## How it works

1.  **Form Submission**: We use Next.js **Server Actions**. When a user fills out the form, the data is sent securely to the server.
    -   Currently, valid submissions will simply be logged to the **server console** (Render logs).
    -   There is no database required for this basic functionality.
    -   The `submitInquiry` action in `app/actions.ts` handles the logic.

2.  **Hosting**: Render builds the Next.js app and serves it.

## Steps to Deploy

1.  **Push to GitHub/GitLab**: Ensure your code is in a remote repository.
2.  **Create a New Web Service on Render**:
    -   Log in to [dashboard.render.com](https://dashboard.render.com).
    -   Click **New +** -> **Web Service**.
    -   Connect your GitHub/GitLab repository.
3.  **Configure the Service**:
    -   **Name**: `eli-cuisine-portfolio` (or your preferred name).
    -   **Runtime**: **Node**.
    -   **Build Command**: `npm install && npm run build`
    -   **Start Command**: `npm start`
    -   **Instance Type**: **Free** (for hobby/personal use).
4.  **Deploy**: Click **Create Web Service**.

## Verification

Once deployed, Render will provide a URL (e.g., `https://eli-cuisine.onrender.com`).
Test the "Inquire" form. When submitted, check the **Logs** tab in your Render dashboard to see the inquiry details printed out:

```
--------------------------------
NEW INQUIRY RECEIVED
--------------------------------
Name:    Eli Allard
Email:   eli@example.com
...
```
