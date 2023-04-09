
    var currentPage = 1;
    var rowsPerPage = 5;

    function showTablePage(pageNumber) {
      var table = document.getElementById("myTable");
      var rows = table.getElementsByTagName("tr");
      var startIndex = (pageNumber - 1) * rowsPerPage + 1;
      var endIndex = startIndex + rowsPerPage - 1;

      for (var i = 1; i<rows.length; i++) {
        if (i < startIndex || i > endIndex) {
          rows[i].style.display = "none";
        } else {
          rows[i].style.display = "";
        }
      }

      var paginationLinks = document.getElementsByClassName("page-link");
      for (var j = 0; j < paginationLinks.length; j++) {
        paginationLinks[j].classList.remove("active");
      }
      paginationLinks[pageNumber - 1].classList.add("active");

      currentPage = pageNumber;
    }

    function previousPage() {
      if (currentPage > 1) {
        showTablePage(currentPage - 1);
      }
    }

    function nextPage() {
      var table = document.getElementById("myTable");
      var rows = table.getElementsByTagName("tr");
      var maxPageNumber = Math.ceil((rows.length - 1) / rowsPerPage);
      if (currentPage < maxPageNumber) {
        showTablePage(currentPage + 1);
      }
    }
