import pandas as pd
import joblib
from sklearn.preprocessing import LabelEncoder

pipeline = joblib.load('adr_prediction.pkl')
encoder = LabelEncoder()

raw_data = {'guest_name': 'Tharushi', 'country': 'FRA', 'arrival_date': '2024-12-27', 'meal_type': 'meal-3', 'weekend_nights': '1', 'market_segment': 'Online TO', 'weekdays_nights': '1',
            'distribution_channel': 'TA/TO', 'adult_count': '1', 'repeated_guest': True, 'child_count': '1', 'room_type': 'type-2', 'baby_count': '1', 'deposit_type': 'type-3', 'adr': 0, 'cancelled': False}


def data_converstion_json_to_pandas(raw_data):
    print(raw_data)
    # Converting Json to Pandas
    data_frame = pd.DataFrame({
        'arrival_date': [raw_data['arrival_date']],
        'stays_in_weekend_nights': [int(raw_data['weekend_nights'])],
        'stays_in_week_nights': [int(raw_data['weekdays_nights'])],
        'adults': [int(raw_data['adult_count'])],
        'children': [int(raw_data['child_count'])],
        'babies': [int(raw_data['baby_count'])],
        'meal': [raw_data['meal_type']],
        'country': [raw_data['country']],
        'market_segment': [raw_data['market_segment']],
        'distribution_channel': [raw_data['distribution_channel']],
        'is_repeated_guest': [int(raw_data['repeated_guest'])],
        'reserved_room_type': [raw_data['room_type']],
        'deposit_type': [raw_data['deposit_type']],
        # 'is_canceled': [int(raw_data['cancelled'])],
        'adr': [float(raw_data['adr'])]
    })

    # Converting arrival year
    data_frame['arrival_date'] = pd.to_datetime(
        data_frame['arrival_date'])

    data_frame['arrival_date_year'] = data_frame['arrival_date'].dt.year
    data_frame['arrival_date_month'] = data_frame['arrival_date'].dt.month
    data_frame['arrival_date_day_of_month'] = data_frame['arrival_date'].dt.day

    data_frame = data_frame.drop(columns=['arrival_date'])

    # print(data_frame)
    return prediction_adr(data_frame)


def prediction_adr(data_frame):
    feature_set = data_frame.drop("adr", axis=1)

    # Encoding data
    categorical_data = feature_set.select_dtypes(include=["object"]).columns
    for column in categorical_data:
        feature_set[column] = encoder.fit_transform(feature_set[column])

    prediction = pipeline.predict(feature_set)
    print(f"Prediction: {prediction}")
    return prediction


data_converstion_json_to_pandas(raw_data)
