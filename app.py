# Simple Flask Web Application
# Assignment for First Semester Python Students

# Import Flask - a web framework for Python
from flask import Flask, render_template, request

# Create a Flask application instance
# __name__ tells Flask where to look for templates and static files
app = Flask(__name__)


# Define a route for the home page
# The @app.route decorator tells Flask what URL should trigger this function
@app.route('/')
def home():
    """
    This function runs when someone visits the home page (/)
    It renders the HTML template and passes data to it
    """
    return render_template('index.html')


# Define a route that handles form submissions
# methods=['GET', 'POST'] allows this route to handle both GET and POST requests
@app.route('/greet', methods=['POST'])
def greet():
    """
    This function runs when the form is submitted
    It gets the name from the form and displays a greeting
    """
    # Get the 'name' value from the form submission
    name = request.form.get('name', 'Friend')

    # Render the greeting template with the name
    return render_template('greeting.html', name=name)


# This runs the Flask application
# debug=True provides helpful error messages and auto-reloads the server
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
