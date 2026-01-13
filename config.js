// API Configuration
// Backend service URL (automatically configured)
const CONFIG = {
    API_URL: "https://webapi696610bee7a373233ba12871-production.up.railway.app"
};

// Ensure CONFIG is globally accessible
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
