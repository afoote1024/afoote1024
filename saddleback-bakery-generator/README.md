# Saddleback Bakery Case Study Generator

A student-friendly web application that helps users create professional case studies from interview summaries, featuring bakery-themed branding and PDF export functionality.

## 🥖 Tech Stack

This application uses a simple, accessible tech stack perfect for learning:

- **HTML5**: Semantic page structure
- **CSS3**: Modern styling with CSS Grid/Flexbox for responsive layouts
- **Vanilla JavaScript (ES6+)**: No frameworks needed - pure JavaScript for all interactivity
- **jsPDF Library**: Client-side PDF generation (via CDN)
- **Google Fonts**: Playfair Display and Lato for bakery-appropriate typography

## 🎯 Features

1. **Bakery-Themed Landing Page**: Warm colors and imagery evoking fresh bread and pastries
2. **Input Fields**: Title and summary inputs for case study content
3. **AI-Style Expansion**: Expands short summaries into 400-600 word case studies
4. **Live Preview**: See your formatted case study before downloading
5. **PDF Download**: One-click PDF export with bakery-themed styling

## 📁 Project Structure

```
saddleback-bakery-generator/
├── index.html          # Main HTML structure
├── styles.css          # Bakery-themed styling
├── app.js              # Application logic
└── README.md           # This file
```

## 🚀 How to Run

1. Simply open `index.html` in a modern web browser (Chrome, Firefox, Safari, or Edge)
2. No build process or server required!
3. For best results, use a browser with JavaScript enabled

## 💡 How It Works

### Case Study Generation
The app takes your summary and:
1. Analyzes the content to identify key themes
2. Expands it with professional business writing patterns
3. Structures it into sections (Background, Challenge, Approach, Results)
4. Maintains context while reaching the 400-600 word target

### PDF Generation
Uses the jsPDF library to:
1. Create a professionally formatted PDF document
2. Apply bakery-themed headers and styling
3. Format text with proper spacing and typography
4. Download directly to the user's device

## 📝 Usage Instructions for Students

1. **Enter a Title**: Type your case study title (e.g., "Saddleback Bakery Customer Experience Study")
2. **Add Your Summary**: Paste or type your interview summary (2-3 paragraphs recommended)
3. **Click "Generate Case Study"**: The app expands your summary into a full case study
4. **Review the Preview**: Check the generated content in the preview area
5. **Download PDF**: Click the download button to save your case study

## 🎨 Customization Ideas

- Change the color scheme in `styles.css` (look for `:root` CSS variables)
- Modify the case study template in `app.js` (the `expandSummary()` function)
- Add additional input fields for more structured data
- Implement different export formats (Word, Markdown, etc.)

## 🔧 Technical Notes

- **No Backend Required**: Everything runs in the browser
- **Privacy-Friendly**: No data is sent to external servers
- **Offline Capable**: Works without internet (after initial load)
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 📚 Learning Objectives

This project demonstrates:
- DOM manipulation and event handling
- String processing and text generation
- Working with external libraries (jsPDF)
- CSS layout techniques (Grid and Flexbox)
- Creating polished, professional user interfaces
- Client-side file generation and downloads

## 🌟 Future Enhancement Ideas

- Add more case study templates
- Implement local storage to save drafts
- Add rich text editing for the preview
- Include charts/graphs in the PDF
- Multi-page case study support
- Export to multiple formats
