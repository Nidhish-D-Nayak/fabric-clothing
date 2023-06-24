# Fabric Clothing

![Site Preview](https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/6496a67a991e3f3b2ae56d1b/screenshot_2023-06-24-08-17-53-0000.png)

```bash
⚠️ Warning: This app is a work in progress. I'm building this in public. ⚠️
```

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/Nidhish-D-Nayak/fabric-clothing/tree/main)

Welcome to Fabric Clothing! This application is built using React, Redux, Redux-Thunk, Redux-Toolkit, Firebase and Styled Components. It aims to provide users with an intuitive and seamless shopping experience for clothing items made from premium fabrics.

## Features ✨

- **User Authentication**: Users can create accounts, log in, and securely access their personalized profiles.
- **Product Catalog**: Browse through a wide range of clothing items, organized into categories for easy navigation.
- **Product Details**: View detailed information about each product, including images and descriptions.
- **Shopping Cart**: Add desired items to the cart, adjust quantities, and proceed to checkout.
- **Checkout Menu**: Users can review and manage their orders and make any changes in checkout menu.
- **Responsive Design**: Enjoy a consistent and visually appealing experience across various devices.

## Installation 💻

To run the Fabric Clothing App locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Nidhish-D-Nayak/fabric-clothing.git
   ```

2. Navigate to the project directory:

   ```bash
   cd fabric-clothing
   ```

3. Install the dependencies:

   ```bash
   yarn install
   ```

4. Set up Firebase:

   - Create a Firebase project and obtain the necessary configuration credentials.
   - Copy the Firebase configuration object into the `src/utils/firebase/firebase.utils.js` file.
   - Enable the desired Firebase authentication methods (e.g., Email/Password, Google, etc.).

5. Start the development server:

   ```bash
   yarn start
   ```

6. Open your browser and visit `http://localhost:3000` to access the Fabric Clothing App.

## Technologies Used 🔧

- React: JavaScript library for building user interfaces.
- Redux: State management tool for predictable state updates.
- Thunks: Middleware libraries for managing asynchronous actions in Redux.
- Redux Toolkit: A more opinionated state management tool for better developer experience.
- Styled Components: CSS-in-JS library for styling React components.
- Firebase: Backend-as-a-Service (BaaS) platform for authentication, database, and storage.

## Folder Structure 📂

Here's an overview of the project's folder structure:

```
├── public/             # Public assets and HTML template
├── src/
│   ├── assets/         # Assets used in the application
│   ├── components/     # Reusable React components
│   ├── routes/         # Top-level application pages
│   ├── store/          # Redux store - redux actions, reducers, and store
│   └── utils/          # Utility functions and constants - Firebase & Reducer
└── ...
```

## Contributing 🤝

We welcome contributions to the Fabric Clothing App project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/fix: `git checkout -b feature-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push the changes to your forked repository: `git push origin feature-name`.
5. Open a pull request to the main repository's `main` branch.

## License 📝

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the terms of the license.

## Contact 💬

If you have any questions, suggestions, or feedback, please don't hesitate to reach out. You can contact the project maintainer at [nidhibelthangady@gmail.com](mailto:nidhibelthangady@gmail.com).

Happy shopping with the Fabric Clothing App! 🛍️
