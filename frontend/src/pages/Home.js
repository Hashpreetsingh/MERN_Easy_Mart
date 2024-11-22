import React from "react";
import "./../styles/home.css"; // Ensure this file exists and is properly styled

const Home = () => {
    return (
        <div className="home-container">
            {/* Welcome Banner Section */}
            <div className="welcome-banner">
                <h1>
                    Welcome to <span className="brand-name">EasyMart</span>
                </h1>
                <p>Your one-stop shop for groceries and essentials!</p>
            </div>

            {/* Call-to-Action Section */}
            <div className="cta-section">
                <button className="shop-now-btn">Start Shopping</button>
            </div>

            {/* Featured Categories Section */}
            <div className="featured-categories">
                <h2>Featured Categories</h2>
                <div className="categories-list">
                    <div className="category-item">
                        <h3>Fresh Produce</h3>
                        <p>Fresh fruits and vegetables</p>
                    </div>
                    <div className="category-item">
                        <h3>Dairy & Eggs</h3>
                        <p>Milk, cheese, and eggs</p>
                    </div>
                    <div className="category-item">
                        <h3>Snacks & Beverages</h3>
                        <p>Chips, soda, and more</p>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 EasyMart. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
