function fun(id)
{
    var id = id.toString();
    var modal = document.getElementById("myModal"+id);
    var span = document.getElementsByClassName("close"+id)[0];
    modal.style.display = "block";
    span.onclick = function() {
        modal.style.display = "none";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
}