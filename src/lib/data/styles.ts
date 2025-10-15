const maptilerKey = "nTWCMj76UIFD774ZMWhX";
console.log("KEY:", maptilerKey);

export const styles = {
    dark: `https://api.maptiler.com/maps/dataviz-dark/style.json?key=${maptilerKey}`,
    light: `https://api.maptiler.com/maps/streets/style.json?key=${maptilerKey}`,
    satellite: `https://api.maptiler.com/maps/hybrid/style.json?key=${maptilerKey}`,
};