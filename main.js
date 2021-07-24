$(document).ready(function(){

    // $('#btn1').click(function(){
    //     alert('Hello world!');
    // }) 
   
    // $('#btn1').on('click',function(){
    //     alert('Hello Bangladesh')
    // })
   
    $('#btn1').on('click',function(){
        // $('.para1').hide();
        $('.para1').toggle();
    });

    $('#btn2').on('click',function(){
        $('.para1').show();
    })

    // $('#btn1').dblclick(function(){
    //     $('.para1').toggle();
    // });

    $('#btn1').hover(function(){
        $('.para1').toggle();
    })

    // $('#btn1').on('mouseenter',function(){
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('mouseleave',function(){
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('mousemove',function(){
    //     $('.para1').toggle();
    // });

    // $('#btn1').on('mousedown',function(){
    //     $('.para1').toggle();
    // })
    
    // $('#btn1').on('mouseup',function(){
    //     $('.para1').toggle();
    // })

//    $('#btn1').click(function(e){
//        console.log(e);
//    });

    // $('#btn1').click(function(e){
    //    alert(e.currentTarget.id);
    // });

    // $('#btn1').click(function(e){
    //     // alert(e.currentTarget.innerHTML);
    //     // alert(e.currentTarget.outerHTML);
    //     alert(e.currentTarget.className)
    //  });

    $('input').focus(function(){
        // alert('Focus');
        $(this).css({
            "color":"#222",
            "background": "#ccc"
        });
    });

    $('input').blur(function(){
        // alert('Focus');
        $(this).css({
            "color":"#222",
            "background": "white"
        });
    });

    $('input').keyup(function(e){
        // console.log('keyup');
        console.log(e.target.value);
    });

    // $('select#gender').change(function(){
    //     alert('changed');
    // });

    $('select#gender').change(function(e){
        alert(e.target.value);
    });

    $('#form').submit(function(e){
        e.preventDefault();
        var name= $('input#name').val();
        console.log('Submitted');
    })
})