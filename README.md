# CSV to JSON converter

This project is part of the Microsoft's __Introduction to NodeJS__ course. This project's purpose is to build a node script to convert CSV files to JSON files.

I've decided to build an app that specifically downloads CSV files from the web instead of loading them from the local machine.

## Table of Contents

* [Application Features](#application)
* [Instructions](#instructions)
* [Installation](#installation)
* [Dependencies](#dependencies)
* [Contributing](#contributing)

## Application Features

The app is developed in NodeJS and use `csvtojson` to convert the CSV files and `uuid` package to store both the CSVs and the converted files into new folders.

## Instructions

To use the application you must use your terminal and navigate to the app's local folder. The command `node json_converter.js` launch the application with a standard link (https://prod-edxapp.edx-cdn.org/assets/courseware/v1/07d100219da1a726dad5eddb090fa215/asset-v1:Microsoft+DEV283x+2T2018+type@asset+block/customer-data.csv). To download and convert another CSV file you must provide a valid link after the file name. For example, if you want to download a contact file from a domain, you must write `node json_converter.js http://www.example.com/contacts.csv`. You must always specify the protocol type (`HTTP` or `HTTPS`) in order to let the app to load the right core module. Without the protocol, the result will be a domain name error `TypeError [ERR_INVALID_DOMAIN_NAME]: Unable to determine the domain name`.
Once the right command is launched, the app will download the CSV file (as `your_CSV.csv`) into a new folder, automatically created into `conversions` (this folder will be created at the first app launch). Then the CSV file will be converted in a JSON file and saved in the same folder as `your_json_converted.json`.

## Installation

You can clone this repository or download it as a .zip file.
Once downloaded, you need to run `npm install` in your console to install all the npm dependencies.

## Dependencies

This app is built with [NodeJS](https://nodejs.org/en/)
This app uses the following dependencies:

- [`CSVTOJSON`](https://www.npmjs.com/package/csvtojson). csvtojson module is a comprehensive nodejs csv parser to convert csv to json or column arrays. It can be used as node.js library / command line tool / or in browser.
- [`uuid`](https://www.npmjs.com/package/uuid). Simple, fast generation of RFC4122 UUIDS.

## Contributing

All suggestions and tips will be more than appreciated but, as a general rule, no pull requests are normally accepted.
