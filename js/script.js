$(document).ready(function(){
  $(".menu").click(
    function(){
      $("#page-header").removeClass("landing")
      $("#page-header").addClass("bg-header-color")
      $(".nav-menu").show()
    }
  )
})

$(document).ready(function(){
  $(".close").click(
    function(){
      $("#page-header").removeClass("bg-header-color")
      $(".nav-menu").hide()
    }
  )
})
