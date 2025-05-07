const materials = {
    tinder: {
      "Dry Grass": { ignition: 1 },
      "Cotton Wool": { ignition: 0.5 },
      "Birch Bark": { ignition: 0.8 },
      "Wet Leaves": { ignition: 2 }
    },
    kindling: {
      "Small Twigs": { spread: 1 },
      "Split Sticks": { spread: 1.2 },
      "Newspaper": { spread: 0.7 }
    },
    fuel: {
      "Pine Wood": { burnTime: 30 },
      "Oak Wood": { burnTime: 60 },
      "Birch Wood": { burnTime: 45 }
    }
  };
  
  function calculateFire() {
    const tinderChoice = document.getElementById('tinder').value;
    const kindlingChoice = document.getElementById('kindling').value;
    const fuelChoice = document.getElementById('fuel').value;
  
    if (!tinderChoice || !kindlingChoice || !fuelChoice) {
      alert("Please make a selection for each category!");
      return;
    }
  
    const ignitionTime = materials.tinder[tinderChoice].ignition;
    const spreadTime = materials.kindling[kindlingChoice].spread;
    const burnTime = materials.fuel[fuelChoice].burnTime;
  
    const startTime = ignitionTime + spreadTime;
  
    document.getElementById('start-time').innerText = `Time to Start Fire: ~${startTime.toFixed(1)} minutes`;
    document.getElementById('burn-time').innerText = `Estimated Burn Time: ~${burnTime} minutes`;
  }
  