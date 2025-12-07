# Flask Web Application Assignment

A simple Flask web application for first semester Python students.

## What is Flask?

Flask is a lightweight web framework for Python that makes it easy to build web applications. It's perfect for beginners because it's simple and easy to understand.

## Project Structure

```
.
├── app.py                  # Main Python Flask application
├── requirements.txt        # Python dependencies
├── templates/              # HTML templates folder
│   ├── index.html         # Home page template
│   └── greeting.html      # Greeting page template
└── README.md              # This file
```

## Installation Instructions

### Step 1: Install Flask

Open your terminal/command prompt and run:

```bash
pip install -r requirements.txt
```

Or install Flask directly:

```bash
pip install Flask
```

### Step 2: Run the Application

Run the Flask application:

```bash
python app.py
```

### Step 3: View in Browser

Open your web browser and go to:

```
http://localhost:5000
```

You should see the welcome page!

## How It Works

1. **app.py** - The main Python file that:
   - Creates a Flask application
   - Defines routes (URLs) for the website
   - Handles form submissions
   - Renders HTML templates

2. **templates/index.html** - The home page that:
   - Displays a welcome message
   - Shows a form to enter your name
   - Submits the form to the `/greet` route

3. **templates/greeting.html** - The greeting page that:
   - Displays a personalized greeting
   - Uses template variables from Python
   - Provides a link back to the home page

## Learning Objectives

Students will learn:
- How to create a basic Flask application
- How to define routes and functions
- How to render HTML templates
- How to handle form submissions
- How to pass data from Python to HTML

## Ideas for Extension

Challenge yourself by trying to:
1. Add more pages (like an About page)
2. Change the styling (colors, fonts, layout)
3. Add more form fields (age, favorite color, etc.)
4. Create a simple calculator or converter using forms
5. Add images or more content to the pages

## Troubleshooting

- **Module not found error**: Make sure you installed Flask using `pip install Flask`
- **Port already in use**: Change the port number in app.py (e.g., port=5001)
- **Page not loading**: Make sure the Flask server is running in your terminal

## Resources

- [Flask Documentation](https://flask.palletsprojects.com/)
- [HTML Tutorial](https://www.w3schools.com/html/)
- [CSS Tutorial](https://www.w3schools.com/css/)
