let a
$('#button').on('click',function(){
  if(a>1){
    $('#fu').hide()
    a=1
  }else{
    $('#fu').show()
    a=2
    console.log('2')
  }
})
$('#parent').on('click',function(b){
 b.stopPropagation() 
})
$(document).on('click',function(){
  $('#fu').hide()
    a=1
})
