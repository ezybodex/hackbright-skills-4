module.exports = {

    getFortune: (req, res) => {
        const fortunes = [
            "You will have a great day!",
            "Good things are coming your way.",
            "Adventure awaits you.",
            "Success is around the corner.",
            "A surprise is in store for you."
        ];

        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    getCurrentDate: (req, res) => {
        const currentDate = new Date().toLocaleDateString(); // Gets the current date
        res.status(200).send(`Today's date is: ${currentDate}`);
    },

    getRandomBabyName: (req, res) => {
        const babyNames = ["Emma", "Liam", "Olivia", "Noah", "Ava"];
        let randomIndex = Math.floor(Math.random() * babyNames.length);
        let randomBabyName = babyNames[randomIndex];
        res.status(200).send(`Your random baby name is: ${randomBabyName}`);
    },

    getRandomLuckyNumber: (req, res) => {
        const luckyNumber = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
        res.status(200).send(`Your lucky number is: ${luckyNumber}`);
    },

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

}