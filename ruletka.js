function SuperAdmin() {
  var �asino = new Casino("������");
  var GameMachine = new GameMachine("������� �������");
}


function Casino(name) {
  
  this.getMoney = function() {
       return allmoney  ;
  };
  this.getMachineCount = function() {
    return MachineCount ;
  };
}

number = prompt("���� ������")
function GameMachine(sum) {
  this.getMoney = function() {
    return MoneyAmount;
    
  };
  this.sum = sum;
  this.is = function() {
    (n1 = Math.floor(Math.random()*(9-1+1)+1));
    (n2 = Math.floor(Math.random()*(9-1+1)+1));
    (n3 = Math.floor(Math.random()*(9-1+1)+1));
    alert(name + '  '+ "��� ������: " + n1 + n2 + n3 );
    if(n1 == n2 || n2 == n3 || n1 == n3) {
      number  = (number * 2) ;
      alert(name + ',' +'  '+"���! ��� ����� X2" + '  ' + '��� ������' + '  ' + number );
    }  else if (n1 == n2 && n2 == n3 && n1 == n3 ){
     number  = (number * 3) ;
      alert(name + ',' +'  '+"���! ��� ����� X3" + '  ' + '��� ������' +'  '+ number  );
    }else{alert(name +',' + '  '+ '������ ����� �����!')
      
    }
    
    
  
  };
}
var count = new GameMachine("");

function User(name,money) {
  this.name = prompt('���/�����,���� ��*�?');
  this.money = money ;
  this.play = function() {
        count.is();
        
  };
  return play()
}
 
User();


 



