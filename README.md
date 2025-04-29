# 👜 Reprice - Price Predictor

A full-stack web application that predicts the resale price of second-hand luxury fashion items using machine learning.

---

## 📂 Project Structure

```
Reprice - Price Predictor/
├── backend/
│   ├── app.py                # Flask backend API
│   └── model.pkl             # Trained regression model
├── frontend/
│   └── src/
│       ├── App.js
│       └── components/
│           └── Form.js       # React form to input prediction features
├── notebooks/
│   └── ML_model_development.ipynb  # Jupyter notebook for EDA + model training
├── data/
│   └── resale_luxury_data.csv       # Dataset (Kaggle version renamed)
└── README.md
```

---

## 📈 Dataset

Download the dataset from Kaggle:  
🔗 [Vestiaire Fashion Dataset](https://www.kaggle.com/datasets/justinpakzad/vestiaire-fashion-dataset)

> After downloading, **rename the CSV file** to:  
> `resale_luxury_data.csv`

Then, place it inside the `/data/` directory.

---

## ⚙️ Step-by-Step Implementation

### ✅ 1. Preprocess & Train the ML Model

- Open the notebook: `notebooks/ML_model_development.ipynb`
- Perform:
  - Exploratory Data Analysis (EDA)
  - Label encoding for `brand`, `product_name`
  - Train a regression model (e.g., Ridge or RandomForest)
  - Save the model using:

```python
import joblib
joblib.dump(model, '../backend/model.pkl')
```

---

### ✅ 2. Set Up the Backend (Flask)

#### Navigate to the backend folder:

```bash
cd backend
```

#### Install dependencies:

```bash
pip install flask pandas scikit-learn joblib
```

#### Run the Flask API:

```bash
python app.py
```

> Flask will serve the model at: `http://localhost:5000/predict`

---

### ✅ 3. Set Up the Frontend (React)

#### Navigate to the frontend:

```bash
cd ../frontend
```

#### Create the React app (if not already done):

```bash
npx create-react-app .
```

#### Place your files:

- Replace `src/App.js` with your main component
- Add `Form.js` inside `src/components/` for user input

#### Run the React app:

```bash
npm start
```

> Visit the app at: `http://localhost:3000`

---

## 💡 Features Used for Prediction

- `brand`: Brand of the product (categorical)
- `product_name`: Specific name or category of item
- `months_used`: Duration of item usage
- `original_price`: Original purchase price

---

## 🚀 Result

- Predicts an approximate **resale price** for second-hand luxury items
- Built using machine learning and deployed as a full-stack app

---

## 📬 Contributions

Feel free to contribute by:
- Improving model performance
- Enhancing frontend UI
- Adding features like image upload, brand auto-suggestions, etc.

---

## 🧠 Author

**Sanjeevan Hari** – [GitHub Profile](https://github.com/sierrahotel777)
