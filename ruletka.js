number = prompt("Ваша ставка")
function GameMachine(sum) {
  this.getMoney = function() {
    return MoneyAmount;
    
  };
  this.sum = sum;
  this.is = function() {
    (n1 = Math.floor(Math.random()*(9-1+1)+1));
    (n2 = Math.floor(Math.random()*(9-1+1)+1));
    (n3 = Math.floor(Math.random()*(9-1+1)+1));
    alert(name + ',' +'  '+ "Вам випало: " + n1 + n2 + n3 );
    if(n1 == n2 || n2 == n3 || n1 == n3) {
      number  = (number * 2) ;
      alert(name + ',' +'  '+"УРА! Ваш Бонус X2" + '  ' + 'Ваш баланс' + '  ' + number );
    }  else if (n1 == n2 && n2 == n3 && n1 == n3 ){
     number  = (number * 3) ;
      alert(name + ',' +'  '+"УРА! Ваш Бонус X3" + '  ' + 'Ваш баланс' +'  '+ number  );
    }else{alert(name +',' + '  '+ 'Повезе іншим разом!')
      
    }
    
    
  
  };
}
var count = new GameMachine("");

function User(name,money) {
  this.name = prompt('Сер/Мадам,ваше ім*я?');
  this.money = money ;
  this.play = function() {
        count.is();
        
  };
  return play()
}
 
User();

function SuperAdmin() {
  var Сasino = new Casino("Казино");
  var GameMachine = new GameMachine("Ігровий автомат");
}


function Casino(name) {
  
  this.getMoney = function() {
       return allmoney  ;
  };
  this.getMachineCount = function() {
    return MachineCount ;
  };
}


