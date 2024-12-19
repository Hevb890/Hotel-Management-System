import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Regitration() {
    const navigate = useNavigate();
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
        baby_count: 0,
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
            const admin_status_response = await fetch('http://127.0.0.1:5000/is_admin')
            const result_is_admin = await admin_status_response.json()
            if(result_is_admin.is_admin == false){
                navigate('/registration');
                alert("Reservation Successful")
            }else if(result_is_admin.is_admin == true){
                navigate('/data-display');
            }
            setFormData({
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
                baby_count: 0,
                deposit_type: '',
                adr: 0.0,
                cancelled: false
            });
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
                        <option value="N/A" selected>Select a Counrty</option>
                        <option value="PRT">Portugal</option>
                        <option value="GBR">United Kingdom</option>
                        <option value="USA">United States</option>
                        <option value="ESP">Spain</option>
                        <option value="IRL">Ireland</option>
                        <option value="FRA">France</option>
                        <option value="ROU">Romania</option>
                        <option value="NOR">Norway</option>
                        <option value="OMN">Oman</option>
                        <option value="ARG">Argentina</option>
                        <option value="POL">Poland</option>
                        <option value="DEU">Germany</option>
                        <option value="BEL">Belgium</option>
                        <option value="CHE">Switzerland</option>
                        <option value="CN">China</option>
                        <option value="GRC">Greece</option>
                        <option value="ITA">Italy</option>
                        <option value="NLD">Netherlands</option>
                        <option value="DNK">Denmark</option>
                        <option value="RUS">Russia</option>
                        <option value="SWE">Sweden</option>
                        <option value="AUS">Australia</option>
                        <option value="EST">Estonia</option>
                        <option value="CZE">Czech Republic</option>
                        <option value="BRA">Brazil</option>
                        <option value="FIN">Finland</option>
                        <option value="MOZ">Mozambique</option>
                        <option value="BWA">Botswana</option>
                        <option value="LUX">Luxembourg</option>
                        <option value="SVN">Slovenia</option>
                        <option value="ALB">Albania</option>
                        <option value="IND">India</option>
                        <option value="CHN">China</option>
                        <option value="MEX">Mexico</option>
                        <option value="MAR">Morocco</option>
                        <option value="UKR">Ukraine</option>
                        <option value="SMR">San Marino</option>
                        <option value="LVA">Latvia</option>
                        <option value="PRI">Puerto Rico</option>
                        <option value="SRB">Serbia</option>
                        <option value="CHL">Chile</option>
                        <option value="AUT">Austria</option>
                        <option value="BLR">Belarus</option>
                        <option value="LTU">Lithuania</option>
                        <option value="TUR">Turkey</option>
                        <option value="ZAF">South Africa</option>
                        <option value="AGO">Angola</option>
                        <option value="ISR">Israel</option>
                        <option value="CYM">Cayman Islands</option>
                        <option value="ZMB">Zambia</option>
                        <option value="CPV">Cape Verde</option>
                        <option value="ZWE">Zimbabwe</option>
                        <option value="DZA">Algeria</option>
                        <option value="KOR">South Korea</option>
                        <option value="CRI">Costa Rica</option>
                        <option value="HUN">Hungary</option>
                        <option value="ARE">United Arab Emirates</option>
                        <option value="TUN">Tunisia</option>
                        <option value="JAM">Jamaica</option>
                        <option value="HRV">Croatia</option>
                        <option value="HKG">Hong Kong</option>
                        <option value="IRN">Iran</option>
                        <option value="GEO">Georgia</option>
                        <option value="AND">Andorra</option>
                        <option value="GIB">Gibraltar</option>
                        <option value="URY">Uruguay</option>
                        <option value="JEY">Jersey</option>
                        <option value="CAF">Central African Republic</option>
                        <option value="CYP">Cyprus</option>
                        <option value="COL">Colombia</option>
                        <option value="GGY">Guernsey</option>
                        <option value="KWT">Kuwait</option>
                        <option value="NGA">Nigeria</option>
                        <option value="MDV">Maldives</option>
                        <option value="VEN">Venezuela</option>
                        <option value="SVK">Slovakia</option>
                        <option value="FJI">Fiji</option>
                        <option value="KAZ">Kazakhstan</option>
                        <option value="PAK">Pakistan</option>
                        <option value="IDN">Indonesia</option>
                        <option value="LBN">Lebanon</option>
                        <option value="PHL">Philippines</option>
                        <option value="SEN">Senegal</option>
                        <option value="SYC">Seychelles</option>
                        <option value="AZE">Azerbaijan</option>
                        <option value="BHR">Bahrain</option>
                        <option value="NZL">New Zealand</option>
                        <option value="THA">Thailand</option>
                        <option value="DOM">Dominican Republic</option>
                        <option value="MKD">North Macedonia</option>
                        <option value="MYS">Malaysia</option>
                        <option value="ARM">Armenia</option>
                        <option value="JPN">Japan</option>
                        <option value="LKA">Sri Lanka</option>
                        <option value="CUB">Cuba</option>
                        <option value="CMR">Cameroon</option>
                        <option value="BIH">Bosnia and Herzegovina</option>
                        <option value="MUS">Mauritius</option>
                        <option value="COM">Comoros</option>
                        <option value="SUR">Suriname</option>
                        <option value="UGA">Uganda</option>
                        <option value="BGR">Bulgaria</option>
                        <option value="CIV">Ivory Coast</option>
                        <option value="JOR">Jordan</option>
                        <option value="SYR">Syria</option>
                        <option value="SGP">Singapore</option>
                        <option value="BDI">Burundi</option>
                        <option value="SAU">Saudi Arabia</option>
                        <option value="VNM">Vietnam</option>
                        <option value="PLW">Palau</option>
                        <option value="QAT">Qatar</option>
                        <option value="EGY">Egypt</option>
                        <option value="PER">Peru</option>
                        <option value="MLT">Malta</option>
                        <option value="MWI">Malawi</option>
                        <option value="ECU">Ecuador</option>
                        <option value="MDG">Madagascar</option>
                        <option value="ISL">Iceland</option>
                        <option value="UZB">Uzbekistan</option>
                        <option value="NPL">Nepal</option>
                        <option value="BHS">Bahamas</option>
                        <option value="MAC">Macau</option>
                        <option value="TGO">Togo</option>
                        <option value="TWN">Taiwan</option>
                        <option value="DJI">Djibouti</option>
                        <option value="STP">São Tomé and Príncipe</option>
                        <option value="KNA">Saint Kitts and Nevis</option>
                        <option value="ETH">Ethiopia</option>
                        <option value="IRQ">Iraq</option>
                        <option value="HND">Honduras</option>
                        <option value="RWA">Rwanda</option>
                        <option value="KHM">Cambodia</option>
                        <option value="MCO">Monaco</option>
                        <option value="BGD">Bangladesh</option>
                        <option value="IMN">Isle of Man</option>
                        <option value="TJK">Tajikistan</option>
                        <option value="NIC">Nicaragua</option>
                        <option value="BEN">Benin</option>
                        <option value="VGB">British Virgin Islands</option>
                        <option value="TZA">Tanzania</option>
                        <option value="GAB">Gabon</option>
                        <option value="GHA">Ghana</option>
                        <option value="TMP">East Timor</option>
                        <option value="GLP">Guadeloupe</option>
                        <option value="KEN">Kenya</option>
                        <option value="LIE">Liechtenstein</option>
                        <option value="GNB">Guinea-Bissau</option>
                        <option value="MNE">Montenegro</option>
                        <option value="UMI">United States Minor Outlying Islands</option>
                        <option value="MYT">Mayotte</option>
                        <option value="FRO">Faroe Islands</option>
                        <option value="MMR">Myanmar</option>
                        <option value="PAN">Panama</option>
                        <option value="BFA">Burkina Faso</option>
                        <option value="LBY">Libya</option>


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
                        <option value="BB">Bed & Breakfast</option>
                        <option value="FB">Full Board</option>
                        <option value="HB">Half Board</option>
                        <option value="SC">Self-Catering</option>
                    </select>
                </div>
                <div>
                    <label for="weekend_nights" class="block mb-2 text-sm font-medium text-black">Weekend Nights</label>
                    <input type="number" min="0" id="weekend_nights" value={formData.weekend_nights} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="market_segment" class="block mb-2 text-sm font-medium text-black">Market Segment</label>
                    <input type="text" id="market_segment" value={formData.market_segment} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="weekdays_nights" class="block mb-2 text-sm font-medium text-black">Weekdays Nights</label>
                    <input type="number" min="0" id="weekdays_nights" value={formData.weekdays_nights} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5" required />
                </div>
                <div>
                    <label for="distribution_channel" class="block mb-2 text-sm font-medium text-black">Distribution Channel</label>
                    <input type="text" id="distribution_channel" value={formData.distribution_channel} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5" required />
                </div>
                <div>
                    <label for="adult_count" class="block mb-2 text-sm font-medium text-black">Adult Count</label>
                    <input type="number" min="0" id="adult_count" value={formData.adult_count} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div class="flex item-center my-4">
                    <label for="repeated_guest" class="mb-2 text-sm font-medium text-black my-3 mr-3">Repeated Guest</label>
                    <input type="checkbox" id="repeated_guest" value={formData.repeated_guest} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block mt-1" />
                </div>
                <div>
                    <label for="child_count" class="block mb-2 text-sm font-medium text-black">Child Count</label>
                    <input type="number" min="0" id="child_count" value={formData.child_count} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="room_type" class="block mb-2 text-sm font-medium text-black">Room Type</label>
                    <select id="room_type" value={formData.room_type} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5">
                        <option value="N/A" selected>Choose a room type</option>
                        <option value="A">Room Type A</option>
                        <option value="B">Room Type B</option>
                        <option value="C">Room Type C</option>
                        <option value="D">Room Type D</option>
                        <option value="E">Room Type E</option>
                        <option value="F">Room Type F</option>
                        <option value="G">Room Type G</option>
                        <option value="H">Room Type H</option>
                        <option value="L">Room Type L</option>
                        <option value="P">Room Type P</option>
                    </select>                
                </div>
                <div>
                    <label for="baby_count" class="block mb-2 text-sm font-medium text-black">Baby Count</label>
                    <input type="number" min="0" id="baby_count" value={formData.baby_count} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5"  required />
                </div>
                <div>
                    <label for="deposit_type" class="block mb-2 text-sm font-medium text-black">Deposit Type</label>
                    <select id="deposit_type" value={formData.deposit_type} onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-3/4 p-2.5">
                        <option value="N/A" selected>Choose a deposit type</option>
                        <option value="No Deposit">No Deposit</option>
                        <option value="Refundable">Refundable</option>
                        <option value="Non Refund">Non Refund</option>
                    </select> 
                </div>
            </div>
    
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>

    </div>
  )
}
