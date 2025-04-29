from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import logging

logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

try:
    model = joblib.load("model.pkl")
    logger.info("Model loaded successfully")
except Exception as e:
    logger.error(f"Error loading model: {str(e)}")

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json(force=True)
        logger.debug(f"Received data: {data}")

        # Map incoming fields to required fields
        transformed_data = {
            'brand_name': data.get('brand'),
            'product_name': data.get('product_name'),
            'product_condition': data.get('product_condition'),  # Remove default value
            'price_inr': float(data.get('original_price', 0))  # Convert to float
        }

        # Log transformed data for debugging
        logger.debug(f"Transformed data: {transformed_data}")

        # Validate transformed data
        required_fields = ['brand_name', 'product_name', 'product_condition', 'price_inr']
        for field in required_fields:
            if not transformed_data.get(field):
                return jsonify({'error': f'Missing or invalid field: {field}'}), 400

        # Create DataFrame with transformed data
        df = pd.DataFrame([transformed_data])[required_fields]
        logger.debug(f"Input DataFrame: {df}")

        prediction = model.predict(df)
        logger.debug(f"Raw prediction: {prediction[0]}")
        
        result = {'predicted_price': round(prediction[0], 2)}
        logger.info(f"Final prediction result: {result}")
        
        return jsonify(result)

    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)