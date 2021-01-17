//criar uma função anônima, após declarar executar (evita conflitos com outras bibliotecas)
/*
(function($){
   
})(jQuery)
*/

(function($){

    //nome do plugin
    $.fn.load =function(action = 'load', params){

        let defaults ={
            divClass: 'dual-ring',
            divQtd: 0
        }

        //sobrescreve os padrões pelos prâmetros
        let options = $.extend(defaults, params)

        // garante com this.each que todos elementos serão afetados
        return this.each(function(){

            switch(action){
                case 'load':
                
                    let divToAppend = document.createElement('div')
                    divToAppend.id = 'loader'
                    $(divToAppend).css({
                         width: "100%",height:"100%",
                         position: "fixed",
                         top: 0,
                         left: 0,
                         "text-align": "center",
                         backgroundColor: "rgba(230, 5, 61, 0.795)"
                          
                         
                    })
                    
                    
                     let divLoad = document.createElement('div')
                     divLoad.className = 'lds-' + options.divClass
         
                     $(divLoad).css({
                         position: "absolute",
                         top: "50%",
                         left: "50%"
                     })

                     //quanti divs
                     for(let i =1; i<= options.divQtd; i++){
                        $(divLoad).append('<div></div>');
                    }

         
                     //pegar a div load e adicionar dentro da div principal usando o método do jquery append
         
                     $(divToAppend).append(divLoad);

                    

                     <div class="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                     //adicionar a div ao body
                     $(this).append(divToAppend)
                

                break;

                case 'unload':
                    $('#loader').fadeOut(function(){
                        $(this).remove
                    })     

                break

                default:
                    console.error('Informe uma ação válida')
            }

           

        })
    }
})(jQuery)

