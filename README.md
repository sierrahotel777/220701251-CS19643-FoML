
# 👜 Reprice - Price Predictor


<pre><code>## 📂 Project Structure ```bash Reprice - Price Predictor/ ├── backend/ │ ├── app.py # Flask backend API │ └── model.pkl # Trained regression model ├── frontend/ │ └── src/ │ ├── App.js │ └── components/ │ └── Form.js # React form to input prediction features ├── notebooks/ │ └── ML_model_development.ipynb # Jupyter notebook for EDA + model training ├── data/ │ └── resale_luxury_data.csv # Dataset (Kaggle version renamed) └── README.md ``` </code></pre>

## 📈 Dataset

Download the dataset from Kaggle:  
🔗 [Vestiaire Fashion Dataset](https://www.kaggle.com/datasets/justinpakzad/vestiaire-fashion-dataset)

> After downloading, **rename the CSV file** to:  
**`resale_luxury_data.csv`**

Then, place it in the `/data/` directory of this project.

---

## ⚙️ Step-by-Step Implementation

### ✅ 1. Preprocess + Train the ML Model

- Open the notebook: `notebooks/ML_model_development.ipynb`
- Perform:
  - Exploratory Data Analysis (EDA)
  - Label encoding for `brand`, `product_name`
  - Train a regression model (e.g., Ridge or RandomForest)
  - Save the model:

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

#### Navigate to frontend:

```bash
cd ../frontend
```

#### Create React app (if not already done):

```bash
npx create-react-app .
```

#### Place files:

- Replace `src/App.js` with your main component
- Add a `Form.js` inside `src/components/` for user inputs

#### Run the React app:

```bash
npm start
```

> Visit the app at: `http://localhost:3000`

---

## 💡 Features Used for Prediction

- `brand`: Brand of the product (categorical)
- `product_name`: Specific name or category of item
- `months_used`: How long the item has been used
- `original_price`: Price when it was bought new

---

## 🚀 Result

- Predicts an approximate **resale price** for second-hand luxury items.
- Built using machine learning and deployed as a full-stack app.

---

## 📬 Contributions

Feel free to contribute by improving model performance, frontend UI, or adding new features like image uploads and brand suggestions.

## 🧠 Author

**Sanjeevan Hari** – [GitHub Profile](https://github.com/sierrahotel777)
```
