let healthBar = 100;

while(healthBar >= 0) {
    let enemyDamage = Math.floor(Math.random() * 20) + 1
    healthBar -= enemyDamage

    switch(true) {
        
        case (healthBar === 100): console.log("Healthy")
            break;
        case (healthBar >= 70 && healthBar < 100): console.log("Normal")
            break;
        case (healthBar < 70 && healthBar > 0): console.log("Dying")
            break;
        case (healthBar <= 0): console.log("Dead")
            break;
        default: 
            console.log("Undefined");
            break;
    }
}