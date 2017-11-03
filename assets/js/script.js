function add() { /*tomar valor evento*/
	var comment= document.getElementById('comment').value;
	/* creo una variable para resacatar valor*/
	document.getElementById('comment').value="";
/*le digo que limpie*/
var newComment=document.createElement('div');
var cont= document.getElementById('cont');
var check= document.createElement('input');/* check box= es un input tipo check box, es un nodo type*/
check.type= 'checkbox';
var paragraph= document.createElement('p');
paragraph.classList.add('color');/* creamos clase para elemento p, p tiene un hijo que se llama textp
y debe ser creado*/
var nodoText= document.createTextNode(comment);/*va sin comillas porque llamo a las variables*/
/* creo nodo de texto primero, lo rescatamos desde comments, o sea dek valor que pusimos*/
paragraph.appendChild(nodoText);/* cree p y luego le dije de quien era hijo para poder llamar al hijo*/
var heart= document.createElement('i');/*creo el ícono de corazón*/
heart.classList.add('fa', 'fa-heart', 'heart');
var trash= document.createElement('i');
trash.classList.add('fa', 'fa-trash', 'trash');
/* siempre se crea de lo micro a lo macro, por eso el gran papá div, se crea al final*/
newComment.appendChild(check);
newComment.appendChild(trash);
newComment.appendChild(heart);
newComment.appendChild(paragraph);/* pasamos a todas al div newComments*/
cont.appendChild(newComment);/*cont es el padre de newcomments, le digo que se haga cargo*/
/*listener, espera una orden o una reacción*/
check.addEventListener('click',function(){	
	paragraph.classList.toggle('strike-out');
/* tooggle es para poner algo*/	
})
trash.addEventListener('click', function(){
	cont.removeChild(newComment);
})
heart.addEventListener('click',function(){
	heart.classList.toggle('red');/* tarea para la casa generar validación de que 
	cuando no escriba nada y aprete agregar, no muestre los cambios*/
})
}