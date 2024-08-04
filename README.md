# Password Generator

This is a simple password generator built with Next.js. The generator allows users to create secure passwords with customizable options for length and character types. It also includes a feature to copy the generated password to the clipboard with a visual feedback effect.

## Features

- Generate secure passwords
- Customize password length (4 to 32 characters)
- Include lowercase letters, uppercase letters, numbers, and symbols
- Copy generated password to clipboard with visual feedback

## Demo

[http://localhost:3000]

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pnvdev/nextjs-password-generator
   ```
2. Navigate to the project directory:
   ```bash
   cd password-generator
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Application

To start the development server, run:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To build the application for production, run:

```bash
npm run build
```

This will create an optimized build of the application in the `dist` folder.

## Usage

1. Open the application.
2. Customize the password options by selecting the desired length and character types.
3. Click the "Generate password" button to create a new password.
4. Click the copy icon next to the generated password to copy it to the clipboard. A tooltip will appear indicating that the password has been copied.

## Development

- **Code Style**: Follow TypeScript and React best practices.
- **Styling**: Tailwind CSS is used for styling. Customize styles in `tailwind.config.js` if needed.
- **State Management**: React's `useState` and `useEffect` hooks are used for managing game state and effects.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Open a pull request with a description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or feedback, please reach out to [paulvallejos@gmail.com](mailto:paulvallejos@gmail.com).
