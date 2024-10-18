// src/components/RecipeDetail.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipeDetail } from '../redux/actions';
import { useParams } from 'react-router-dom';
import '../styles.css';

const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedRecipe, loading, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipeDetail(id));
  }, [dispatch, id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!selectedRecipe) return <div>No Recipe Found</div>;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>{selectedRecipe.name}</h1> {/* Displaying dish name here */}
      <img src={selectedRecipe.image} alt={selectedRecipe.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
      <p>{selectedRecipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {selectedRecipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{selectedRecipe.instructions}</p> {/* Adjust based on API response */}
    </div>
  );
};

export default RecipeDetail;
