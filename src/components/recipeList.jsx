// src/components/RecipeList.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../redux/actions';
import { Link } from 'react-router-dom';
import '../styles.css';

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, loading, currentPage, totalPages, error } = useSelector((state) => state.recipes);

  // Fetch recipes when component mounts or currentPage changes
  useEffect(() => {
    dispatch(fetchRecipes(currentPage));
  }, [dispatch, currentPage]);

  // Function to handle page changes
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      dispatch(fetchRecipes(page));
    }
  };

  // Loading and error states
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div>
      <h1>Recipe List</h1>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.name} />
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
            </Link>
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      <div className="pagination">
        {/* Previous Button */}
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1} // Disable on the first page
        >
          Previous
        </button>
        
        {/* Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            disabled={currentPage === i + 1} // Disable the button for the current page
          >
            {i + 1}
          </button>
        ))}
        
        {/* Next Button */}
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages} // Disable on the last page
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RecipeList;
