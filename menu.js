$(document).ready(function() {

	var i = 1;
		$("#menu_6").click(function() {
			if(i % 2 != 0) {
				$("#menu_5").animate({

					left: '250px'
				});
				$("#menu_4").animate({

					left: '225px',
					bottom: '125px'
				});
				$("#menu_3").animate({

					left: '175px',
					bottom: '250px'
				});
				$("#menu_2").animate({

					left: '105px',
					bottom: '350px'
				});
				$("#menu_1").animate({

					bottom: '400px'
				});
				i++;
				console.log(i);
			} else {
				$("#menu_5").animate({

					left: '0px'
				});
				$("#menu_4").animate({

					left: '0px',
					bottom: '0px'
				});
				$("#menu_3").animate({

					left: '0px',
					bottom: '0px'
				});
				$("#menu_2").animate({

					left: '0px',
					bottom: '0px'
				});
				$("#menu_1").animate({

					bottom: '0px'
				});
				i++;
				console.log(i);	
			}
		});
	
});

