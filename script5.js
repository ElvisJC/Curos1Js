/*
    Convertir a mayuscula y quitar el primer y ultimo espacio

    let capital = prompt(`¿Cúal es la capital de peru?`).toUpperCase().trim()
    console.log(capital)
    alert(capital===`LIMA` ?`correcto`:`incorrecto`)                       
*/ 

/*
    teacher="helloworld"
    teacher.indexOf(`o`)
    4
    teacher.indexOf(`o`,1)
    4
    teacher.indexOf(`o`,teacher.indexOf(`o`)+1)
    5   
*/

/*
    Encotrar cadenas de texto
    
    "hellooworld"
    
    `http://ed.team/blog`.includes(`blog`) 
    true //verifica si esta en la cadena

    `http://ed.team/blog`.startsWith(`http://ed.team`)
    true //verifica si comineza 
    
    `http://ed.team/blog`.endsWith(`ed.team/blog`)
    true
    //verifica si termina 

*/

/*
    'hola mundo'.replace('mundo','EDteam')
    "hola EDteam"
    
    "Elvistjesus".split("t")
    (2) ["Elvis", "jesus"]
    
    "Elvis jesus".split(" ")
    (2) ["Elvis", "jesus"]
    
    "Elvis jesus".split(" ")[1]
    "jesus"
    
    "Elvis jesus".split(" ")[0]
    "Elvis"
    
    "Elvis".split("")
    (5) ["E", "l", "v", "i", "s"]
    
    "Elvis".split("")[4]
    "s"
    
    "Elvis"[4]
    "s"

    "Elvis jesus".substring(1,10)
    "lvis jesu"

    "Elvis jesus".substring(4)
    "s jesus"


    "Elvis jesus".substr(2,5)
    "vis j"
*/
/*

    condicioanels simples 

    let age = parseInt(prompt ("Dime tu edad"),10)
    console.log(age)
    if (age){
        if (age >=18 ){
            alert("eres mayor de edad")
        }
        else {
            alert("NO ere   s mayor de edad")
        }
    }
    else {
        alert("por favor ingresa numeros");
    }
    console.log(age)
*/
/*
condicioanels no tan simples  
    
    let answer = parseInt(prompt ("Escoge un numero de 1 al 5"),10)
    switch (answer) {
        case 1: 
                alert("toro");break;
        case 2:
                alert("libra"); break;
        case 3: 
                alert("sagitario");break;
        default: 
                alert("Valor invlalid");break;

    }
*/