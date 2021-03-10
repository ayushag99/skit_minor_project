# Sorting Visualizer

Project Repository: https://github.com/ayushag99/Sorting-Visualizer

Project is live at following Link: https://ayushag99.github.io/Sorting-Visualizer/

![ezgif-6-5adec8126908](/Users/ayush/Desktop/Project/sorting_visualizer/assets/ezgif-6-5adec8126908.gif)

<div id = "contents"></div>

## Contents

1. [Contents](#contents)
2. [About The Project](#about-the-project)
3. [Install and Run](#name)
4. [Working with the Project](#working-with-the-project)
   1. Adding new Algorithm

<div id = "about-the-project"></div>

## About the Project

The project is a sorting algorithm visualizer built in reactJS.

The following algorithms are implemented so far:

1. Selection Sort
2. Bubble Sort

<div id = "name"></div>
## Install and Run

Download the project

Naviagate to the project folder via terminal

Run following Commands:

```bash
>> npm run install
>> npm start
```

The project will run at localhost at: `http://localhost:3000/Sorting-Visualizer`

<div id = "working-with-the-project"></div>

## Working with the Project

Algorithms return an array of objects

```javascript
{
  i: number
  j: number
  swap: bool
  array: Array
}
```

`i`  is the index of array 

`j`  is the index of array 

`Swap` `true` if swap is taking place else `false`

`array` stores the updated array for state change