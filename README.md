## SUMMARY

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This simple application that given a number of rupiahs will calculate the minimum number of rupiahs needed to make that amount 

**15000 = 1 x Rp10000, 1x Rp5000**  
**Rp3900 = 1x Rp2000, 1x Rp1000, 1x Rp500, 4x Rp100**  
**12510 = 1 x Rp10000, 1x Rp2000, 1x Rp500, left Rp10 (no available fraction)**  

Examples of valid inputs with their canonical equivalents **18.215 (18215), Rp17500 (17500), Rp17.500,00 (17500), Rp 120.325 (120325), 005.000 (5000), 001000 (1000)**

Examples of invalid inputs: **17,500 (invalid separator),  2 500(invalid separator), 3000 Rp (valid character in wrong position), Rp (missing value)**

to run this application **clone** this repository, and run **`npm install`** in your terminal to install node modules and dependencies.

after all run **`npm start`** to run this application in your browser.

for live demo you can visit this [link](https://moseshhh.github.io/currency-fraction/).
