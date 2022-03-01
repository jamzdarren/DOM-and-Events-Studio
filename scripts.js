// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    // Buttons
    const missionAbort = document.getElementById("missionAbort");
    const takeoff = document.getElementById("takeoff");
    const landing = document.getElementById("landing");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    // Status text
    const flightStatus = document.getElementById("flightStatus");
    // Rocket image
    const rocket = document.getElementById("rocket");
    rocket.style.position = "absolute"; 
    rocket.style.bottom = "0px";
    rocket.style.left = String(shuttleBackground.offsetWidth - shuttleBackground.offsetWidth / 2 - 37) + "px";
    
    function setButtons(status) {
        missionAbort.disabled=status;
        landing.disabled=status;
        up.disabled=status;
        down.disabled=status;
        left.disabled=status;
        right.disabled=status;
        if (status) {
            takeoff.disabled=false;
        } else {
            takeoff.disabled=true;
        }
    }

    setButtons(true)

    takeoff.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
            setButtons(false);
        }
    });

    landing.addEventListener("click", function (event) {
        let response = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (response) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = String(shuttleBackground.offsetWidth - shuttleBackground.offsetWidth / 2 - 37) + "px";
            setButtons(true);
        }
    });

    missionAbort.addEventListener("click", function (event) {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "";
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = "0px";
            rocket.style.left = String(shuttleBackground.offsetWidth - shuttleBackground.offsetWidth / 2 - 37) + "px";
            setButtons(true);
        }
    });

    up.addEventListener("click", function (event) {
        rocket.style.bottom = parseInt(rocket.style.bottom) + 10 + "px";
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    });
    down.addEventListener("click", function (event) {
        if (parseInt(spaceShuttleHeight.innerHTML) != 0) {
            rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
            if (parseInt(spaceShuttleHeight.innerHTML) === 0) {
                flightStatus.innerHTML = "The shuttle has landed.";
                shuttleBackground.style.backgroundColor = "";
                setButtons(true);
            }
        }
    });
    left.addEventListener("click", function (event) {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px";
    });
    right.addEventListener("click", function (event) {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px";
    });


}

window.addEventListener("load", init);