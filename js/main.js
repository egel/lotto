/*
 * Pobiera aktualną datę
 */
function getCurrentDate()
{
	var today = new Date();
	return today;
}

/*
 * Sprawdza czy obiekt jest w zadanej tablicy
 */
function containsObject(obj, list)
{
	for(var i=0; i<list.length; i++)
	{
		if(list[i] === obj) {
			return true;
		}
	}
	return false;
}

/*
 * Pobiera losowy obietk z tablicy
 */
function getRandomNumberFromArray(bucket)
{
	var randomIndex = Math.floor(Math.random()*bucket.length);
	return bucket.splice(randomIndex, 1)[0];
}

/*
 * Generuje liczbę(amount) losowych numerków z zakresu 1 do 49
 */
function generateRandomNumbers(amount)
{
	var bucket = new Array();
	for(var i=1; i<=49; i++)
	{
		bucket.push(i);
	}
	
	var temp = new Array();
	for (var k=0; k<amount; k++)
	{ 
		temp.push(getRandomNumberFromArray(bucket));
	}
	return temp;
}

/*
 * Wypisuje numerki w miejscu wywołania funkcji
 */
function printRandomNumbers(amount)
{
	temp = generateRandomNumbers(amount);
	for (var i=0; i<amount; i++)
	{
		if (i == amount-1)
		{
			document.write(temp[i]);
		}
		else
		{
			document.write(temp[i] + ", ");
		}
	}
}

/*
 * Główna funkcja wpisująca wartości w pola
 */
function checkNumbers()
{
	// usunięcie elementów z wyników lotto
	var myNode = document.getElementById("wynikiLotto");
	myNode.innerHTML = '';
	var myNode = document.getElementById("orderNumbers");
	myNode.innerHTML = '';
	var myNode = document.getElementById("currentDate");
	myNode.innerHTML = '';
	
	$("#currentDate").append(getCurrentDate());
	
	var temp = generateRandomNumbers(6);
	var order = new Array();
	
	for(var r=1; r<=6; r++)
	{
		order.push(document.getElementById('n'+r).value);
		$("#orderNumbers").append('<li>'+ order[i-1] + '</li>');
	}
	
	for(var i=0; i<temp.length; i++)
	{
		if
		(
			parseInt(document.getElementById('n1').value) === temp[i]
			|| parseInt(document.getElementById('n2').value) === temp[i]
			|| parseInt(document.getElementById('n3').value) === temp[i]
			|| parseInt(document.getElementById('n4').value) === temp[i]
			|| parseInt(document.getElementById('n5').value) === temp[i]
			|| parseInt(document.getElementById('n6').value) === temp[i]
		)
		{
			$("#wynikiLotto").append('<li class="green">'+ temp[i] + '</li>');
		}
		else
		{
			$("#wynikiLotto").append('<li class="red">'+ temp[i] + '</li>');
		}
	}
}