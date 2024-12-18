from flask import Flask, jsonify, request
from pymongo import MongoClient
from urllib.parse import quote_plus
from flask_cors import CORS
import cancellation_prediction
import daily_rate_prediction
import forecasting_total_visitors


app = Flask(__name__)
CORS(app)

# Escape special characters in username and password
username = quote_plus("hevindu")
password = quote_plus("User@123")

# Correct MongoDB URI with encoded username and password
client = MongoClient(
    f"mongodb+srv://{username}:{password}@cluster0.tf5jm.mongodb.net/?retryWrites=true&w=majority", tlsAllowInvalidCertificates=True
)
dbUsers = client['Users']
collectionUserRegistration = dbUsers['UserDetails']

# Test function for get the connection ready


@app.route('/user/', methods=['GET'])
def getUserInfo():
    # Find all users in the collection
    foundUsers = list(collectionUserRegistration.find()
                      )  # Convert cursor to list

    # Convert MongoDB ObjectId to string for each document
    for user in foundUsers:
        user["_id"] = str(user["_id"])  # Convert ObjectId to string

    return jsonify(foundUsers), 200  # Return as JSON response

# Save a new user


@app.route('/user', methods=['POST'])
def registerNewUser():
    try:
        # Retrieve JSON data from request body
        data = request.get_json()
        print(f"Before prediction: {data}")

        # Predict cancelation
        is_cancelled = cancellation_prediction.data_converstion_json_to_pandas(
            data)
        print(is_cancelled[0])
        if is_cancelled[0] == 1:
            data['cancelled'] = True
        print(f"Final Data to be inserted: {data}")

        # Predict the ADR
        adr = daily_rate_prediction.data_converstion_json_to_pandas(data)
        data['adr'] = int(adr[0])

        # Insert data into MongoDB collection
        collectionUserRegistration.insert_one(data)

        if '_id' in data:
            data['_id'] = str(data['_id'])

        # Return a success message
        return jsonify({"message": "Reservation received", "data": data}), 200
    except Exception as e:
        return jsonify({"message": "Error storing reservation", "error": str(e)}), 500


@app.route('/dashboard', methods=['GET'])
def get_total_number_of_expected_visitors():
    month = request.args.get('month', None)
    total_number_of_visitors = 0
    total_number_of_adults = forecasting_total_visitors.calculate_total_adults(
        int(month))
    total_number_of_children = forecasting_total_visitors.calculate_total_children(
        int(month))
    total_number_of_babies = forecasting_total_visitors.calculate_total_babies(
        int(month))
    total_number_of_visitors = total_number_of_adults + \
        total_number_of_children + total_number_of_babies

    return jsonify({"total_visitor_count": total_number_of_visitors, "total_adult_count": total_number_of_adults, "total_children_count": total_number_of_children, "total_babies_count": total_number_of_babies})


@app.route('/dashboard/linechart', methods=['GET'])
def get_info_for_line_chart():
    list_visitors = forecasting_total_visitors.get_forecast_for_all_months()
    return jsonify({"visitor_array": list_visitors})


if __name__ == '__main__':
    app.run(debug=True)
