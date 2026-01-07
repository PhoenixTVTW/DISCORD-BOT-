// This file contains functions to interact with the Google Gemini API. 
// It exports functions that make API calls and process the responses.

const axios = require('axios');
require('dotenv').config();

const GEMINI_API_URL = 'https://api.google.com/gemini'; // Replace with the actual Gemini API URL
const API_KEY = process.env.GEMINI_API_KEY;

async function fetchGeminiData(query) {
    try {
        const response = await axios.get(`${GEMINI_API_URL}/data`, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            },
            params: {
                query: query
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching data from Gemini API:', error);
        throw error;
    }
}

module.exports = {
    fetchGeminiData
};