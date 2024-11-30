import React from 'react';
import './css/srs.css'
const Srs = () => {
    return (
    <div>
    <header>
        <h1>Burger House - Project Report</h1>
    </header>

    <main>
        <h2>1. Application</h2>
        <p><strong>Burger House</strong> is a dynamic web-based application designed to streamline the ordering process for a fast-food restaurant. It enables customers to create accounts, manage accounts, place orders, and allows restaurant management to oversee inventory and process payments efficiently.</p>

        <h2>2. Project Overview</h2>
        <p>Burger House aims to enhance customer satisfaction and operational efficiency in the fast-food industry. By providing a user-friendly interface for customers and robust management tools for restaurant staff, it bridges the gap between traditional food service and modern technology. Customers can browse an interactive menu, customize their orders, and make secure payments. Restaurant staff benefit from automated order handling, inventory tracking, and sales analytics. This project focuses on delivering a scalable, secure, and efficient solution, catering to small-to-medium-sized food businesses.</p>

        <h2>3. Feature Analysis</h2>

        <h3>a) UML Design</h3>
        <ul>
            <li><strong>Customer Management Module:</strong> Handles customer registration, login, and order history.</li>
            <li><strong>Menu Module:</strong> Displays available items, pricing, and customization options.</li>
            <li><strong>Order Management Module:</strong> Users can give orders.</li>
        </ul>

        <h3>b) Use Case Diagram</h3>
        <ul>
            <li><strong>Customer:</strong> Browse menu, place orders, make payments.</li>
            <li><strong>Staff:</strong> View orders, update order status, manage inventory.</li>
            <li><strong>Admin:</strong> Generate reports, manage user roles, and configure settings.</li>
        </ul>

        <h3>c) MongoDB Collection Structure</h3>
        <p>An example table structure:</p>
        <table>
            <thead>
                <tr>
                    <th>_id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>674</td>
                    <td>Rakib Hassan</td>
                    <td>rakib@gmial.com</td>
                    <td>12345</td>
                </tr>
            </tbody>
        </table>

        <h2>4. Technical Analysis</h2>
        <h3>Software</h3>
        <ul>
            <li><strong>Front-End:</strong> REACT, CSS</li>
            <li><strong>Back-End:</strong> NODE.JS, EXPRESS.JS</li>
            <li><strong>Database:</strong> MONGODB</li>
            <li><strong>Development Tools:</strong> Visual Studio Code, POSTMAN, GitHub</li>
        </ul>

        <h2>5. Cost Analysis</h2>
        <table>
            <thead>
                <tr>
                    <th>Component</th>
                    <th>Cost (TAKA)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Domain Registration</td>
                    <td>1000</td>
                </tr>
                <tr>
                    <td>Web Hosting (1 Year)</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>Software Licenses</td>
                    <td>Free (Open Source)</td>
                </tr>
                <tr>
                    <td>Development Cost</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td>Miscellaneous</td>
                    <td>500</td>
                </tr>
                <tr>
                    <td><strong>Total Cost</strong></td>
                    <td><strong>11500</strong></td>
                </tr>
            </tbody>
        </table>

        <h2>6. Gantt Chart</h2>
        <p><strong>Project Timeline</strong></p>
        <table>
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Duration (Days)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Requirement Analysis</td>
                    <td>2024-11-01</td>
                    <td>2024-11-05</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Design (UML, DB)</td>
                    <td>2024-11-06</td>
                    <td>2024-11-10</td>
                    <td>5</td>
                </tr>
                <tr>
                    <td>Development</td>
                    <td>2024-11-11</td>
                    <td>2024-11-25</td>
                    <td>15</td>
                </tr>
                <tr>
                    <td>Testing</td>
                    <td>2024-11-26</td>
                    <td>2024-11-28</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>Deployment</td>
                    <td>2024-11-29</td>
                    <td>2024-11-30</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td><strong>Total Duration</strong></td>
                    <td><strong>2024-11-01</strong></td>
                    <td><strong>2024-11-30</strong></td>
                    <td><strong>30</strong></td>
                </tr>
            </tbody>
        </table>
    </main>

    <footer>
        <p>&copy; Copyright Md. Rakib Hassan (213-15-4411). All rights reserved.</p>
    </footer>
</div>
    );
};

export default Srs;