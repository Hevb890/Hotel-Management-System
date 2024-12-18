import React from 'react'
import { useState } from 'react'

export default function Regitration() {
    // Data Format for requested data
    const [formData, setFormData] = useState({
        guest_name: '',
        country: '',
        arrival_date: '',
        meal_type: '',
        weekend_nights: 0,
        market_segment: '',
        weekdays_nights: 0,
        distribution_channel: '',
        adult_count: 0,
        repeated_guest: false,
        child_count: 0,
        room_type: '',
        baby_count: '',
        deposit_type: '',
        adr: 0.0,
        cancelled: false
    })

    // Changing inputed values
    const handleChange = (e) => {
        const {id, value, type, checked} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: type === 'checkbox' ? checked : value
        }));
    }

    // Post requested data
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch('http://127.0.0.1:5000/user',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(formData)
            });
            const result = await response.json();
            console.log('====================================');
            console.log(result);
            console.log('====================================');
        }catch(error){
            console.log(error);
        }
    };
  return (
    <div class="mx-60 mt-10">
      <h1 class="font-black">New Reservation</h1><br />
        <form onSubmit={handleSubmit} >
            <div class="grid gap-2 mb-6 md:grid-cols-2">
                <div>
                    <label for="guest_name" class="text-sm font-medium text-black ">Guest name</label>
                    <input type="text" id="guest_name" value={formData.guest_name} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="country" class="block mb-2 text-sm font-medium text-black">Country</label>
                    <select id="country" value={formData.country} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5">
                        <option selected>Choose a country</option>
                        <option value="USA">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FRA">France</option>
                        <option value="GER">Germany</option>
                    </select>
                </div>
                <div>
                    <label for="arrival_date" class="text-sm font-medium text-black ">Arrival Date</label>
                    <input type="date" id="arrival_date" value={formData.arrival_date} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="meal_type" class="block mb-2 text-sm font-medium text-black">Meal Type</label>
                    <select id="meal_type" value={formData.meal_type} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5">
                        <option selected>Choose a meal type</option>
                        <option value="meal-1">Meal 01</option>
                        <option value="meal-2">Meal 02</option>
                        <option value="meal-3">Meal 03</option>
                        <option value="meal-4">Meal 04</option>
                    </select>
                </div>
                <div>
                    <label for="weekend_nights" class="block mb-2 text-sm font-medium text-black">Weekend Nights</label>
                    <input type="number" id="weekend_nights" value={formData.weekend_nights} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="market_segment" class="block mb-2 text-sm font-medium text-black">Market Segment</label>
                    <input type="text" id="market_segment" value={formData.market_segment} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="weekdays_nights" class="block mb-2 text-sm font-medium text-black">Weekdays Nights</label>
                    <input type="number" id="weekdays_nights" value={formData.weekdays_nights} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5" required />
                </div>
                <div>
                    <label for="distribution_channel" class="block mb-2 text-sm font-medium text-black">Distribution Channel</label>
                    <input type="text" id="distribution_channel" value={formData.distribution_channel} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5" required />
                </div>
                <div>
                    <label for="adult_count" class="block mb-2 text-sm font-medium text-black">Adult Count</label>
                    <input type="number" id="adult_count" value={formData.adult_count} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div class="flex item-center my-4">
                    <label for="repeated_guest" class="mb-2 text-sm font-medium text-black my-3 mr-3">Repeated Guest</label>
                    <input type="checkbox" id="repeated_guest" value={formData.repeated_guest} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-1"  required />
                </div>
                <div>
                    <label for="child_count" class="block mb-2 text-sm font-medium text-black">Child Count</label>
                    <input type="number" id="child_count" value={formData.child_count} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="room_type" class="block mb-2 text-sm font-medium text-black">Room Type</label>
                    <select id="room_type" value={formData.room_type} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5">
                        <option selected>Choose a room type</option>
                        <option value="type-1">Type 01</option>
                        <option value="type-2">Type 02</option>
                        <option value="type-3">Type 03</option>
                        <option value="type-4">Type 04</option>
                    </select>                
                </div>
                <div>
                    <label for="baby_count" class="block mb-2 text-sm font-medium text-black">Baby Count</label>
                    <input type="number" id="baby_count" value={formData.baby_count} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="deposit_type" class="block mb-2 text-sm font-medium text-black">Deposit Type</label>
                    <select id="deposit_type" value={formData.deposit_type} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5">
                        <option selected>Choose a deposit type</option>
                        <option value="type-1">Type 01</option>
                        <option value="type-2">Type 02</option>
                        <option value="type-3">Type 03</option>
                        <option value="type-4">Type 04</option>
                    </select> 
                </div>
            </div>
    
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

    </div>
  )
}
