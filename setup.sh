#!/bin/bash

# Print a message indicating that the setup is starting
echo "Starting Tailwind CSS setup..."

# Step 1: Initialize a new Node.js project (if not already initialized)
if [ ! -f package.json ]; then
  echo "Initializing Node.js project..."
  npm init -y
else
  echo "Node.js project already initialized."
fi

# Step 2: Install Tailwind CSS via npm
echo "Installing Tailwind CSS..."
npm install tailwindcss

# Step 3: Create Tailwind configuration file
echo "Creating Tailwind CSS configuration file..."
npx tailwindcss init

# Step 4: Set up input CSS file
CSS_DIR="./src"
CSS_FILE="$CSS_DIR/input.css"

if [ ! -d "$CSS_DIR" ]; then
  mkdir -p "$CSS_DIR"
fi

echo "Setting up input CSS file at $CSS_FILE..."
cat > "$CSS_FILE" <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

# Step 5: Set up output CSS file directory
OUTPUT_DIR="./dist"
OUTPUT_FILE="$OUTPUT_DIR/output.css"

if [ ! -d "$OUTPUT_DIR" ]; then
  mkdir -p "$OUTPUT_DIR"
fi

echo "Compiling Tailwind CSS to $OUTPUT_FILE..."
npx tailwindcss -i "$CSS_FILE" -o "$OUTPUT_FILE" --watch &

echo "Tailwind CSS setup complete. Watching for changes..."

