import React, { useState } from 'react';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState({
    brand: '',
    product_name: '',
    product_condition: 'Good Condition',
    original_price: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setResult(data.predicted_price);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to get prediction');
    }
  };

  return (
    <div className="form-container">
      <h2>Luxury Item Resale Price Predictor</h2>
      <form onSubmit={handleSubmit} className="prediction-form">
        <div className="form-group">
          <label htmlFor="brand">Brand Name</label>
          <input
            id="brand"
            name="brand"
            placeholder="Enter brand name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="product_name">Product Name</label>
          <input
            id="product_name"
            name="product_name"
            placeholder="Enter product name"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="product_condition">Product Condition</label>
          <select
            id="product_condition"
            name="product_condition"
            onChange={handleChange}
            value={formData.product_condition}
            required
          >
            <option value="Never worn, with tag">Never worn, with tag</option>
            <option value="Never worn">Never worn</option>
            <option value="Very Good Condition">Very Good Condition</option>
            <option value="Good Condition">Good Condition</option>
            <option value="Fair Condition">Fair Condition</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="original_price">Original Price (₹)</label>
          <input
            id="original_price"
            type="number"
            name="original_price"
            placeholder="Enter original price"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">
          Predict Price
        </button>
      </form>

      {result && (
        <div className="result-container">
          <h3>Predicted Resale Price:</h3>
          <p className="predicted-price">₹{result.toLocaleString('en-IN')}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
