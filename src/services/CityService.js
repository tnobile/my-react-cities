const url = "https://tnobile.github.io/data-world-cities/";

export const getData = async (country, maxCount = 100) => {
    var response = await fetch(url + country);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    var content = await response.json();
    if (maxCount <= 0) {
        return content;
    }
    return content.filter((f, i) => i < maxCount);
}
