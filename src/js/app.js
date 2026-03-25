//  Imports 
import { getWeather } from "./api/weatherApi.js";
import { renderWeather } from "./components/weatherCard.js";
import { showLoader } from "./components/loader.js";
import { addHistory } from "./features/history.js";
import { renderHistory } from "./components/historyList.js";

// Button reference
const btn = document.getElementById("searchBtn");

//  Search click event
btn.onclick = async () => {
  let city = document.getElementById("city").value;

  // Loader show karo
  document.getElementById("weather").innerHTML = showLoader();

  let data = await getWeather(city);

  //  Error handling
  if (data.cod !== 200) {
    document.getElementById("weather").innerHTML =
      " City not found";
    return;
  }

  //  History save
  addHistory(city);

  //  Weather show
  document.getElementById("weather").innerHTML =
    renderWeather(data);

  // History UI update
  loadHistoryUI();
};

//  History UI load function
function loadHistoryUI() {
  document.getElementById("history").innerHTML =
    renderHistory();
}

// Page load pe history dikhana
loadHistoryUI();