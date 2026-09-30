//* create the variables for  data recorded
const temp1 = 32;   
const temp2 = 25;   
const temp3 = 70;   
const temp4 = 18;   
const temp5 = 80;   
const temp6 = 15;   
const temp7 = 72;   
const temp8 = 28;   
const temp9 = 68;   
const temp10 = 20;  
const temp11 = 75;  
const temp12 = 23;  
const temp13 = 82;  
const temp14 = 30;  
const temp15 = 65;  
const temp16 = 22;  
const temp17 = 77;  
const temp18 = 26; 
const temp19 = 78;
const temp20 = 24; 
const temp21 = 73;  
const temp22 = 21;  
const temp23 = 79;  
const temp24 = 27;  
const temp25 = 71;  
const temp26 = 19;  
const temp27 = 74;  
const temp28 = 17;  
const temp29 = 76;  
const temp30 = 29;  

const totalDays = 30;

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)

const f1  = temp1;
const f2  = (temp2 * 9 / 5) + 32;
const f3  = temp3;
const f4  = (temp4 * 9 / 5) + 32;
const f5  = temp5;
const f6  = (temp6 * 9 / 5) + 32;
const f7  = temp7;
const f8  = (temp8 * 9 / 5) + 32;
const f9  = temp9;
const f10 = (temp10 * 9 / 5) + 32;
const f11 = temp11;
const f12 = (temp12 * 9 / 5) + 32;
const f13 = temp13;
const f14 = (temp14 * 9 / 5) + 32;
const f15 = temp15;
const f16 = (temp16 * 9 / 5) + 32;
const f17 = temp17;
const f18 = (temp18 * 9 / 5) + 32;
const f19 = temp19;
const f20 = (temp20 * 9 / 5) + 32;
const f21 = temp21;
const f22 = (temp22 * 9 / 5) + 32;
const f23 = temp23;
const f24 = (temp24 * 9 / 5) + 32;
const f25 = temp25;
const f26 = (temp26 * 9 / 5) + 32;
const f27 = temp27;
const f28 = (temp28 * 9 / 5) + 32;
const f29 = temp29;
const f30 = (temp30 * 9 / 5) + 32;


//!  calculation of total temperatures
const tot_temperature_in_fahrenheit = 
    f1 + f2 + f3 + f4 + f5 + f6 + f7 + f8 + f9 + f10 +
    f11 + f12 + f13 + f14 + f15 + f16 + f17 + f18 + f19 + f20 +
    f21 + f22 + f23 + f24 + f25 + f26 + f27 + f28 + f29 + f30;

//* Then apply the conversion to calculate the total in the other unit of measurement

const tot_temperature_in_celsius = (tot_temperature_in_fahrenheit - 32 * totalDays) * 5 / 9;


//! Start the calculation of the average temperatures

const avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / totalDays;
const avg_temperature_in_celsius = tot_temperature_in_celsius / totalDays;


//! Console.log the results  inspection 
console.log(`Total Fahrenheit: ${tot_temperature_in_fahrenheit}°F`);
console.log(`Total Celsius: ${tot_temperature_in_celsius}°C`);
console.log(`Average Fahrenheit: ${avg_temperature_in_fahrenheit}°F`);
console.log(`Average Celsius: ${avg_temperature_in_celsius}°C`);

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};

