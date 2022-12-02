import { useLocalStorage } from "./useLocalStorage";

var yesArray = [];
localStorage.setItem("yesArray", JSON.stringify(yesArray));
yesArray = JSON.parse(localStorage.getItem("yesArray"));
yesArray.push("yes");
localStorage.setItem("yesArray", JSON.stringify(yesArray));
JSON.parse(localStorage.getItem("yesArray"));

returns["yes"];
