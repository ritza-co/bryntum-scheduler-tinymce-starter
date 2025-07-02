# Using TinyMCE Rich Text Editor in Bryntum Scheduler

This project demonstrates how to integrate TinyMCE rich text editor with Bryntum Scheduler for enhanced resource descriptions and event details.

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Install Bryntum Scheduler**

   For trial version:

   ```bash
   npm install @bryntum/scheduler@npm:@bryntum/scheduler-trial@6.3.0-alpha-1
   ```

   For licensed version:

   ```bash
   npm install @bryntum/scheduler@6.3.0-alpha-1
   ```

3. **Configure TinyMCE API Key**

   Replace `your-api-key` in the following files with your TinyMCE API key:
   - `src/index.html` (line 12)

4. **Run Development Server**

   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to `http://localhost:5173`

## Project Structure

```
├── src/
|   ├── lib/
│     └── TinyMceField.js     # Custom TinyMCE widget
│   ├── index.html          # Main HTML file
│   ├── main.js            # Scheduler application setup
│   └── styles.css         # Styles and TinyMCE integration
├── package.json
├── vite.config.js
└── README.md
```

## Sample Data

The demo includes:

- **Resources**: Meeting rooms, training facilities, creative spaces, phone booths
- **Events**: Board meetings, client presentations, training sessions, interviews
- **Rich Descriptions**: HTML formatted content with headings, lists, tables, and styling