new Vue({
    el: '#app',
    data:{
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        attackMsg:[]
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.resetBlood();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        aTtack: function () {
            var damage = Math.floor(Math.random()*10);
            this.monsterHealth -= damage;
            this.attackMsg.unshift({
                isPlayer:true,
                text:"Player hits monster " + damage
            });
            this.monsterAttack();

            if (checkEnd()) {
                return;
            }
        },
        monsterAttack: function () {
            var damage = Math.floor(Math.random() * 10);
            this.playerHealth -= damage;
            this.attackMsg.unshift({
                isPlayer: false,
                text: "Monster hits player " + damage
            });
        },
        resetBlood: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackMsg = [];
        },
        checkEnd: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won!,new game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            } else if (this.playerHealth <= 0) {
                if (confirm("You lose!new game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            } else {
                return false;
            }
        }
    }

});