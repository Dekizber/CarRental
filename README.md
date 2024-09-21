# Car Rental Application

This project is a web application for a car rental company operating in Ukraine. The application consists of three main pages and provides functionality for browsing, filtering, and favoriting car rental listings.

---

## Technologies

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Features

1. **Home Page**: Provides a general description of the company's services.

2. **Catalog Page**:

   - Displays a catalog of cars available for rent.
   - Implements filtering by car make, rental price per hour, and mileage.
   - Initially shows 12 listings with a "Load more" button to view additional listings.

3. **Favorites Page**: Shows car listings that the user has marked as favorites.

4. **Navigation**: Includes a navigation component for easy access to all pages.

5. **Car Listing Card**:

   - Displays information about each car available for rent.
   - Includes a "heart" button to add/remove the listing from favorites.
   - Features a "Learn more" button that opens a modal with detailed information.

6. **Modal Window**:

   - Shows detailed information about the selected car and rental conditions.
   - Closes on clicking the close button, backdrop, or pressing the Esc key.

7. **Persistence**: User actions (like adding to favorites) persist across page reloads.

## Technical Details

- Built with React and React Router for navigation.
- Uses a custom backend created with [mockapi.io](https://mockapi.io/) for the adverts resource.
- Implements responsive design for various screen sizes.

## Installation and Setup

1. Clone the repository:

   ```
   git clone [repository URL]
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

## Usage

- Navigate through the pages using the navigation menu.
- On the catalog page, use filters to narrow down car options.
- Click the heart icon on a car card to add/remove it from favorites.
- Use the "Learn more" button to view detailed information about a car.
- Access your favorited cars on the Favorites page.

## API Integration

The application uses a custom API created with mockapi.io. The `adverts` resource should be structured as follows:

[Include the structure of your adverts object here]

## Contributing

Contributions to improve the application are welcome. Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

[Include your license information here]

## Contact

[Vitalii Intelehator] - [dekizber@gmail.com]

Project Link: https://car-rental-kohl-seven.vercel.app/
