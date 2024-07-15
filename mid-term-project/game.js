document.addEventListener("DOMContentLoaded", startGame);

// Game stages object
const gameStages = {
    start: {
        text: "Welcome, Detective. You're called to investigate the disappearance of Mr. Richard Blackwood.",
        choices: ["Begin Investigation", "Review Case Files"],
        consequence: ["investigation", "case-files"],
        image: "start-image.jpeg" // Note: Removed url() from here
    },
    investigation: {
        text: "Inside the mansion, you find signs of a struggle in the foyer. There are broken vases and overturned furniture.",
        choices: ["Examine the broken vase", "Check the overturned furniture"],
        consequence: ["broken-vase", "overturned-furniture"],
        image: "investigation-image.jpg"
    },
    "broken-vase": {
        text: "Upon closer inspection, you find a piece of torn fabric stuck in the shards of the vase, possibly torn from the assailant's clothing.",
        choices: ["Analyze the fabric", "Move to another room"],
        consequence: ["analyze-fabric", "move-room"],
        image: "broken-vase-image.jpg"
    },
    "analyze-fabric": {
        text: "The fabric belongs to a rare type used by a local tailor. You recall a suspect matching this description frequenting a nearby café.",
        choices: ["Visit the café", "Search for more clues in the mansion"],
        consequence: ["visit-cafe", "search-more"],
        image: "analyze-fabric-image.jpg"
    },
"move-room": {
    text: "You decide to search another room in the mansion. As you explore, you stumble upon a hidden passage that leads to Mr. Blackwood, alive but bound. You rescue him and solve the case!",
    choices: ["Play again"],
    consequence: ["start"],
    image: "move-room-image.jpg"
},

    "visit-cafe": {
        text: "At the café, you find the suspect who tries to flee. After a brief chase, you capture them, solving the case.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "visit-cafe-image.jpg"
    },
    "search-more": {
        text: "You continue searching the mansion and eventually find hidden documents that lead to the capture of the criminal.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "search-more-image.jpg"
    },
    "case-files": {
        text: "You review the case files and find a list of potential suspects with motives against Mr. Blackwood. Each suspect has a unique backstory.",
        choices: ["Choose a suspect to investigate", "Visit the crime scene"],
        consequence: ["choose-suspect", "visit-scene"],
        image: "case-files-image.jpg"
    },
    "choose-suspect": {
        text: "You narrow down the suspects to two individuals: a business rival and a disgruntled former employee.",
        choices: ["Investigate the business rival", "Investigate the former employee"],
        consequence: ["business-rival", "former-employee"],
        image: "choose-suspect-image.jpg"
    },
    "business-rival": {
        text: "You uncover financial ties between the business rival and Mr. Blackwood's competitors. However, you lack concrete evidence linking them to the disappearance.",
        choices: ["Continue investigating", "Confront the rival"],
        consequence: ["continue-investigating", "confront-rival"],
        image: "business-rival-image.jpg"
    },
    "continue-investigating": {
        text: "After further investigation, you find solid evidence linking the rival to the disappearance, leading to their arrest.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "continue-investigating-image.jpg"
    },
    "confront-rival": {
        text: "Confronting the rival, they confess to the crime under pressure, and the case is closed.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "confront-rival-image.jpg"
    },
    "former-employee": {
        text: "The former employee harbored resentment towards Mr. Blackwood for unfair dismissal. You find evidence linking them to the scene of the disappearance.",
        choices: ["Confront the former employee", "Seek further evidence"],
        consequence: ["confront-employee", "seek-evidence"],
        image: "former-employee-image.jpg"
    },
    "confront-employee": {
        text: "You confront the former employee, who confesses to the crime, driven by revenge. Case closed.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "confront-employee-image.jpg"
    },
    "seek-evidence": {
        text: "With further evidence, you solidify the case against the former employee, leading to their arrest.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "seek-evidence-image.jpg"
    },
    "case-closed": {
        text: "Congratulations, Detective. You've successfully solved the case of Mr. Richard Blackwood's disappearance.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "case-closed-image.jpg"
    },
    "overturned-furniture": {
        text: "While examining the overturned furniture, you discover a hidden compartment containing Mr. Blackwood's secret stash of valuable artifacts. You're hailed as a hero for recovering the treasures.",
        choices: ["Return the artifacts discreetly", "Claim the artifacts as evidence"],
        consequence: ["return-artifacts", "claim-artifacts"],
        image: "overturned-furniture-image.jpg"
    },
    "return-artifacts": {
        text: "You return the artifacts discreetly, earning respect for your integrity. The case remains unsolved, but your reputation as an honorable detective grows.",
        choices: ["Continue solving mysteries", "Retire from detective work"],
        consequence: ["continue-solving", "retire"],
        image: "return-artifacts-image.jpg"
    },
    "continue-solving": {
        text: "You continue solving mysteries with your impeccable integrity and sharp mind, becoming a legend in the detective world.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "continue-solving-image.jpg"
    },
    "retire": {
        text: "You retire from detective work, proud of your achievements. The city honors you for your service.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "retire-image.jpg"
    },
    "claim-artifacts": {
        text: "You claim the artifacts as evidence, solving the case while gaining recognition for your exceptional detective skills. The city honors you with a statue in the town square.",
        choices: ["Attend the unveiling ceremony", "Decline the statue"],
        consequence: ["attend-ceremony", "decline-statue"],
        image: "claim-artifacts-image.jpg"
    },
    "attend-ceremony": {
        text: "At the unveiling ceremony, you receive accolades from the mayor and the community. You continue to solve mysteries with newfound fame and respect.",
        choices: ["Take on a high-profile case", "Enjoy a well-deserved vacation"],
        consequence: ["high-profile-case", "enjoy-vacation"],
        image: "attend-ceremony-image.jpg"
    },
"decline-statue": {
        text: "You decline the statue, preferring to maintain a lower profile despite your achievement. You continue to work diligently on solving mysteries without seeking public acclaim.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "decline-statue-image.jpg"
    },
"enjoy-vacation": {
        text: "You decide to take a well-deserved vacation, relaxing and rejuvenating after your successful case. Your mind clears as you recharge for future challenges.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "enjoy-vacation-image.jpg"
    },
    "high-profile-case": {
        text: "You successfully crack a high-profile case, solidifying your reputation as the top detective in the city. Your legacy as a brilliant investigator is celebrated for generations.",
        choices: ["Retire as a legend", "Mentor young detectives"],
        consequence: ["retire-legend", "mentor-detectives"],
        image: "high-profile-case-image.jpg"
    },
    "retire-legend": {
        text: "You retire as a legend, leaving behind a legacy of unparalleled detective skills. The city erects a museum in your honor, showcasing your achievements.",
        choices: ["Visit the museum", "Live a quiet life"],
        consequence: ["visit-museum", "quiet-life"],
        image: "retire-legend-image.jpg"
    },
    "visit-museum": {
        text: "Visiting the museum, you reflect on your storied career. Your detective skills continue to inspire future generations of investigators.",
        choices: ["Write a memoir", "Enjoy retirement"],
        consequence: ["write-memoir", "enjoy-retirement"],
        image: "visit-museum-image.jpg"
    },
    "write-memoir": {
        text: "You write a bestselling memoir, sharing your adventures and wisdom with the world. Your book becomes a classic in the detective genre.",
        choices: ["Inspire others", "Lead a quiet life"],
        consequence: ["inspire-others", "quiet-life"],
        image: "write-memoir-image.jpg"
    },
    "inspire-others": {
        text: "Your memoir inspires countless individuals to pursue careers in detective work. Your legacy as a master detective lives on forever.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "inspire-others-image.jpg"
    },
    "quiet-life": {
        text: "You choose to live a quiet life, reflecting on your achievements. Your legacy remains as an inspiration to many.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "quiet-life-image.jpg"
    },
    "visit-scene": {
        text: "At the crime scene, you notice a strange footprint that doesn't match Mr. Blackwood's shoes.",
        choices: ["Analyze the footprint", "Search the surrounding area"],
        consequence: ["analyze-footprint", "search-surroundings"],
        image: "visit-scene-image.jpg"
    },
    "analyze-footprint": {
        text: "The footprint analysis reveals it belongs to a known criminal. You track them down and solve the case, bringing justice for Mr. Blackwood.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "analyze-footprint-image.jpg"
    },
    "search-surroundings": {
        text: "While searching the area, you find Mr. Blackwood's hidden safe. Inside are documents that unravel the mystery and lead to the perpetrator's capture.",
        choices: ["Play again"],
        consequence: ["start"],
        image: "search-surroundings-image.jpg"
    }
};

let currentStage = "start"; // Initial stage

// Function to start/restart the game
function startGame() {
    console.log("Game started");
    // Show game container
    document.getElementById("game-container").style.display = "block";
    
    updatePage(); // Call function to update the page display
}

// Function to update the page with current stage information
function updatePage() {
    console.log("Updating page for stage:", currentStage);
    const stage = gameStages[currentStage];
    if (!stage) {
        console.error("Stage not found:", currentStage);
        return;
    }

    // Update story text on HTML page
    document.getElementById("story-text").innerHTML = stage.text;
    
    // Update image on HTML page
    document.getElementById("story-image").style.backgroundImage = `url('${stage.image}')`;
    
    // Clear existing choices
    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";
    
    // Create buttons for each available choice
    stage.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.addEventListener("click", () => {
            currentStage = stage.consequence[index]; // Move to next stage based on choice
            updatePage(); // Update page for new stage
        });
        choicesElement.appendChild(button);
    });
}
