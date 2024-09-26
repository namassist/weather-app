# Development Environment Setup and Running the Application

This guide will walk you through setting up the necessary tools and running the application locally from a clean slate. Follow the steps below, which are divided into small, manageable instructions for ease of use. Platform-specific instructions are included for Windows, macOS, and Linux.

## Project Information

- **Node.js Version**: This project is built using **Node.js v20.x**.
- **Package Manager**: The project uses **npm** as the package manager, though **Yarn** is also supported as an alternative.
- **Tech Stack**: The core technologies used in this project are:
  - **Vite**: Fast build tool for modern web projects
  - **React**: Frontend Library
  - **TanStack Query**: For data fetching and state management
  - **Tailwind CSS**: For styling
  - **TypeScript**: For type safety
  - **Vitest**: For testing React components

---

## Prerequisites

Before getting started, ensure you have the following installed on your machine:

- **Node.js** (including npm or yarn as a package manager)
- **Git**
- **Terminal** (Command Prompt for Windows, Terminal for macOS, Linux)

---

## 1. Install Node.js and npm

### Windows:

1. Download the Node.js installer from the [official website](https://nodejs.org/).
2. Run the installer and follow the prompts. Ensure that **npm** is included in the installation.
3. Open **Command Prompt** or **PowerShell** and run the following command to verify the installation:
   ```bash
   node -v
   npm -v
   ```

### macOS:

1. Open **Terminal**.
2. Install Node.js and npm using [Homebrew](https://brew.sh/). If you don’t have Homebrew installed, first install it with:
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. Install Node.js:
   ```bash
   brew install node
   ```
4. Verify the installation:
   ```bash
   node -v
   npm -v
   ```

### Linux (Ubuntu):

1. Open **Terminal**.
2. Install Node.js by running the following commands:
   ```bash
   sudo apt update
   sudo apt install nodejs
   sudo apt install npm
   ```
3. Verify the installation:
   ```bash
   node -v
   npm -v
   ```

---

## 2. Install Git

### Windows:

1. Download and install Git from the [official Git website](https://git-scm.com/).
2. Follow the installation instructions and configure Git with your name and email:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "youremail@example.com"
   ```
3. Verify the installation:
   ```bash
   git --version
   ```

### macOS:

1. Open **Terminal**.
2. Install Git using Homebrew:
   ```bash
   brew install git
   ```
3. Configure Git with your name and email:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "youremail@example.com"
   ```
4. Verify the installation:
   ```bash
   git --version
   ```

### Linux (Ubuntu):

1. Open **Terminal**.
2. Install Git by running:
   ```bash
   sudo apt update
   sudo apt install git
   ```
3. Configure Git with your name and email:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "youremail@example.com"
   ```
4. Verify the installation:
   ```bash
   git --version
   ```

---

## 3. Clone the Project Repository

1. Open your **terminal** (Command Prompt/PowerShell on Windows or Terminal on macOS/Linux).
2. Navigate to the directory where you want to clone the project:
   ```bash
   cd path/to/your/directory
   ```

Example:

```bash
cd C:/Users/YourUsername/Documents
# or for macOS/Linux:
cd ~/Documents
```

3. Use the `git clone` command to clone the repository:

   ```bash
   git clone https://github.com/namassist/weather-app.git
   ```

4. After cloning, navigate to the project directory:
   ```bash
   cd weather-app
   ```

---

## 4. Install Project Dependencies

Once you are inside the project directory, install all the dependencies required by the project by running the following command:

```bash
npm install
```

This will install all the dependencies listed in the `package.json` file, such as React or any other libraries used in the application.

Alternatively, if you're using Yarn, run:

```bash
yarn install
```

---

## 5. Configure Environment Variables

After installing the dependencies, you'll need to set up your environment variables by configuring the `.env` file.

1. In the project directory, locate the `.env.example` file.
2. Rename or copy the file to `.env`:
   ```bash
   mv .env.example .env
   ```
3. Open the `.env` file in a text editor and add your **OpenWeatherMap API key**. If you don't have an API key, you can sign up for one at the [OpenWeatherMap website](https://home.openweathermap.org/users/sign_up).

Add the following line to your `.env` file:

```bash
VITE_APP_API_KEY=your_api_key
```

Make sure to replace `your_api_key` with the actual API key you get from OpenWeatherMap.

Once the environment variables are set, your project will be able to access the necessary configuration for API calls.

---

## 6. Running the Development Server

After the dependencies are installed, you can start the development server.

### For npm users:

```bash
npm run dev
```

### For yarn users:

```bash
yarn dev
```

This command will start a local development server, you will need to manually open your browser and navigate to `http://localhost:5173`.
Check the terminal output for confirmation that the server is running correctly and make sure there are no errors.

---

## 7. Platform-Specific Considerations

### Windows:

- You may need to run the terminal as an administrator for certain commands, especially when dealing with permissions.
- Use **PowerShell** or **Command Prompt** for executing commands.

### macOS/Linux:

- You might need to use `sudo` for administrative privileges during installation, e.g., `sudo npm install`.

---

## 8. Troubleshooting

- If you encounter any issues, ensure all dependencies are installed correctly by running `npm install` again.
- Check your Node.js and npm versions with:
  ```bash
  node -v
  npm -v
  ```
- If ports are blocked, ensure no other service is using port 3000, or change the port by editing the relevant configuration file or running:
  ```bash
  npm run dev -- --port 4000
  ```

---

## 9. Additional Resources

- [Node.js Official Website](https://nodejs.org/)
- [npm Documentation](https://docs.npmjs.com/)
- [Yarn Documentation](https://classic.yarnpkg.com/en/docs/)
- [Git Documentation](https://git-scm.com/doc)
