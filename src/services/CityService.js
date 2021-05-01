const url = "https://tnobile.github.io/data-world-cities/";

export const getData = async (country) => {
    var response = await fetch(url+country);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    var content = await response.json();
//    return content.filter((f, i) => i < 100);
    return content;
}
