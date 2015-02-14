//------------->script de transformation nombres en lettres



//-----------−>veuillez utiliser la fonction to lettre!!!!!!!!


var unite=["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];

var dizaine=["","","vingt","trente","quarante","cinquante","soixante","","quatre-vingt"];



function centaine(n)
{
if(n<20)return unite[n];
else
if(n<100)
{
	var d=parseInt(n/10);
	d=((d==7)?6:d);
	d=((d==9)?8:d);
	
	var r=n-d*10;
	return dizaine[d]+(((r==1 || r==11)&& d!=8)?" et ":(r==0?" ":"-"))+unite[r];

}

}

function toLettre(n)
{
if(n<100) return centaine(n);
else
if(n<1000)
{
	var d=parseInt(n/100);
	var r=n-d*100;
	return (d==1?'':toLettre(d))+" cent"+((r==0 && d>1)?"s ":" ")+toLettre(r);
}
else
if(n<1000000)
{
	var d=parseInt(n/1000);
	var r=n-d*1000;
	return (d==1?"":toLettre(d))+" mille "+toLettre(r);
}
else 
if(n<1000000000)
{
	var d=parseInt(n/1000000);
	var r=n-d*1000000;
	return toLettre(d)+" million"+(d>1?"s ":" ")+toLettre(r);
}

else
if(n<1000000000000)
{
        var d=parseInt(n/1000000000);
        var r=n-d*1000000000;
        return toLettre(d)+" milliard"+(d>1?"s ":" ")+toLettre(r);
}


}


