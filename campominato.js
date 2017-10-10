var app = angular.module('campominato',[])

app.controller('Controller',function($scope)
{
	
	$scope.casella = function(x,y)
	{	
		this.x = x;
		this.y = y;
		this.valore = "";
		this.bombeattorno = function()
		{
			var cont = 0;	
			if(this.x!=0 && this.x!=9 && this.y!=0 && this.y!=9)
			{
				if($scope.griglia [this.x-1][this.y-1].valore=="B")
					cont++;
				if($scope.griglia [this.x-1][this.y].valore=="B")
					cont++;
				if($scope.griglia [this.x-1][this.y+1].valore=="B")
					cont++;
				if($scope.griglia [this.x][this.y-1].valore=="B")
					cont++;
				if($scope.griglia [this.x][this.y+1].valore=="B")
					cont++;
				if($scope.griglia [this.x+1][this.y-1].valore=="B")
					cont++;
				if($scope.griglia [this.x+1][this.y].valore=="B")
					cont++;
				if($scope.griglia [this.x+1][this.y+1].valore=="B")
					cont++;
			}
			else
			if(this.y==0)
			{
				if(this.y==0 && this.x==0)
				{
					if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
				}
				else
				if(this.y==0 && this.x==9)
				{
					if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x-1][this.y+1].valore=="B")
						cont++;
				}
				else
				{
					if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x-1][this.y+1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y+1].valore=="B")
						cont++;
				}
			}
			else
			if(this.y==9)
			{
				if(this.y==9 && this.x==0)
				{
					if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y-1].valore=="B")
						cont++;
				}
				else
				if(this.y==9 && this.x==9)
				{
					if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x-1][this.y-1].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
				}
				else
				{
					if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
					if($scope.griglia [this.x-1][this.y-1].valore=="B")
						cont++;
					if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
					if($scope.griglia [this.x+1][this.y-1].valore=="B")
						cont++;
				}
			}
			else
			if(this.x==0)
			{
				if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
				if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
				if($scope.griglia [this.x+1][this.y].valore=="B")
						cont++;
				if($scope.griglia [this.x+1][this.y-1].valore=="B")
						cont++;
				if($scope.griglia [this.x+1][this.y+1].valore=="B")
						cont++;
			}
			else
			if(this.x==9)
			{
				if($scope.griglia [this.x][this.y-1].valore=="B")
						cont++;
				if($scope.griglia [this.x][this.y+1].valore=="B")
						cont++;
				if($scope.griglia [this.x-1][this.y].valore=="B")
						cont++;
				if($scope.griglia [this.x-1][this.y-1].valore=="B")
						cont++;
				if($scope.griglia [this.x-1][this.y+1].valore=="B")
						cont++;
			}
			
			return cont;
			
		}					
	}
		$scope.griglia =[ [], [], [], [], [], [], [], [], [], [] ];
		
	$scope.gioca = function()
	{
		for(var x=0;x<10;x++)
			for(var y=0;y<10;y++)
				$scope.griglia [x] [y]  = new $scope.casella(x,y);
			
		for(var i=0;i<10;i++)
		{
			var x = parseInt(Math.random()*10);
			var y = parseInt(Math.random()*10);
			$scope.griglia [x][y].valore = "B";
		}
		document.getElementById("perso").innerHTML ="";
		$scope.vai = true;
	}
	
	$scope.gioca();
	
	
	$scope.clicca = function(c)
	{
		if($scope.vai)
		{	
			if(c.valore!="B")
			{
				c.valore = c.bombeattorno();
				if(c.valore==0)
					$scope.apri(c.x,c.y);
			}
			else
			{
				$scope.vai = false;
				document.getElementById("perso").innerHTML ="Hai Perso!!";
			}
		}	
	}
	
	$scope.apri = function(x,y)
	{
		if(x!=0 && x!=9 && y!=0 && y!=9)
			{
				$scope.clicca($scope.griglia [x-1][y-1]);
				$scope.clicca($scope.griglia [x-1][y]);
				$scope.clicca($scope.griglia [x-1][y+1]);
				$scope.clicca($scope.griglia [x][y-1]);
				$scope.clicca($scope.griglia [x][y+1]);
				$scope.clicca($scope.griglia [x+1][y-1]);
				$scope.clicca($scope.griglia [x+1][y]);
				$scope.clicca($scope.griglia [x+1][y+1]);
			}
	}
	
	
	console.log($scope.griglia);
	
});
