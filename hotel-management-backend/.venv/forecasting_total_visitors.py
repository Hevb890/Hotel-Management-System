from datetime import date
import joblib

pipeline = joblib.load('forecasting_total_visitors.pkl')


def calculate_total_adults(month_number):
    total_adults = 0
    days, year = data_preperation(month_number)
    for day in range(1, days+1):
        visitor_count = pipeline.predict([[year, month_number, day]])
        total_adults += int(visitor_count[0][2])
    return total_adults


def calculate_total_children(month_number):
    total_children = 0
    days, year = data_preperation(month_number)
    for day in range(1, days+1):
        visitor_count = pipeline.predict([[year, month_number, day]])
        total_children += int(visitor_count[0][0])
    return total_children


def calculate_total_babies(month_number):
    total_babies = 0
    days, year = data_preperation(month_number)
    for day in range(1, days+1):
        visitor_count = pipeline.predict([[year, month_number, day]])
        total_babies += int(visitor_count[0][1])
    return total_babies


def data_preperation(month_number):
    year = date.today().year
    if month_number in [1, 3, 5, 7, 8, 10, 12]:
        days = 31
    elif month_number == 2:
        days = 28
    else:
        days = 30
    return days, year


def get_forecast_for_all_months():
    month_number = 1
    list_total_visitors = []
    for month_number in range(13):
        total_visitors = 0
        days, year = data_preperation(month_number)
        for day in range(1, days+1):
            count_df = pipeline.predict([[year, month_number, day]])
            total_visitors += int(count_df[0][0]) + \
                int(count_df[0][1]) + int(count_df[0][0])
        list_total_visitors.append(total_visitors)

    return list_total_visitors
