const API_KEY = "ema-yTn3h30bjVCGHrG5zM2bkx1TPWjM";

const msg = "This is a new PASTE created with the API";

fetch("https://pastebin.com/api/api_post.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `api_dev_key=${API_KEY}&api_paste_code=${msg}&api_option=paste`,
})
    .then((response) => response.text())
    .then((body) => console.log(body));
