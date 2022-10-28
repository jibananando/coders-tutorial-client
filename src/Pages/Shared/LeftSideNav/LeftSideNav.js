import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Course from '../../Course/Course';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => { setCategories(data) });
    }, [])


    return (
        <div>
            <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => {
                        return <>
                            <p

                                key={category.id}>
                                <Link to={`/courses/${category.id}`}>{category.name}</Link>
                            </p>

                        </>
                    }
                    )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;