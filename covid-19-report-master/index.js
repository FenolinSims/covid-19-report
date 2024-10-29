var url = "https://api.covid19api.com/summary";
var req_ = new XMLHttpRequest();

req_.open("GET",url,true);

window.onload = function(){
  req_.onload = function(){
    var data_ = JSON.parse(this.response);
    var data_g = data_.Global;
    var data_g_val = Object.values(data_g);
    for(var i=0;i<6;i++){
      document.querySelectorAll("#global_data > .g_d > p")[i].innerText = data_g_val[i];


    }

  }

}
function search_covid_19(){
  req_.open("GET",url,true);
  req_.onload = function(){
    var data_ = JSON.parse(this.response);
    var data_l = data_.Countries;
    var search_q_c = document.getElementById("s_inp").value;
    for (var i=0;i<data_l.length;i++){
      if (search_q_c.toLowerCase() == data_l[i].Country.toLowerCase()){
         for (var j=0;j<6;j++){
           var country_d_arr = Object.values(data_l[i]);
           document.querySelectorAll("#country_data > .l_d >p")[j].innerText = country_d_arr[j+3];
         }
      }
    }
  }
  req_.send();
}
req_.send();
