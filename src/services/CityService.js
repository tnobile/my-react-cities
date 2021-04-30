const url = "https://tnobile.github.io/data-world-cities/jp/";

export const getData = async () => {
    var response = await fetch(url);
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }
    var content = await response.json();
    return content.filter((f, i) => i < 50);
}