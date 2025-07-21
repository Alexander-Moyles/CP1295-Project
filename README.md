# QuickNotes

A browser-based sticky note application that allows users to create, edit, move, and delete virtual sticky notes directly in the browser.

## Purpose

QuickNotes is a compact single-page web app that lets users create, move, edit, and delete virtual sticky notes directly in the browser. The application demonstrates key web development concepts including DOM manipulation, custom objects, browser storage, asynchronous JavaScript, ES modules, and JSON handling.

## Features

- Add colorful notes by typing text or double-clicking on the board
- Edit notes with inline textarea or modal
- Drag and drop notes around the board
- Delete notes with a fade-out effect
- Automatic saving to localStorage
- Fetch random productivity quotes via external API
- Export notes as JSON file
+ Notes feature time and date of creation
+ Notes can be sorted based on time/date of creation
+ Images can be added to notes

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- ES Modules
- localStorage for persistence
- Fetch API for asynchronous operations

## Project Structure

- `index.html`: Main HTML file
- `css/styles.css`: Stylesheet
- `js/main.js`: Entry point for the application
- `js/notes.js`: Note class definition and management
- `js/ui.js`: UI-related functions and event handlers
- `js/storage.js`: Functions for data persistence

## Getting Started

1. Clone this repository
2. Open index.html in your browser
3. Start creating notes!

## Development Timeline

- Week 1 (v0.1.1): Added initial starting code and added date and time of creation to notes.
- Week 2 (v0.2.2): Updated timestamps to pad minutes for proper time display, and added buttons which sort notes by timestamp.
- Week 3 (v0.2.3): Added functionality to attach image files to notes.
