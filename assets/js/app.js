(function ($) {

  (function () {
    $('select').formSelect();
    $('.tabs').tabs();
    $('.dropdown-trigger').dropdown();
  })();

  (function () {
    function navigationLarge(){
      var navs = $('.navigation');
      if($(window).width() >= 1184){
        $(navs).on('mouseenter', function () {
          $(this).addClass('navigation_open')
        })
        $(navs).on('mouseleave', function () {
          $(this).removeClass('navigation_open')
        })
      }
      else{
        $(navs).on('mouseenter', function () {
          $(this).removeClass('navigation_open')
        })
        $(navs).on('mouseleave', function () {
          $(this).removeClass('navigation_open')
        })
      }
    }
    navigationLarge();
    $(window).on('resize', function(){
      navigationLarge();
    })

  })();

  (function(){
    function navigation(){
      var hamburger = $('.navigation__hamburger-button');
      var icon = $('.hamburger-menu-icon');
      $(hamburger).on('click', function(){
        $(icon).toggleClass('hamburger-menu-icon--open');
        $('.navigation__wrapper').toggleClass('navigation__wrapper_open');
      })
    }
    navigation()
  })();


  (function () {
    function topbarWidth() {
      var container = $('.dashboard__panel').width();
      var topbar = $('.topbar');

      $(topbar).css('width', container);
    }
    if($(window).width() > 1183){
      topbarWidth()
    }
    else{
      $('.topbar').css('width', '100%')
    }
    $(window).resize(function(){
      if($(window).width() > 1183){
        topbarWidth()
      }
      else{
        $('.topbar').css('width', '100%')
      }
    })
  })();

  (function () {
    var container = $('.tobpar__user-data-dropdown')
    $('.tobpar__user-data-dropdown').on('click', function (e) {
      if ($(this).hasClass('tobpar__user-data-dropdown_open')) {
        $(this).removeClass('tobpar__user-data-dropdown_open');
      } else {
        $(this).addClass('tobpar__user-data-dropdown_open');
      }
    })
    $(document).on('click', function (e) {
      if ($(e.target).closest(container).length === 0) {
        if ($(container).hasClass('tobpar__user-data-dropdown_open')) {
          $(container).removeClass('tobpar__user-data-dropdown_open');
        }
      }
    })
  })();

  (function () {
    $('.dashboard__panel-tips-tabs-content').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      centerMode: true,
      // autoplay: true,
      responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  })();


  (function () {
    var ctx = document.getElementById("chart").getContext("2d");

    /*** Gradient ***/
    var gradient = ctx.createLinearGradient(26, 50, 0, 600);
    gradient.addColorStop(0, 'rgba(20,125,108,0.7)');
    gradient.addColorStop(1, 'rgba(20,125,108,0)');
    /***************/

    var data = {
      labels: ["02:00", "04:00", "06:00", "08:00", "10:00", "12:00", "14:00", "16:00", "18:00", "20:00", "22:00", "00:00"],
      datasets: [{
        backgroundColor: gradient, // Put the gradient here as a fill color
        borderColor: "#0cbb66",
        pointBackgroundColor: "#08d56d",
        pointBorderColor: "#08d56d",
        pointHighlightFill: "#08d56d",
        pointHighlightStroke: "#08d56d",
        data: [32, 30, 25, 20, 27, 22.0, 23.2, 24.1, 20.0, 18.4, 19.1, 17.4]
      }],
    };

    var options = {
      responsive: true,
      datasetStrokeWidth: 3,
      pointDotStrokeWidth: 4,
      tooltipFillColor: "rgba(0,0,0,0.8)",
      tooltipFontStyle: "bold",
      tooltipTemplate: "<%if (label){%><%=label + ' hod' %>: <%}%><%= value + '°C' %>",
      scaleLabel: "<%= Number(value).toFixed(0).replace('.', ',') + '°C'%>",
      legend:  false,
      scales:
      {
          xAxes: [{
              display: false
          }]
      }
    };
    var myNewChart = new Chart(ctx , {
      type: "line",
      data: data, 
      options: options
  });
  })();

})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uICgkKSB7XHJcblxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdzZWxlY3QnKS5mb3JtU2VsZWN0KCk7XHJcbiAgICAkKCcudGFicycpLnRhYnMoKTtcclxuICAgICQoJy5kcm9wZG93bi10cmlnZ2VyJykuZHJvcGRvd24oKTtcclxuICB9KSgpO1xyXG5cclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gbmF2aWdhdGlvbkxhcmdlKCl7XHJcbiAgICAgIHZhciBuYXZzID0gJCgnLm5hdmlnYXRpb24nKTtcclxuICAgICAgaWYoJCh3aW5kb3cpLndpZHRoKCkgPj0gMTE4NCl7XHJcbiAgICAgICAgJChuYXZzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25hdmlnYXRpb25fb3BlbicpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKG5hdnMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbmF2aWdhdGlvbl9vcGVuJylcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgJChuYXZzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25hdmlnYXRpb25fb3BlbicpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAkKG5hdnMpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbmF2aWdhdGlvbl9vcGVuJylcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBuYXZpZ2F0aW9uTGFyZ2UoKTtcclxuICAgICQod2luZG93KS5vbigncmVzaXplJywgZnVuY3Rpb24oKXtcclxuICAgICAgbmF2aWdhdGlvbkxhcmdlKCk7XHJcbiAgICB9KVxyXG5cclxuICB9KSgpO1xyXG5cclxuICAoZnVuY3Rpb24oKXtcclxuICAgIGZ1bmN0aW9uIG5hdmlnYXRpb24oKXtcclxuICAgICAgdmFyIGhhbWJ1cmdlciA9ICQoJy5uYXZpZ2F0aW9uX19oYW1idXJnZXItYnV0dG9uJyk7XHJcbiAgICAgIHZhciBpY29uID0gJCgnLmhhbWJ1cmdlci1tZW51LWljb24nKTtcclxuICAgICAgJChoYW1idXJnZXIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChpY29uKS50b2dnbGVDbGFzcygnaGFtYnVyZ2VyLW1lbnUtaWNvbi0tb3BlbicpO1xyXG4gICAgICAgICQoJy5uYXZpZ2F0aW9uX193cmFwcGVyJykudG9nZ2xlQ2xhc3MoJ25hdmlnYXRpb25fX3dyYXBwZXJfb3BlbicpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgbmF2aWdhdGlvbigpXHJcbiAgfSkoKTtcclxuXHJcblxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiB0b3BiYXJXaWR0aCgpIHtcclxuICAgICAgdmFyIGNvbnRhaW5lciA9ICQoJy5kYXNoYm9hcmRfX3BhbmVsJykud2lkdGgoKTtcclxuICAgICAgdmFyIHRvcGJhciA9ICQoJy50b3BiYXInKTtcclxuXHJcbiAgICAgICQodG9wYmFyKS5jc3MoJ3dpZHRoJywgY29udGFpbmVyKTtcclxuICAgIH1cclxuICAgIGlmKCQod2luZG93KS53aWR0aCgpID4gMTE4Myl7XHJcbiAgICAgIHRvcGJhcldpZHRoKClcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICQoJy50b3BiYXInKS5jc3MoJ3dpZHRoJywgJzEwMCUnKVxyXG4gICAgfVxyXG4gICAgJCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xyXG4gICAgICBpZigkKHdpbmRvdykud2lkdGgoKSA+IDExODMpe1xyXG4gICAgICAgIHRvcGJhcldpZHRoKClcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICQoJy50b3BiYXInKS5jc3MoJ3dpZHRoJywgJzEwMCUnKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pKCk7XHJcblxyXG4gIChmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgY29udGFpbmVyID0gJCgnLnRvYnBhcl9fdXNlci1kYXRhLWRyb3Bkb3duJylcclxuICAgICQoJy50b2JwYXJfX3VzZXItZGF0YS1kcm9wZG93bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCd0b2JwYXJfX3VzZXItZGF0YS1kcm9wZG93bl9vcGVuJykpIHtcclxuICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0b2JwYXJfX3VzZXItZGF0YS1kcm9wZG93bl9vcGVuJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndG9icGFyX191c2VyLWRhdGEtZHJvcGRvd25fb3BlbicpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgaWYgKCQoZS50YXJnZXQpLmNsb3Nlc3QoY29udGFpbmVyKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBpZiAoJChjb250YWluZXIpLmhhc0NsYXNzKCd0b2JwYXJfX3VzZXItZGF0YS1kcm9wZG93bl9vcGVuJykpIHtcclxuICAgICAgICAgICQoY29udGFpbmVyKS5yZW1vdmVDbGFzcygndG9icGFyX191c2VyLWRhdGEtZHJvcGRvd25fb3BlbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KSgpO1xyXG5cclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLmRhc2hib2FyZF9fcGFuZWwtdGlwcy10YWJzLWNvbnRlbnQnKS5zbGljayh7XHJcbiAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gICAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICAgICAgcmVzcG9uc2l2ZTogW3tcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzOTksXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF1cclxuICAgIH0pO1xyXG4gIH0pKCk7XHJcblxyXG5cclxuICAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhcnRcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5cclxuICAgIC8qKiogR3JhZGllbnQgKioqL1xyXG4gICAgdmFyIGdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDI2LCA1MCwgMCwgNjAwKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyMCwxMjUsMTA4LDAuNyknKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyMCwxMjUsMTA4LDApJyk7XHJcbiAgICAvKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIHZhciBkYXRhID0ge1xyXG4gICAgICBsYWJlbHM6IFtcIjAyOjAwXCIsIFwiMDQ6MDBcIiwgXCIwNjowMFwiLCBcIjA4OjAwXCIsIFwiMTA6MDBcIiwgXCIxMjowMFwiLCBcIjE0OjAwXCIsIFwiMTY6MDBcIiwgXCIxODowMFwiLCBcIjIwOjAwXCIsIFwiMjI6MDBcIiwgXCIwMDowMFwiXSxcclxuICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBncmFkaWVudCwgLy8gUHV0IHRoZSBncmFkaWVudCBoZXJlIGFzIGEgZmlsbCBjb2xvclxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcIiMwY2JiNjZcIixcclxuICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogXCIjMDhkNTZkXCIsXHJcbiAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogXCIjMDhkNTZkXCIsXHJcbiAgICAgICAgcG9pbnRIaWdobGlnaHRGaWxsOiBcIiMwOGQ1NmRcIixcclxuICAgICAgICBwb2ludEhpZ2hsaWdodFN0cm9rZTogXCIjMDhkNTZkXCIsXHJcbiAgICAgICAgZGF0YTogWzMyLCAzMCwgMjUsIDIwLCAyNywgMjIuMCwgMjMuMiwgMjQuMSwgMjAuMCwgMTguNCwgMTkuMSwgMTcuNF1cclxuICAgICAgfV0sXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICBkYXRhc2V0U3Ryb2tlV2lkdGg6IDMsXHJcbiAgICAgIHBvaW50RG90U3Ryb2tlV2lkdGg6IDQsXHJcbiAgICAgIHRvb2x0aXBGaWxsQ29sb3I6IFwicmdiYSgwLDAsMCwwLjgpXCIsXHJcbiAgICAgIHRvb2x0aXBGb250U3R5bGU6IFwiYm9sZFwiLFxyXG4gICAgICB0b29sdGlwVGVtcGxhdGU6IFwiPCVpZiAobGFiZWwpeyU+PCU9bGFiZWwgKyAnIGhvZCcgJT46IDwlfSU+PCU9IHZhbHVlICsgJ8KwQycgJT5cIixcclxuICAgICAgc2NhbGVMYWJlbDogXCI8JT0gTnVtYmVyKHZhbHVlKS50b0ZpeGVkKDApLnJlcGxhY2UoJy4nLCAnLCcpICsgJ8KwQyclPlwiLFxyXG4gICAgICBsZWdlbmQ6ICBmYWxzZSxcclxuICAgICAgc2NhbGVzOlxyXG4gICAgICB7XHJcbiAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgICAgICAgfV1cclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIHZhciBteU5ld0NoYXJ0ID0gbmV3IENoYXJ0KGN0eCAsIHtcclxuICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgIGRhdGE6IGRhdGEsIFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zXHJcbiAgfSk7XHJcbiAgfSkoKTtcclxuXHJcbn0pKGpRdWVyeSk7Il19
