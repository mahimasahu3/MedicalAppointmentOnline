import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import BA from '../../assets/BookAppointments.jpg';
import '../../style/BookAppointment.css';  // Import the CSS file

function Bookappointment() {
    const [searchTerm, setSearchTerm] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [filteredItems, setFilteredItems] = useState([]);

    const items = ['Dentist', 'Gynecologist/Obstetrician', 'General Physician','Dermatologist'];

    const handleSearchChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value.length > 0) {
            setFilteredItems(items.filter(item => item.toLowerCase().includes(value.toLowerCase())));
            setDropdownVisible(true);
        } else {
            setDropdownVisible(false);
        }
    };

    const handleItemClick = (item) => {
        setSearchTerm(item);
        setDropdownVisible(false);
    };

    return (
        <div className="container">
            <h1 className="header">Find a doctor at your own ease</h1>
            <div className="search-container">
                <img src={BA} alt="icon" className="icon" /><br/>
                <input
                    type="text"
                    placeholder="Search doctor by speciality"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                />
                <FaSearch className="search-icon" />
                {dropdownVisible && (
                    <ul className="dropdown">
                        {filteredItems.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleItemClick(item)}
                                className="dropdown-item"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default Bookappointment;
