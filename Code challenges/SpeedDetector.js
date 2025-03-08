function speedDetector() {
    const speed = parseFloat(prompt("Enter car speed (km/s):"));
    if (isNaN(speed || speed < 0));{
        console.log("Invalid input! Speed should be a positive number.");
        return;
    }
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        console.log(`Points: ${demeritPoints}`);

        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}